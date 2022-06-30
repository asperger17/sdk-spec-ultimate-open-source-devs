# Elarian SDK Spec

> Elarian is a customer engagement runtime that lets you code against customer data allowing you to track, schedule, execute and analyze engagement actions from a customer's point-of-view. For more info on Elarian, see [https://developers.elarian.com](https://developers.elarian.com)


Elarian exposes its functionalities via [RSocket](http://rsocket.io/) and ~~fully~~ embraces reactive streams concepts. Therefore it depends on drivers that implement the [RSocket Protocol](https://github.com/rsocket/rsocket/blob/master/Protocol.md). The driver should, at minimum, implement the following core RSocket features:

- Interaction models
    - request/response
    - ~~requestStream~~
- Fragmentation/Reassembly
- Request-N, Keep-Alive and Error frames
- Resuming Operation

## Core Service

Real-time interactions with the Elarian API server happen in one of two ways:

- An application sends a **command** to the server. i.e. request/response from the application
- An application receives **notifications** from the server i.e. request/response from the Elarian API server

The application opens a socket connection to the API server and all interactions will happen through this socket. Therefore, this socket needs to be kept open for the entire execution time of the application (i.e. since that could be 1 second or 1 year, the connection needs to be re-established automatically in case of connectivity issues).

An application can open one of two types of sockets:

- **App**: Socket used for normal (default) app commands. e.g. set a reminder on a customer, etc.
- **Simulator**: Socket used to simulate a customer's interactions with their mobile device. e.g. send an SMS, dial a USSD, etc.

The binary data sent back and forth through the socket is defined by the generated protobuf messages. See [generated/](generated/) for the language-specific classes/structs.

>
> **TLS Transport**
>
> - Host: **tcp.elarian.dev**
> - Port: **443**
>
>
> **WebSocket Transport**
>
> - Host: **web.elarian.dev**
> - Port: **443**


### Authentication

When establishing the socket connection, the RSocket setup frame must contain a data payload with the following:

- An API key
- An application id
- An organization id

This is sent as a ***AppConnectionMetadata*** payload. After connection is established, application data can now flow through the socket without needed to send these credentials.

For testing purposes, use the following values:

*Authentication*
- ORG ID: `el_org_eu_1SJ2jx`
- APP ID: `el_app_WZFQdt`
- API KEY: `el_k_test_80922f5e467e9d5e8067795c263ba0e43c6ef6de7ffa1923aaa189d2772042be`

*Engagement Channels*
- PURSE ID: `el_prs_rL3IPZ`
- PAYMENT CHANNEL NUMBER: `83044`
- SMS SHORT CODE: `83044`
- SMS SENDER ID: `TEST_SENDER_ID`
- USSD SHORT CODE: `*83044#`
- VOICE CHANNEL NUMBER: `+254711621711`
- WHATSAPP CHANNEL NUMBER: `+254711621711`
- TELEGRAM CHANNEL NUMBER: `+254711621711`
- FACEBOOK MESSENGER CHANNEL NUMBER: `+254711621711`


### Commands (App-To-Server)

The following commands can be sent as part of the ***AppToServerCommand*** payload:

- *GenerateAuthToken*

- *CreateCustomer*
- *DeleteCustomer*
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

Response to these commands comes in the form of the ***AppToServerCommandReply*** payload.

The following are sent from simulator connections only(***SimulatorToServerCommand***):

- *ReceiveMessage*

- *ReceivePayment*
- *UpdatePaymentStatus*

With response coming as ***SimulatorToServerCommandReply***

### Notifications (Server-To-App)

The following notifications will be received as part of the ***ServerToAppNotification*** payload:

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
- *CustomerActivity*

With responses going back as ***ServerToAppNotificationReply***

The following are sent to simulator connections only(***ServerToSimulatorNotification***):

- *SendMessage*
- *MakeVoiceCall*

- *SendCustomerPayment*
- *SendChannelPayment*
- *CheckoutPayment*

With responses being sent back as ***ServerToSimulatorNotificationReply***

## Programing Paradigm

A development model structured around asynchronous data streams is expected (i.e. reactive programming) for the SDK. Elarian applications are expected to be built around customer data. As such, developers will be observing and reacting to events([notifications](#Notifications)) being streamed from the Elarian API server in real-time, while at the same time, emitting events([commands](#Commands)) to the API server.

For example, a lending institution, say a bank, could build an app that automates debt collection. The app could set reminders on each of the its customers. When a payment is due, Elarian will notify the app and the company could decide to engage the customer via SMS. Say the SMS to the customer tells them to reply with OK to initiate payment via mobile wallet. If they do, the app sends a command to initiate mobile checkout from the customer's mobile wallet. If they don't, the app could engage the customer with a phone call. The voice prompt could ask them to press 1 to initiate the payment, etc.

The SDK needs to provide a programming model to the app developer that allows them to efficiently build such an app and have it work effectively for 10 or 10 million customers. Reactive programming (**in whatever form makes sense for the language**) gives the dev the tools they need to build highly scalable and efficient applications.

## Classes

The SDK should have the following classes with methods that correspond to the above commands:

### **Elarian**

- `connect()`

- `disconnect()`

- `on(event: String, handler: NotificationHandler)`

  - ~~`registerNotificationHandler(event: String, handler: NotificationHandler)`~~

- `generateAuthToken(): Future<AuthToken>`

- `deleteCustomerByCustomerNumber(customer: CustomerNumber): Future<DeleteCustomerReply>`

- `deleteCustomerByCustomerID(customerID: String): Future<DeleteCustomerReply>`

- `addCustomerReminderByTag(tag: Tag, reminder: Reminder): Future<TagUpdateReply>`

- `cancelCustomerReminderByTag(tag: Tag, key: String): Future<TagUpdateReply>`

- `sendMessageByTag(tag: Tag, channel: MessagingChannel, message: Message): Future<TagUpdateReply>`

- `initiatePayment(debitParty: PaymentCounterParty, creditParty: PaymentCounterParty, value: Cash): Future<InitiatePaymentReply>`

- `replayMessagingConsentUpdate(customer: CustomerNumber, channel: MessagingChannel, consent: ConsentAction, updatedAt: Long): Future<CustomerStateUpdateReply>`

- `replayReceivedMessage(customer: CustomerNumber, channel: MessagingChannel, message: ReceivedMessage): Future<CustomerStateUpdateReply>`

- `replaySentMessage(customer: CustomerNumber, channel: MessagingChannel, message: SentMessage): Future<CustomerStateUpdateReply>`

- `replayMessageStatusUpdate(customer: CustomerNumber, channel: MessagingChannel, update: MessageStatusUpdate): Future<CustomerStateUpdateReply>`

- `replayMessageReactionUpdate(customer: CustomerNumber, channel: MessagingChannel,  messageId: string, reaction: MessageReaction, updatedAt: Long): Future<CustomerStateUpdateReply>`

- `replayMessagingSession(customer: CustomerNumber, channel: MessagingChannel, update: MessageSessionUpdate): Future<CustomerStateUpdateReply>`

- `replayPayment(transactionId: String, debitParty: PaymentCounterParty, creditParty: PaymentCounterParty, status: PaymentStatus, value: Cash,narration: String, updatedAt: long): Future<ReplayPaymentReply>`

- `replayPaymentStatusUpdate(customer: CustomerNumber, transactionId: String, status: PaymentStatus, updatedAt: Long): Future<ReplayPaymentReply>`


For example, a node application **could** connect like this:

```js
const app = new Elarian({
    appId: 'some-app-id',
    orgId: 'some-org-id',
    apiKey: 'some-api-key'
});
app
    .on('error', handleError)
    .on('connected', hanndleConnected)
    .connect();
```

### **Customer**

- `getState(): Future<CustomerState>`

- `adoptState(customer: Customer): Future<CustomerStateUpdateReply>`

- `sendMessage(channel: MessagingChannel, message: Message): Future<MessageReply>`

- `replyToMessage(messageId: String, message: Message): Future<MessageReply> `

- `updateActivity(source: String, activity: Activity): Future<CustomerStateUpdateReply>`

- `updateMessagingConsent(channel: MessagingChannel, action: ConsentAction): Future<ConsentUpdateReply>`

- `leaseAppData(): Future<Map<String, Any>>`

- `updateAppData(data: Map<String, Any>): Future<CustomerStateUpdateReply>`

- `deleteAppData(): Future<CustomerStateUpdateReply> `

- `getMetadata(): Future<Map<String, Any>>`

- `updateMetadata(data: Map<String, Any>): Future<CustomerStateUpdateReply>`

- `deleteMetadata(keys: String[]): Future<CustomerStateUpdateReply>`

- `updateSeconndaryIds(ids: SecondaryId[]): Future<CustomerStateUpdateReply>`

- `deleteSecondaryIds(ids: SecondaryId[]): Future<CustomerStateUpdateReply> `

- `getTags(): Future<Tag[]>`

- `updateTags(tags: Tag[]): Future<CustomerStateUpdateReply>`

- `deleteTags(keys: String[]): Future<CustomerStateUpdateReply>`

- `addReminder(reminder: Reminder): Future<CustomerStateUpdateReply>`

- `cancelReminder(key: String): Future<CustomerStateUpdateReply>`

For example, a Java application **could** send a message like this:

```java
//... assumes use of project-reactor
Elarian client = new Elarian('some-app-id', 'some-org-id', 'some-api-key');
Customer customer = new Customer(client, '+2547xxx89883');

client.connect();

// Using the customer
customer.sendMessage(channel, message)
  	.subscribe()
      .onNext()
      .onError()
      .onComplete();
```

### **Simulator**

- `connect()`

- `disconnect()`

- `on(event: String, handler: NotificationHandler)`

- `receiveMessage(phoneNumber: String, channel: MessagingChannel, sessionId: String, parts: InboundMessageBody[]): Future<SimulatorReply>`

- `receivePayment(phoneNumber: String, channel: PaymentChannel, transactionId: String, value: Cash, status: PaymentStatus): Future<SimulatorReply>`

- `updatePaymentStatus(transactionId: String, status: PaymentStatus): Future<SimulatorReply>`


### Models

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

- **ReplayPaymentReply**

```js
{
  status: Boolean,
  description: String,
  transactionId: String,
  debitCustomerId: String,
  creditCustomerId: String,
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
  key: String,
  value: String,
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
  // Can only be one of these
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


// Say
{
    text: String,
    playBeep: Boolean,
    voice: { // TextToSpeechVoice
        MALE,
        FEMALE
    }
}

// Play
{
    url: String
}

// GetDigits
{
    timeout: Number,
    finishOnKey: String,
    numDigits: Number,
    // either
    say: Say,
    // or
    play: Play
}

// Dial
{
    customerNumbers: CustomerNumber[],
    record: Boolean,
    sequential: Boolean,
    ringbackTone: String,
    callerId: String,
    maxDuration: Number
}

// RecordSession
{
 // empty for now
}

// GetRecording
{
    playBeep: Boolean,
    trimSilence: Boolean,
    timeout: Number,
    maxLength: Number,
    finishOnKey: String,
    // either
    say: Say,
    // or
    play: Play
}

// Enqueue
{
    queueName: String,
    holdMusic: String
}

// Dequeue
{
    queueName: String,
    record: Boolean,
    channelNumber: MessagingChannel
}

// Reject
{
 // empty for now
}

// Redirect
{
    url: String
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
  voice: VoiceCallInput,
  ussd: UssdInput
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
    INSUFFICIENT_CREDITS
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

- **InitiatePaymentReply**

```js
{
  status: PaymentStatus,
  description: String,
  transactionId: String,
  debitCustomerId: String,
  creditCustomerId: String,
}
```


- **PaymentChannelNumber**

```js
{
  number: String,
  channel: { // PaymentChannel.Channel
    CELLULAR,
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

- **VoiceCallInput**

```js
{
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


- **ReceivedMessage**

```js
{
    messageId: String,
    sessionId: String,
    receivedAt: Long,
    parts: [InboundMessageBody],
    inReplyTo: String,
    cost: Cash
    provider: { // One of
        AT,
        TWILIO,
        MAILGUN,
        FACEBOOK,
        TELEGRAM
    },
}
```

- **SentMessage**

```js
{
    messageId: String,
    sessionId: String,
    sentAt: Long,
    message: Message,
    inReplyTo: String,
    status: MessageDeliveryStatus,
    cost: Cash,
    provider: { // One of
        AT,
        TWILIO,
        MAILGUN,
        FACEBOOK,
        TELEGRAM
    }
}
```

- **MessageStatusUpdate**

```js
{
    messageId: String,
    updatedAt: Long,
    status: MessageDeliveryStatus,
    cost: Cash
}
```

- **MessageSessionUpdate**

```js
{
    sessionId: String,
    startedAt: Long,
    duration: Long,
    reason: MessagingSessionEndReason,
    cost: Cash
}
```

- **Future**: Any construct that sends the command and receives the response asynchronously. e.g. *promises* in JavaScript, *Flux/Mono* in Java with reactor, etc.
- **NotificationHandler**: A function used to handle incoming notifications. It has the following signature:

```
function handler(notification: Notification, customer: Customer, appData: Map<String,Any>?, callback: NotificationCallback): void
```

- **NotificationCallback**: A function that responds to a notification. It has the following signature:

```
function callback(message: Message?, appData: Map<String, Any>?): void
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

{ // ReminderNotification extends Notification
  reminder: Reminder,
  tag: Tag,
  workId: String
}
  
{ // MessagingSessionInitializedNotification extends Notification
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  sessionId: String,
  expiresAt: Long,
}
  
{ // MessagingSessionEndedNotification extends Notification
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
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
  channelNumber: MessagingChannel,
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
  channelNumber: MessagingChannel,
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
  channelNumber: PaymentChannel,
  value: Cash,
  status: PaymentStatus,
}
 

{ // CustomerActivityNotification extends Notification
  customerNumber: CustomerNumber,
  source: String,
  sessionId: String,
  activity: Activity,
}


{ // ReceivedSmsNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  text: String,
}

{ // ReceivedMediaNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  text: String,
  media: Media,
  location: Location,
  email: Email,
  sessionId: String,
  inReplyTo: String,
}

{ // UssdSessionNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  input: UssdInput,
  status: String, // one of active, incomplete, completed, app_error
  sessionId: String,
}

{ // UssdInput
    text: string,
    status: {
        ACTIVE,
        INCOMPLETE,
        COMPLETED,
        APP_ERROR
    }
}


{ // VoiceCallNotification extends Notification
  messageId: String,
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  sessionId: String,
  voice: VoiceCallInput
}
  
{ // SendMessageSimulatorNotification extends Notification
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
  message: Message
}
  
{ // MakeVoiceCallSimulatorNotification extends Notification
  sessionId: String,
  customerNumber: CustomerNumber,
  channelNumber: MessagingChannel,
}
  
{ // SendCustomerPaymentSimulatorNotification extends Notification
  customerNumber: CustomerNumber,
  channelNumber: PaymentChannel,
  transactionId: String,
  [wallet: Object,]*
  [purse: Object,]*
  value: Cash
}
  
{ // SendChannelPaymentSimulatorNotification extends Notification
  channelNumber: PaymentChannel,
  transactionId: String,
  [wallet: Object,]*
  [purse: Object,]*
  value: Cash,
  account: String
}

{ // CheckoutPaymentSimulatorNotification extends Notification
  channelNumber: PaymentChannel,
  customerNumber: CustomerNumber,
  transactionId: String,
  [wallet: Object,]*
  [purse: Object,]*
  value: Cash,
}
```

## Events

The SDK should allow developers to listen for and respond asynchronously to the following events (which correspond to the above notifications):

### Connection

- `error`

- `closed`

- `pending`

- `connecting`

- `connected`


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

- `customerActivity`

### Simulator

- `sendMessage`

- `makeVoiceCall`

- `sendCustomerPayment`

- `sendChannelPayment`

- `checkoutPayment`

For example, a JavaScript application **could** listen for SMS ussd like this:

```js
const client = new Elarian('org-id', 'api-key', 'app-id');

client.on('ussdSession', (notification, customer, appData, callback) => {
    //... do something
    const {
        sessionId,
        input,
    } = notification;

    const metadata = await customer.getMetadata();
    const { name } = metadata;

    const menu = {
        text: `Hi ${name}!`,
        isTerminal: true
    };

    callback(menu, appData);
});

client.connect();
```
