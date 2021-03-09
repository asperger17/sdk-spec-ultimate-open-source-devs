# Elarian SDK Spec

> Elarian is a customer engagement runtime that let's you code against customer data allowing you to track, schedule, execute and analyze engagement actions from a customer's point-of-view.


Elarian is built on [RSocket](http://rsocket.io/) and ~~fully~~ embraces reactive streams concepts. Therefore it depends on drivers that implement the [RSocket Protocol](https://github.com/rsocket/rsocket/blob/master/Protocol.md). The driver should, at minimum, implement the following core RSocket features:

- Interaction models
    - request/response
    - ~~requestStream~~
- Fragmentation/Reassembly
- Request-N, Keep-Alive and Error frames
- Resuming Operation

## Core API

Real-time interactions with the Elarian API server happen in one of two ways:

- An application sends a **command** to the server
- An application receives **notifications** from the server

The applications opens a socket connection to the API server and all interactions will happen through this socket. Therefore, this socket needs to be kept open for the entire execution time of the application (i.e. since that could be 1 second or 1 year, the connection needs to be re-established automatically in case of connectivity issues).

An application can open one of two types of sockets:

- **App**: Socket used for normal (default) app commands. e.g. set a reminder on a customer, etc.
- **Simulator**: Socket used to simulate a customer's interactions with their mobile device. e.g. send an SMS, dial a USSD, etc.

The binary data sent back and forth through the socket is defined by the generated protobuf messages. [LINK HERE]()

### Authentication

When establishing the socket connection, the RSocket setup frame must contain a data payload with the following:

- An API key (or optionally an auth token)
- An application id
- An organization id

After connection is established, application data can now flow through the socket without needed to send these credentials.

### Commands (App-To-Server)

- *GenerateAuthToken*

- *GetCustomerState*
- *AdoptCustomerState*
- *AddCustomerReminder*
- *AddCustomerReminderByTag*
- *CancelCustomerReminder*
- *CancelCustomerReminderByTag*
- *UpdateCustomerTag*
- *DeleteCustomerTag*
- *UpdateCustomerSecondaryId*
- *DeleteCustomerSecondaryId*
- *UpdateCustomerMetadata*
- *DeleteCustomerMetadata*
- *LeaseCustomerAppData*
- *UpdateCustomerAppData*
- *DeleteCustomerAppData*
- *CustomerActivity*

- *SendMessage*
- *SendMessageTag*
- *ReplyToMessage*
- *UpdateMessagingConsent*

- *InitiatePayment*

The following are sent from simulator connections only:

- *ReceiveMessage*

- *ReceivePayment*
- *UpdatePaymentStatus*

### Notifications (Server-To-App)

- *Reminder*
- *MessagingSessionStarted*
- *MessagingSessionRenewed*
- *MessagingSessionEnded*
- *MessagingConsentUpdate*
- *ReceivedMessage*
- *MessageStatus*
- *SentMessageReaction*
- *ReceivedPayment*
- *PaymentStatus*
- *WalletPaymentStatus*
- *CustomerActivity*

- *WalletPaymentStatus*

The following are sent to simulator connections only:

- *SendMessage*
- *MakeVoiceCall*

- *SendCustomerPayment*
- *SendChannelPayment*
- *CheckoutPayment*

## Programing Paradigm

A development model structured around asynchronous data streams is recommended (i.e. reactive programming) for the SDK. Elarian applications are expected to be built around customer data. As such, developers will be observing and reacting to events([notifications](#Notifications)) being streamed from the Elarian API server in real-time, while at the same time emitting events([commands](#Commands)) to the API server.

For example, a lending institution, say a bank, could build an app that automates debt collection. The app could set reminders on each of the institution's customers. When a payment is due, Elarian will notify the app and the company could decide to engage the customer via SMS. Say the SMS to the customer tells them to reply with OK to initiate payment via mobile wallet. If they do, the app sends a command to initiate mobile checkout from the customer's mobile wallet. If they don't, the app could engage the customer with a phone call. The voice prompt could ask them to press 1 to initiate payment, etc.

The SDK needs to provide a programing model to the app developer that allows them to efficiently build such an app and have it work effectively for 10 customers as well as 10 million. Reactive programming (in whatever form makes sense for the language) gives the dev the tools they need to build highly scalable and efficient applications.

## Classes

The SDK should have the following models/classes with methods that correspond to the above commands:

### **Elarian**

- `connect()`

- `disconnect()`

- `on(event: String, handler: NotificationHandler)`

  - `registerNotificationHandler(event: String, handler: NotificationHandler)`

- `generateAuthToken(): Future<AuthToken>`

- `addCustomerReminderByTag(tag: Tag, reminder: Reminder): Future<TagUpdateReply>`

- `cancelCustomerReminderByTag(tag: Tag, key: String): Future<TagUpdateReply>`

- `sendMessageByTag(tag: Tag, channel: MessagingChannel, message: Message): Future<MessageReply>`

- `initiatePayment(source: PaymentCounterParty, destination: PaymentCounterParty, value: Cash): Future<InitiatePaymentReply>`

### **Customer**

- `getState(): Future<CustomerState>`

- `adoptState(customer: Customer): Future<CustomerStateUpdateReply>`

- `sendMessage(channel: MessagingChannel, message: Message): Future<MessageReply>`

- `replyToMessage(messageId: String, message: Message): Future<MessageReply> `

- `updateActivity(channel: ActivityChannel, activity: Activity): Future<CustomerStateUpdateReply>`

- `updateMessagingConsent(channel: MessagingChannel, action: ConsentAction): Future<ConsentUpdateReply>`

- `leaseAppData(): Future<Map<String, Any>>`

- `updateAppData(data: Map<String, Any>): Future<CustomerStateUpdateReply>`

- `deleteAppData(): Future<CustomerStateUpdateReply> `

- `updateMetadata(data: Map<String, Any>): Future<CustomerStateUpdateReply>`

- `deleteMetadata(keys: String[]): Future<CustomerStateUpdateReply>`

- `updateSeconndaryIds(ids: SecondaryId[]): Future<CustomerStateUpdateReply>`

- `deleteSecondaryIds(ids: SecondaryId[]): Future<CustomerStateUpdateReply> `

- `updateTags(tags: Tag[]): Future<CustomerStateUpdateReply>`

- `deleteTags(keys: String[]): Future<CustomerStateUpdateReply>`

- `addReminder(reminder: Reminder): Future<CustomerStateUpdateReply>`

- `cancelReminder(key: String): Future<CustomerStateUpdateReply>`

For example, a Java application **could** send a message like this:

```java
//... asumes use of reactive library reactor
Elarian client = new Elarian('org-id', 'api-key', 'app-id');
Customer customer = new Customer(client, '+2547xxx89883');

client.connect();

// Using the customer
customer.sendMessage(channel, message)
  	.subscribe(System.out.println);
```

### **Simulator**

- `connect()`

- `disconnect()`

- `on(event: String, handler: NotificationHandler)`

  - `registerNotificationHandler(event: String, handler: NotificationHandler)`

- `receiveMessage(customer: Customer, channel: MessagingChannel, sessionId: String, parts: InboundMessageBody[]): Future<SimulatorReply>`

- `receivePayment(): Future<SimulatorReply>`

- `updatePaymentStatus(): Future<SimulatorReply>`


### Others Models

- **AuthToken**

```js
{
  token: String,
  lifetime: Long, // Duration, in seconds
}
```

- **CustomerState**

```js
{
  customerId: String,
  identityState: IdentityState,
  messagingState: MessagingState,
  paymentState: PaymentState,
  activityState: ActivityState
}
```

- **CustomerNumber**

```js
{
  number: String,
  provider: { // one of
    CELLULAR,
    TELEGRAM,
    FACEBOOK,
    WEB,
    EMAIL
  }
}
```

- **CustomerStateUpdateReply**

```js
{
  status: Boolean
  customerId: String,
  description: String
}
```

- **Tag**

```js
{
  key: String,
  value: String,
  expiresAt: Long // timestamp
}
```

- **SecondaryId**

```js
{
  // Same as Tag
}
```

- **TagUpdateReply**

```js
{
  status: Boolean
  workId: String,
  description: String
}
```

- **Media**

```js
{
  url: String,
  type: { // MediaType
    IMAGE,
    VIDEO,
    AUDIO,
    VOICE,
    DOCUMENT,
    STICKER,
    CONTACT
  }
}
```

- **Location**

```js
{
  label: String,
  address: String,
  latitude: Double,
  longitude: Double
}
```

- **Email**

```js
{
  subject: String,
  bodyPlain: String,
  bodyHtml: String,
  ccList: String[],
  bccList: String[],
  attachments: String[]
}
```

- **VoiceAction**

```js
{
  // Each of these classes extends VoiceAction
  say: Say,
  play: Play,
  getDigits: GetDigits,
  dial: Dial,
  recordSession: RecordSession,
  getRecording: GetRecording,
  enqueue: Enqueue,
  dequeue: Dequeue,
  reject: Reject,
  redirect: Redirect,
}
```

- **Message**

```js
{
  body: MessageBody,
  labels: String[],
  providerTag: String,
  replyToken: String,
  replyPrompt: {
    action: { // PromptMessageReplyAction
      TEXT,
      PHONE_NUMBER,
      EMAIL,
      LOCATION,
      URL
    }
    menu: [
      { // one of
        text: String,
        media: Media,
      }
    ]
  }
}
```

- **UssdMenu**

```js
{
  text: String,
  isTerminal: Boolean
}
```

- **Template**

```js
{
  id: String,
  params: Object
}
```

- **MessageBody**

```js
{ // only value of one is required
  text: String,
  template: Template,
  media: Media,
  location: Location,
  email: Email,
  voice: VoiceAction[],
  ussd: UssdMenu,
  url: String
}
```

- **InboundMessageBody**

```js
{
  // only value of one is required
  text: String,
  media: Media,
  location: Location,
  email: Email,
  voice: {
    direction: VoiceCallDirection,
    status: VoiceCallStatus,
    startedAt: Long,
    hangupCause: VoiceCallHangupCause,
    dtmfDigits: String,
    recordingUrl: String,
    dialData: VoiceCallDialInput,
    queueData: VoiceCallQueueInput,
  },
  ussd: String
}
```

- **MessageReply**

```js
{
  status: { // MessageDeliveryStatus
    QUEUED
    SENT
    DELIVERED
    READ
    RECEIVED
    SESSION_INITIATED
    FAILED
    NO_CONSENT
    NO_CAPABILITY
    EXPIRED
    NO_SESSION_IN_PROGRESS
    OTHER_SESSION_IN_PROGRESS
    INVALID_REPLY_TOKEN
    INVALID_CHANNEL_NUMBER
    NOT_SUPPORTED
    INVALID_REPLY_TO_MESSAGE_ID
    INVALID_CUSTOMER_ID
    DUPLICATE_REQUEST 
    TAG_NOT_FOUND
    CUSTOMER_NUMBER_NOT_FOUND
    DECOMMISSIONED_CUSTOMERID
    REJECTED
    INVALID_REQUEST
    APPLICATION_ERROR
  },
  description: String,
  messageId: String,
  sessionId: String,
  customerId: String
}
```

- **MessagingChannel**

```js
{
  number: String,
  channel: { // MessagingChannel.Channel
    SMS,
    VOICE,
    USSD,
    FB_MESSENGER,
    TELEGRAM,
    WHATSAPP,
    EMAIL
  }
}
```

- **PaymentChannel**

```js
{
  number: String,
  channel: { // PaymentChannel.Channel
    CELLULAR,
  }
}
```

- **ActivityChannel**

```js
{
  number: String,
  channel: { // ActivityChannel.Channel
    WEB,
    MOBILE,
  }
}
```

- **Activity**

```js
{
  key: String,
  properties: Map<String, String>
  createdAt: Long // Timestamp
}
```

- **ConsentAction**

```js
{
  ALLOW,
  BLOCK
}
```

- **Reminder**

```js
{
  key: String,
  remindAt: Long, // Timestamp
  interval: Int,  // Duration in seconds
  payload: String
}
```

- **SimulatorReply**

```js
{
  status: Boolean
  description: String,
  message: Message 
}
```

- **Cash**

```js
{
  currenncyCode: String,
  amount: Double,
}
```

- **Future**: Any construct that sends the command and receives the response asynchronously. e.g. *promises* in JavaScript, *Flux/Mono* in reactor, etc.

- **NotificationHandler**: A function used to handle incoming notifications. It has the following signature:

```
function handler(notification: Notification, customer: Customer, callback: NotificationCallback): void
```

- **NotificationCallback**: A function that responds to a notification. It has the following signature:

```
function callback(message: MessageBody, appData: Map<String, Any>): void
```

- **Notification**

```js
{ // Notification
  orgId: String,
  appId: String,
  customerId: String,
  appData: Map<String,Any>,
  createdAt: Long,
}
  
{ // PaymentStatusNotification extends Notification
  purseId: String, // Optional
  transactionId: String,
  status: { // PaymentStatus
    QUEUED
    PENDING_CONFIRMATION
    PENDING_VALIDATION
    VALIDATED
    INVALID_REQUEST
    NOT_SUPPORTED
    INSUFFICIENT_FUNDS
    APPLICATION_ERROR
    NOT_ALLOWED
    DUPLICATE_REQUEST
    INVALID_PURSE
    INVALID_WALLET
    DECOMMISSIONED_CUSTOMER_ID
    SUCCESS
    PASS_THROUGH
    FAILED
    THROTTLED
    EXPIRED
    REJECTED
    REVERSED
  }
}
 
{ // WalletPaymentNotification extends Notification
  walletId: String,
  transactionId: String,
  status: PaymentStatus
}

{ // ReminderNotification extends Notification
  reminder: Reminder,
  tag: Tag,
  workId: String
}
  
{ // MessagingSessionInitializedNotification extends Notification
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  sessionId: String,
  expiresAt: Long,
}
  
{ // MessagingSessionEndedNotification extends Notification
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  sessionId: String,
  duration: Long,
  reason: { // MessagingSessionEndReason
    NORMAL_CLEARING,
    INACTIVITY,
    FAILURE
  }
}
  
{ // MessagingConsentUpdateNotification extends Notification
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  sessionId: String,
  update: ConsentAction,
  status: { // MessagingConsentUpdateStatus
    QUEUED,
    COMPLETED,
    INVALID_CHANNEL_NUMBER,
    DECOMMISSIONED_CUSTOMER_ID,
    APPLICATION_ERROR
  }
}
  
{ // MessageStatusNotification extends Notification
  messageId: String,
  status: MessageDeliveryStatus
}
  
{ // SentMessageReactionNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  reaction: { // MessageReaction
    CLICKED,
    UNSUBSCRIBED,
    COMPLAINED
  }
}


{ // ReceivedPaymentNotification extends Notification
  purseId: String,
  trannsactionId: String,
  customerNumber: CustomerNumber,
  channel: PaymentChannel,
  value: Cash,
  status: PaymentStatus,
}
 

{ // CustomerActivityNotification extends Notification
  customerNumber: CustomerNumber,
  channel: ActivityChannel,
  sessionId: String,
  activity: Activity,
}


{ // ReceivedSmsNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  text: String,
}

{ // ReceivedMediaNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  media: Media,
  location: Location,
  email: Email,
  sessionId: String,
  inReplyTo: String,
}

{ // UssdSessionNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  ussd: String,
  sessionId: String,
}

{ // VoiceCallNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channel: MessagingChannel,
  sessionId: String,

  direction: { // VoiceCallDirection
    INBOUND,
    OUTBOUND
  },

  status: { // VoiceCallStatus
    QUEUED
    ANSWERED
    RINGING
    ACTIVE
    DIALING
    DIAL_COMPLETED
    BRIDGED
    ENQUEUED
    DEQUEUED
    TRANSFERRED
    TRANSFER_COMPLETED
    COMPLETED
    INSUFFICIENT_CREDIT
    NOT_ANSWERED
    INVALID_PHONE_NUMBER
    DESTINATION_NOT_SUPPORTED
    DECOMMISSIONED_CUSTOMERID
    EXPIRED
    INVALID_CHANNEL_NUMBER
    APPLICATION_ERROR
  },

  hangupCause: { // VoiceCallHangupCause
    UNALLOCATED_NUMBER
    USER_BUSY
    NORMAL_CLEARING
    NO_USER_RESPONSE
    NO_ANSWER
    SUBSCRIBER_ABSENT
    CALL_REJECTED
    NORMAL_UNSPECIFIED
    NORMAL_TEMPORARY_FAILURE
    SERVICE_UNAVAILABLE
    RECOVERY_ON_TIMER_EXPIRE
    ORIGINATOR_CANCEL
    LOSE_RACE
    USER_NOT_REGISTERED
  },

  startedAt: Long,
  dtmfDigits: String,
  recordingUrl: String,
  dialData: { // VoiceCallDialInput
      destinationNumber: String,
      startedAt: Long,
      duration: Long
  },
  queueData: { // VoiceCallQueueInput
    enqueuedAt: Long,
    dequeuedAt: Long,
    dequeuedToNumber: String,
    dequeuedToSessionId: String,
    queueDuration: Long,
  },
}
```

## Events

The SDK should allow developers to listen for and respond asynchronously to the following events (which correspond to the above notifications):

### Connection

- `pending`

- `connecting`

- `connected`

- `error`

### App

- `reminder`

- `messagingSessionStarted`

- `messagingSessionRenewed`

- `messagingSessionEnded`

- `messagingConsentUpdate`

- ~~receivedMessage~~

  - `receivedSms`

  - `receivedFbMessenger`

  - `receivedTelegram`

  - `receivedWhatsapp`

  - `receivedEmail`

  - `voiceCall`

  - `ussdSession`

- `messageStatus`

- `sentMessageReaction`

- `receivedPayment`

- `paymentStatus`

- `walletPaymentStatus`

### Simulator

- `sendMessage`

- `makeVoiceCall`

- `sendCustomerPayment`

- `sendChannelPayment`

- `checkoutPayment`

For example, a JavaScript application **could** listen for SMS ussd like this:

```js
const client = new Elarian('org-id', 'api-key', 'app-id');

client.on('ussdSession', ({ notification, customer }, callback) => {
    //... do something
    const {
        sessionId,
        appData
    } = notification;

    callback(menu, appData);
});

client.connect();
```