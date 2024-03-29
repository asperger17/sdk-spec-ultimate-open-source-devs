// source: messaging_model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var common_model_pb = require('./common_model_pb.js');
goog.object.extend(proto, common_model_pb);
goog.exportSymbol('proto.com.elarian.hera.proto.DequeueCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.DialCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.EmailMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.EnqueueCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetDigitsCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetRecordingCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.InboundMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.InboundMessageBody.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.LocationMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MediaMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageDeliveryStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessageReaction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingChannel', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingChannelNumber', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentUpdate', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingConsentUpdateStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.MessagingSessionEndReason', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.OutboundMessage', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.OutboundMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.OutboundMessageBody.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.OutboundMessageReplyPrompt', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PlayCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PromptMessageMenuItemBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PromptMessageMenuItemBody.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.PromptMessageReplyAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RecordSessionCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RedirectCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.RejectCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.SayCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TemplateMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.TextToSpeechVoice', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdInputMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdMenuMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.UssdSessionStatus', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallAction', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallAction.EntryCase', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallDialInput', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallHangupCause', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallInputMessageBody', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallQueueInput', null, global);
goog.exportSymbol('proto.com.elarian.hera.proto.VoiceCallStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MessagingChannelNumber = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MessagingChannelNumber, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MessagingChannelNumber.displayName = 'proto.com.elarian.hera.proto.MessagingChannelNumber';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.MediaMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.MediaMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.MediaMessageBody.displayName = 'proto.com.elarian.hera.proto.MediaMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.LocationMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.LocationMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.LocationMessageBody.displayName = 'proto.com.elarian.hera.proto.LocationMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.EmailMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.EmailMessageBody.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.EmailMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.EmailMessageBody.displayName = 'proto.com.elarian.hera.proto.EmailMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.TemplateMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.TemplateMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.TemplateMessageBody.displayName = 'proto.com.elarian.hera.proto.TemplateMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.SayCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.SayCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.SayCallAction.displayName = 'proto.com.elarian.hera.proto.SayCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.PlayCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.PlayCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PlayCallAction.displayName = 'proto.com.elarian.hera.proto.PlayCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GetDigitsCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetDigitsCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetDigitsCallAction.displayName = 'proto.com.elarian.hera.proto.GetDigitsCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.GetRecordingCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.GetRecordingCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.GetRecordingCallAction.displayName = 'proto.com.elarian.hera.proto.GetRecordingCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.RecordSessionCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RecordSessionCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RecordSessionCallAction.displayName = 'proto.com.elarian.hera.proto.RecordSessionCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DialCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.DialCallAction.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.DialCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DialCallAction.displayName = 'proto.com.elarian.hera.proto.DialCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.EnqueueCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.EnqueueCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.EnqueueCallAction.displayName = 'proto.com.elarian.hera.proto.EnqueueCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.DequeueCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.DequeueCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.DequeueCallAction.displayName = 'proto.com.elarian.hera.proto.DequeueCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.RejectCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RejectCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RejectCallAction.displayName = 'proto.com.elarian.hera.proto.RejectCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.RedirectCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.RedirectCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.RedirectCallAction.displayName = 'proto.com.elarian.hera.proto.RedirectCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.VoiceCallAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallAction.displayName = 'proto.com.elarian.hera.proto.VoiceCallAction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.displayName = 'proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.VoiceCallDialInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallDialInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallDialInput.displayName = 'proto.com.elarian.hera.proto.VoiceCallDialInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallQueueInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallQueueInput.displayName = 'proto.com.elarian.hera.proto.VoiceCallQueueInput';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.VoiceCallInputMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.VoiceCallInputMessageBody.displayName = 'proto.com.elarian.hera.proto.VoiceCallInputMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UssdInputMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdInputMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdInputMessageBody.displayName = 'proto.com.elarian.hera.proto.UssdInputMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.elarian.hera.proto.UssdMenuMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.UssdMenuMessageBody.displayName = 'proto.com.elarian.hera.proto.UssdMenuMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.OutboundMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.OutboundMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.OutboundMessageBody.displayName = 'proto.com.elarian.hera.proto.OutboundMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.PromptMessageMenuItemBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.PromptMessageMenuItemBody.displayName = 'proto.com.elarian.hera.proto.PromptMessageMenuItemBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.InboundMessageBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_);
};
goog.inherits(proto.com.elarian.hera.proto.InboundMessageBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.InboundMessageBody.displayName = 'proto.com.elarian.hera.proto.InboundMessageBody';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.OutboundMessageReplyPrompt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.displayName = 'proto.com.elarian.hera.proto.OutboundMessageReplyPrompt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.elarian.hera.proto.OutboundMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.com.elarian.hera.proto.OutboundMessage.repeatedFields_, null);
};
goog.inherits(proto.com.elarian.hera.proto.OutboundMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.com.elarian.hera.proto.OutboundMessage.displayName = 'proto.com.elarian.hera.proto.OutboundMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MessagingChannelNumber.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, 0),
    number: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MessagingChannelNumber;
  return proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.MessagingChannel} */ (reader.readEnum());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MessagingChannelNumber} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional MessagingChannel channel = 1;
 * @return {!proto.com.elarian.hera.proto.MessagingChannel}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.getChannel = function() {
  return /** @type {!proto.com.elarian.hera.proto.MessagingChannel} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MessagingChannel} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.setChannel = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MessagingChannelNumber} returns this
 */
proto.com.elarian.hera.proto.MessagingChannelNumber.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.MediaMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MediaMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    media: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.MediaMessageBody;
  return proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.MediaType} */ (reader.readEnum());
      msg.setMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.MediaMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedia();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody} returns this
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MediaType media = 2;
 * @return {!proto.com.elarian.hera.proto.MediaType}
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.getMedia = function() {
  return /** @type {!proto.com.elarian.hera.proto.MediaType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.MediaType} value
 * @return {!proto.com.elarian.hera.proto.MediaMessageBody} returns this
 */
proto.com.elarian.hera.proto.MediaMessageBody.prototype.setMedia = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.LocationMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LocationMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    label: (f = msg.getLabel()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    address: (f = msg.getAddress()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.LocationMessageBody;
  return proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setLabel(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.LocationMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLabel();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getAddress();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional double latitude = 1;
 * @return {number}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double longitude = 2;
 * @return {number}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue label = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getLabel = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
*/
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setLabel = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.clearLabel = function() {
  return this.setLabel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue address = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.getAddress = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
*/
proto.com.elarian.hera.proto.LocationMessageBody.prototype.setAddress = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.LocationMessageBody} returns this
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.clearAddress = function() {
  return this.setAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.LocationMessageBody.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.EmailMessageBody.repeatedFields_ = [4,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.EmailMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.EmailMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EmailMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: jspb.Message.getFieldWithDefault(msg, 1, ""),
    bodyPlain: jspb.Message.getFieldWithDefault(msg, 2, ""),
    bodyHtml: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ccListList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    bccListList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody}
 */
proto.com.elarian.hera.proto.EmailMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.EmailMessageBody;
  return proto.com.elarian.hera.proto.EmailMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.EmailMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody}
 */
proto.com.elarian.hera.proto.EmailMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBodyPlain(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBodyHtml(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addCcList(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addBccList(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.EmailMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.EmailMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EmailMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBodyPlain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBodyHtml();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCcListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getBccListList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string subject = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string body_plain = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.getBodyPlain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.setBodyPlain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string body_html = 3;
 * @return {string}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.getBodyHtml = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.setBodyHtml = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string cc_list = 4;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.getCcListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.setCcListList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.addCcList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.clearCcListList = function() {
  return this.setCcListList([]);
};


/**
 * repeated string bcc_list = 5;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.getBccListList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.setBccListList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.addBccList = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.EmailMessageBody} returns this
 */
proto.com.elarian.hera.proto.EmailMessageBody.prototype.clearBccListList = function() {
  return this.setBccListList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.TemplateMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.TemplateMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TemplateMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    paramsMap: (f = msg.getParamsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.TemplateMessageBody}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.TemplateMessageBody;
  return proto.com.elarian.hera.proto.TemplateMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.TemplateMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.TemplateMessageBody}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = msg.getParamsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.TemplateMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.TemplateMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.TemplateMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParamsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.TemplateMessageBody} returns this
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, string> params = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.getParamsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.com.elarian.hera.proto.TemplateMessageBody} returns this
 */
proto.com.elarian.hera.proto.TemplateMessageBody.prototype.clearParamsMap = function() {
  this.getParamsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.SayCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.SayCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SayCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    voice: jspb.Message.getFieldWithDefault(msg, 2, 0),
    playBeep: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.SayCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.SayCallAction;
  return proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.SayCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.TextToSpeechVoice} */ (reader.readEnum());
      msg.setVoice(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayBeep(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.SayCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVoice();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getPlayBeep();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional TextToSpeechVoice voice = 2;
 * @return {!proto.com.elarian.hera.proto.TextToSpeechVoice}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getVoice = function() {
  return /** @type {!proto.com.elarian.hera.proto.TextToSpeechVoice} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.TextToSpeechVoice} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setVoice = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional bool play_beep = 3;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.getPlayBeep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.SayCallAction} returns this
 */
proto.com.elarian.hera.proto.SayCallAction.prototype.setPlayBeep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PlayCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PlayCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.PlayCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PlayCallAction;
  return proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PlayCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PlayCallAction} returns this
 */
proto.com.elarian.hera.proto.PlayCallAction.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase = {
  PROMPT_NOT_SET: 0,
  SAY: 1,
  PLAY: 2
};

/**
 * @return {proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getPromptCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetDigitsCallAction.PromptCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetDigitsCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    finishOnKey: (f = msg.getFinishOnKey()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    numDigits: (f = msg.getNumDigits()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetDigitsCallAction;
  return proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFinishOnKey(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setNumDigits(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetDigitsCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFinishOnKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getNumDigits();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.GetDigitsCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue finish_on_key = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getFinishOnKey = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setFinishOnKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearFinishOnKey = function() {
  return this.setFinishOnKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasFinishOnKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Int32Value num_digits = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.getNumDigits = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
*/
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.setNumDigits = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetDigitsCallAction} returns this
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.clearNumDigits = function() {
  return this.setNumDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetDigitsCallAction.prototype.hasNumDigits = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase = {
  PROMPT_NOT_SET: 0,
  SAY: 1,
  PLAY: 2
};

/**
 * @return {proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPromptCase = function() {
  return /** @type {proto.com.elarian.hera.proto.GetRecordingCallAction.PromptCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.GetRecordingCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    maxLength: (f = msg.getMaxLength()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    finishOnKey: (f = msg.getFinishOnKey()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    playBeep: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    trimSilence: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.GetRecordingCallAction;
  return proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    case 4:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setMaxLength(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setFinishOnKey(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPlayBeep(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrimSilence(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.GetRecordingCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getMaxLength();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getFinishOnKey();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getPlayBeep();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getTrimSilence();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.GetRecordingCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setTimeout = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearTimeout = function() {
  return this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Duration max_length = 4;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getMaxLength = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 4));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setMaxLength = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearMaxLength = function() {
  return this.setMaxLength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasMaxLength = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue finish_on_key = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getFinishOnKey = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
*/
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setFinishOnKey = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.clearFinishOnKey = function() {
  return this.setFinishOnKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.hasFinishOnKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool play_beep = 6;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getPlayBeep = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setPlayBeep = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool trim_silence = 7;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.getTrimSilence = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.GetRecordingCallAction} returns this
 */
proto.com.elarian.hera.proto.GetRecordingCallAction.prototype.setTrimSilence = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RecordSessionCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RecordSessionCallAction;
  return proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RecordSessionCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.DialCallAction.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DialCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DialCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DialCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    customerNumbersList: jspb.Message.toObjectList(msg.getCustomerNumbersList(),
    common_model_pb.CustomerNumber.toObject, includeInstance),
    record: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sequential: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    ringbackTone: (f = msg.getRingbackTone()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    callerId: (f = msg.getCallerId()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    maxDuration: (f = msg.getMaxDuration()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.DialCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DialCallAction;
  return proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DialCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_model_pb.CustomerNumber;
      reader.readMessage(value,common_model_pb.CustomerNumber.deserializeBinaryFromReader);
      msg.addCustomerNumbers(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecord(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSequential(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRingbackTone(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCallerId(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setMaxDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DialCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCustomerNumbersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      common_model_pb.CustomerNumber.serializeBinaryToWriter
    );
  }
  f = message.getRecord();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSequential();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRingbackTone();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getCallerId();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getMaxDuration();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CustomerNumber customer_numbers = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.CustomerNumber>}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getCustomerNumbersList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.CustomerNumber>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_model_pb.CustomerNumber, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.CustomerNumber>} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setCustomerNumbersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerNumber=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.CustomerNumber}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.addCustomerNumbers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.CustomerNumber, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearCustomerNumbersList = function() {
  return this.setCustomerNumbersList([]);
};


/**
 * optional bool record = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getRecord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.setRecord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool sequential = 3;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getSequential = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.setSequential = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.StringValue ringback_tone = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getRingbackTone = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setRingbackTone = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearRingbackTone = function() {
  return this.setRingbackTone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasRingbackTone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue caller_id = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getCallerId = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setCallerId = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearCallerId = function() {
  return this.setCallerId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasCallerId = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int32Value max_duration = 6;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.getMaxDuration = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
*/
proto.com.elarian.hera.proto.DialCallAction.prototype.setMaxDuration = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DialCallAction} returns this
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.clearMaxDuration = function() {
  return this.setMaxDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DialCallAction.prototype.hasMaxDuration = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.EnqueueCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EnqueueCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    holdMusic: (f = msg.getHoldMusic()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    queueName: (f = msg.getQueueName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.EnqueueCallAction;
  return proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setHoldMusic(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setQueueName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.EnqueueCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHoldMusic();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getQueueName();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.StringValue hold_music = 1;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.getHoldMusic = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 1));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
*/
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.setHoldMusic = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.clearHoldMusic = function() {
  return this.setHoldMusic(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.hasHoldMusic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.StringValue queue_name = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.getQueueName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
*/
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.setQueueName = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.EnqueueCallAction} returns this
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.clearQueueName = function() {
  return this.setQueueName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.EnqueueCallAction.prototype.hasQueueName = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.DequeueCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DequeueCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    channelNumber: (f = msg.getChannelNumber()) && proto.com.elarian.hera.proto.MessagingChannelNumber.toObject(includeInstance, f),
    record: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    queueName: (f = msg.getQueueName()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.DequeueCallAction;
  return proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.MessagingChannelNumber;
      reader.readMessage(value,proto.com.elarian.hera.proto.MessagingChannelNumber.deserializeBinaryFromReader);
      msg.setChannelNumber(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecord(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setQueueName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.DequeueCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannelNumber();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.MessagingChannelNumber.serializeBinaryToWriter
    );
  }
  f = message.getRecord();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getQueueName();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessagingChannelNumber channel_number = 1;
 * @return {?proto.com.elarian.hera.proto.MessagingChannelNumber}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getChannelNumber = function() {
  return /** @type{?proto.com.elarian.hera.proto.MessagingChannelNumber} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MessagingChannelNumber, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.MessagingChannelNumber|undefined} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
*/
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setChannelNumber = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.clearChannelNumber = function() {
  return this.setChannelNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.hasChannelNumber = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool record = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getRecord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setRecord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional google.protobuf.StringValue queue_name = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.getQueueName = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
*/
proto.com.elarian.hera.proto.DequeueCallAction.prototype.setQueueName = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.DequeueCallAction} returns this
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.clearQueueName = function() {
  return this.setQueueName(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.DequeueCallAction.prototype.hasQueueName = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.RejectCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RejectCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RejectCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.RejectCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RejectCallAction;
  return proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.RejectCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RejectCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.RedirectCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RedirectCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.RedirectCallAction;
  return proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.RedirectCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.RedirectCallAction} returns this
 */
proto.com.elarian.hera.proto.RedirectCallAction.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallAction.EntryCase = {
  ENTRY_NOT_SET: 0,
  SAY: 1,
  PLAY: 2,
  GET_DIGITS: 3,
  DIAL: 4,
  RECORD_SESSION: 5,
  GET_RECORDING: 6,
  ENQUEUE: 7,
  DEQUEUE: 8,
  REJECT: 9,
  REDIRECT: 10
};

/**
 * @return {proto.com.elarian.hera.proto.VoiceCallAction.EntryCase}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.VoiceCallAction.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    say: (f = msg.getSay()) && proto.com.elarian.hera.proto.SayCallAction.toObject(includeInstance, f),
    play: (f = msg.getPlay()) && proto.com.elarian.hera.proto.PlayCallAction.toObject(includeInstance, f),
    getDigits: (f = msg.getGetDigits()) && proto.com.elarian.hera.proto.GetDigitsCallAction.toObject(includeInstance, f),
    dial: (f = msg.getDial()) && proto.com.elarian.hera.proto.DialCallAction.toObject(includeInstance, f),
    recordSession: (f = msg.getRecordSession()) && proto.com.elarian.hera.proto.RecordSessionCallAction.toObject(includeInstance, f),
    getRecording: (f = msg.getGetRecording()) && proto.com.elarian.hera.proto.GetRecordingCallAction.toObject(includeInstance, f),
    enqueue: (f = msg.getEnqueue()) && proto.com.elarian.hera.proto.EnqueueCallAction.toObject(includeInstance, f),
    dequeue: (f = msg.getDequeue()) && proto.com.elarian.hera.proto.DequeueCallAction.toObject(includeInstance, f),
    reject: (f = msg.getReject()) && proto.com.elarian.hera.proto.RejectCallAction.toObject(includeInstance, f),
    redirect: (f = msg.getRedirect()) && proto.com.elarian.hera.proto.RedirectCallAction.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallAction;
  return proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.SayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.SayCallAction.deserializeBinaryFromReader);
      msg.setSay(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PlayCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.PlayCallAction.deserializeBinaryFromReader);
      msg.setPlay(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.GetDigitsCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetDigitsCallAction.deserializeBinaryFromReader);
      msg.setGetDigits(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.DialCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.DialCallAction.deserializeBinaryFromReader);
      msg.setDial(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.RecordSessionCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RecordSessionCallAction.deserializeBinaryFromReader);
      msg.setRecordSession(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.GetRecordingCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.GetRecordingCallAction.deserializeBinaryFromReader);
      msg.setGetRecording(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.EnqueueCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.EnqueueCallAction.deserializeBinaryFromReader);
      msg.setEnqueue(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.DequeueCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.DequeueCallAction.deserializeBinaryFromReader);
      msg.setDequeue(value);
      break;
    case 9:
      var value = new proto.com.elarian.hera.proto.RejectCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RejectCallAction.deserializeBinaryFromReader);
      msg.setReject(value);
      break;
    case 10:
      var value = new proto.com.elarian.hera.proto.RedirectCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.RedirectCallAction.deserializeBinaryFromReader);
      msg.setRedirect(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSay();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.SayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getPlay();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PlayCallAction.serializeBinaryToWriter
    );
  }
  f = message.getGetDigits();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.GetDigitsCallAction.serializeBinaryToWriter
    );
  }
  f = message.getDial();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.DialCallAction.serializeBinaryToWriter
    );
  }
  f = message.getRecordSession();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.RecordSessionCallAction.serializeBinaryToWriter
    );
  }
  f = message.getGetRecording();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.GetRecordingCallAction.serializeBinaryToWriter
    );
  }
  f = message.getEnqueue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.EnqueueCallAction.serializeBinaryToWriter
    );
  }
  f = message.getDequeue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.DequeueCallAction.serializeBinaryToWriter
    );
  }
  f = message.getReject();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.com.elarian.hera.proto.RejectCallAction.serializeBinaryToWriter
    );
  }
  f = message.getRedirect();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.com.elarian.hera.proto.RedirectCallAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional SayCallAction say = 1;
 * @return {?proto.com.elarian.hera.proto.SayCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getSay = function() {
  return /** @type{?proto.com.elarian.hera.proto.SayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.SayCallAction, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.SayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setSay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearSay = function() {
  return this.setSay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasSay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PlayCallAction play = 2;
 * @return {?proto.com.elarian.hera.proto.PlayCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getPlay = function() {
  return /** @type{?proto.com.elarian.hera.proto.PlayCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.PlayCallAction, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.PlayCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setPlay = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearPlay = function() {
  return this.setPlay(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasPlay = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GetDigitsCallAction get_digits = 3;
 * @return {?proto.com.elarian.hera.proto.GetDigitsCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getGetDigits = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetDigitsCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetDigitsCallAction, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetDigitsCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setGetDigits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearGetDigits = function() {
  return this.setGetDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasGetDigits = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DialCallAction dial = 4;
 * @return {?proto.com.elarian.hera.proto.DialCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getDial = function() {
  return /** @type{?proto.com.elarian.hera.proto.DialCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DialCallAction, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.DialCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setDial = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearDial = function() {
  return this.setDial(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasDial = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional RecordSessionCallAction record_session = 5;
 * @return {?proto.com.elarian.hera.proto.RecordSessionCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getRecordSession = function() {
  return /** @type{?proto.com.elarian.hera.proto.RecordSessionCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RecordSessionCallAction, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.RecordSessionCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setRecordSession = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearRecordSession = function() {
  return this.setRecordSession(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasRecordSession = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional GetRecordingCallAction get_recording = 6;
 * @return {?proto.com.elarian.hera.proto.GetRecordingCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getGetRecording = function() {
  return /** @type{?proto.com.elarian.hera.proto.GetRecordingCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.GetRecordingCallAction, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.GetRecordingCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setGetRecording = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearGetRecording = function() {
  return this.setGetRecording(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasGetRecording = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EnqueueCallAction enqueue = 7;
 * @return {?proto.com.elarian.hera.proto.EnqueueCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getEnqueue = function() {
  return /** @type{?proto.com.elarian.hera.proto.EnqueueCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.EnqueueCallAction, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.EnqueueCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setEnqueue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearEnqueue = function() {
  return this.setEnqueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasEnqueue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional DequeueCallAction dequeue = 8;
 * @return {?proto.com.elarian.hera.proto.DequeueCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getDequeue = function() {
  return /** @type{?proto.com.elarian.hera.proto.DequeueCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.DequeueCallAction, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.DequeueCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setDequeue = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearDequeue = function() {
  return this.setDequeue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasDequeue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RejectCallAction reject = 9;
 * @return {?proto.com.elarian.hera.proto.RejectCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getReject = function() {
  return /** @type{?proto.com.elarian.hera.proto.RejectCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RejectCallAction, 9));
};


/**
 * @param {?proto.com.elarian.hera.proto.RejectCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setReject = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearReject = function() {
  return this.setReject(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasReject = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional RedirectCallAction redirect = 10;
 * @return {?proto.com.elarian.hera.proto.RedirectCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.getRedirect = function() {
  return /** @type{?proto.com.elarian.hera.proto.RedirectCallAction} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.RedirectCallAction, 10));
};


/**
 * @param {?proto.com.elarian.hera.proto.RedirectCallAction|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
*/
proto.com.elarian.hera.proto.VoiceCallAction.prototype.setRedirect = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.com.elarian.hera.proto.VoiceCallAction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction} returns this
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.clearRedirect = function() {
  return this.setRedirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallAction.prototype.hasRedirect = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    actionsList: jspb.Message.toObjectList(msg.getActionsList(),
    proto.com.elarian.hera.proto.VoiceCallAction.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody;
  return proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.VoiceCallAction;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallAction.deserializeBinaryFromReader);
      msg.addActions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.com.elarian.hera.proto.VoiceCallAction.serializeBinaryToWriter
    );
  }
};


/**
 * repeated VoiceCallAction actions = 1;
 * @return {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.getActionsList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.VoiceCallAction, 1));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.VoiceCallAction>} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.setActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.VoiceCallAction}
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.addActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.com.elarian.hera.proto.VoiceCallAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.prototype.clearActionsList = function() {
  return this.setActionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallDialInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    destinationNumber: jspb.Message.getFieldWithDefault(msg, 1, ""),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    duration: (f = msg.getDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallDialInput;
  return proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationNumber(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallDialInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDestinationNumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDuration();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string destination_number = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getDestinationNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setDestinationNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp started_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration duration = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.getDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.setDuration = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallDialInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.clearDuration = function() {
  return this.setDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallDialInput.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    enqueuedAt: (f = msg.getEnqueuedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dequeuedAt: (f = msg.getDequeuedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dequeuedToNumber: (f = msg.getDequeuedToNumber()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    dequeuedToSessionid: (f = msg.getDequeuedToSessionid()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    queueDuration: (f = msg.getQueueDuration()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallQueueInput;
  return proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEnqueuedAt(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDequeuedAt(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDequeuedToNumber(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDequeuedToSessionid(value);
      break;
    case 5:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setQueueDuration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallQueueInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnqueuedAt();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedToNumber();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDequeuedToSessionid();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getQueueDuration();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp enqueued_at = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getEnqueuedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setEnqueuedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearEnqueuedAt = function() {
  return this.setEnqueuedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasEnqueuedAt = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp dequeued_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedAt = function() {
  return this.setDequeuedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue dequeued_to_number = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedToNumber = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedToNumber = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedToNumber = function() {
  return this.setDequeuedToNumber(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedToNumber = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue dequeued_to_sessionId = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getDequeuedToSessionid = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setDequeuedToSessionid = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearDequeuedToSessionid = function() {
  return this.setDequeuedToSessionid(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasDequeuedToSessionid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Duration queue_duration = 5;
 * @return {?proto.google.protobuf.Duration}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.getQueueDuration = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 5));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
*/
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.setQueueDuration = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallQueueInput} returns this
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.clearQueueDuration = function() {
  return this.setQueueDuration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallQueueInput.prototype.hasQueueDuration = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.VoiceCallInputMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    direction: jspb.Message.getFieldWithDefault(msg, 1, 0),
    status: jspb.Message.getFieldWithDefault(msg, 2, 0),
    startedAt: (f = msg.getStartedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    hangupCause: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dtmfDigits: (f = msg.getDtmfDigits()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    recordingUrl: (f = msg.getRecordingUrl()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    dialData: (f = msg.getDialData()) && proto.com.elarian.hera.proto.VoiceCallDialInput.toObject(includeInstance, f),
    queueData: (f = msg.getQueueData()) && proto.com.elarian.hera.proto.VoiceCallQueueInput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.VoiceCallInputMessageBody;
  return proto.com.elarian.hera.proto.VoiceCallInputMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 2:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartedAt(value);
      break;
    case 4:
      var value = /** @type {!proto.com.elarian.hera.proto.VoiceCallHangupCause} */ (reader.readEnum());
      msg.setHangupCause(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDtmfDigits(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setRecordingUrl(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.VoiceCallDialInput;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallDialInput.deserializeBinaryFromReader);
      msg.setDialData(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.VoiceCallQueueInput;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallQueueInput.deserializeBinaryFromReader);
      msg.setQueueData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.VoiceCallInputMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getStartedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHangupCause();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDtmfDigits();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getRecordingUrl();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDialData();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.VoiceCallDialInput.serializeBinaryToWriter
    );
  }
  f = message.getQueueData();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.VoiceCallQueueInput.serializeBinaryToWriter
    );
  }
};


/**
 * optional CustomerEventDirection direction = 1;
 * @return {!proto.com.elarian.hera.proto.CustomerEventDirection}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getDirection = function() {
  return /** @type {!proto.com.elarian.hera.proto.CustomerEventDirection} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.CustomerEventDirection} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional VoiceCallStatus status = 2;
 * @return {!proto.com.elarian.hera.proto.VoiceCallStatus}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallStatus} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallStatus} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp started_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getStartedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setStartedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.clearStartedAt = function() {
  return this.setStartedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.hasStartedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VoiceCallHangupCause hangup_cause = 4;
 * @return {!proto.com.elarian.hera.proto.VoiceCallHangupCause}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getHangupCause = function() {
  return /** @type {!proto.com.elarian.hera.proto.VoiceCallHangupCause} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.VoiceCallHangupCause} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setHangupCause = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.StringValue dtmf_digits = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getDtmfDigits = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setDtmfDigits = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.clearDtmfDigits = function() {
  return this.setDtmfDigits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.hasDtmfDigits = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.StringValue recording_url = 6;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getRecordingUrl = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 6));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setRecordingUrl = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.clearRecordingUrl = function() {
  return this.setRecordingUrl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.hasRecordingUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional VoiceCallDialInput dial_data = 7;
 * @return {?proto.com.elarian.hera.proto.VoiceCallDialInput}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getDialData = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallDialInput} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallDialInput, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallDialInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setDialData = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.clearDialData = function() {
  return this.setDialData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.hasDialData = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional VoiceCallQueueInput queue_data = 8;
 * @return {?proto.com.elarian.hera.proto.VoiceCallQueueInput}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.getQueueData = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallQueueInput} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallQueueInput, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallQueueInput|undefined} value
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.setQueueData = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.VoiceCallInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.clearQueueData = function() {
  return this.setQueueData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.VoiceCallInputMessageBody.prototype.hasQueueData = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdInputMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdInputMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    text: (f = msg.getText()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UssdInputMessageBody}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdInputMessageBody;
  return proto.com.elarian.hera.proto.UssdInputMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdInputMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdInputMessageBody}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.UssdSessionStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdInputMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdInputMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional UssdSessionStatus status = 1;
 * @return {!proto.com.elarian.hera.proto.UssdSessionStatus}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.getStatus = function() {
  return /** @type {!proto.com.elarian.hera.proto.UssdSessionStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.UssdSessionStatus} value
 * @return {!proto.com.elarian.hera.proto.UssdInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue text = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.getText = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.UssdInputMessageBody} returns this
*/
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.UssdInputMessageBody} returns this
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdInputMessageBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.UssdMenuMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.UssdMenuMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isTerminal: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.UssdMenuMessageBody}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.UssdMenuMessageBody;
  return proto.com.elarian.hera.proto.UssdMenuMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.UssdMenuMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.UssdMenuMessageBody}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsTerminal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.UssdMenuMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.UssdMenuMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsTerminal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.UssdMenuMessageBody} returns this
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_terminal = 2;
 * @return {boolean}
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.getIsTerminal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.com.elarian.hera.proto.UssdMenuMessageBody} returns this
 */
proto.com.elarian.hera.proto.UssdMenuMessageBody.prototype.setIsTerminal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_ = [[1,2,3,4,5,6,7,8]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.EntryCase = {
  ENTRY_NOT_SET: 0,
  TEXT: 1,
  MEDIA: 2,
  LOCATION: 3,
  EMAIL: 4,
  TEMPLATE: 5,
  URL: 6,
  VOICE: 7,
  USSD: 8
};

/**
 * @return {proto.com.elarian.hera.proto.OutboundMessageBody.EntryCase}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.OutboundMessageBody.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.OutboundMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.OutboundMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    media: (f = msg.getMedia()) && proto.com.elarian.hera.proto.MediaMessageBody.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.com.elarian.hera.proto.LocationMessageBody.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.com.elarian.hera.proto.EmailMessageBody.toObject(includeInstance, f),
    template: (f = msg.getTemplate()) && proto.com.elarian.hera.proto.TemplateMessageBody.toObject(includeInstance, f),
    url: jspb.Message.getFieldWithDefault(msg, 6, ""),
    voice: (f = msg.getVoice()) && proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.toObject(includeInstance, f),
    ussd: (f = msg.getUssd()) && proto.com.elarian.hera.proto.UssdMenuMessageBody.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.OutboundMessageBody;
  return proto.com.elarian.hera.proto.OutboundMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.OutboundMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.MediaMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.LocationMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.EmailMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.EmailMessageBody.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.TemplateMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.TemplateMessageBody.deserializeBinaryFromReader);
      msg.setTemplate(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 7:
      var value = new proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.deserializeBinaryFromReader);
      msg.setVoice(value);
      break;
    case 8:
      var value = new proto.com.elarian.hera.proto.UssdMenuMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdMenuMessageBody.deserializeBinaryFromReader);
      msg.setUssd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.OutboundMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.OutboundMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.EmailMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getTemplate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.TemplateMessageBody.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getVoice();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getUssd();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.com.elarian.hera.proto.UssdMenuMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MediaMessageBody media = 2;
 * @return {?proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getMedia = function() {
  return /** @type{?proto.com.elarian.hera.proto.MediaMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MediaMessageBody, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MediaMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocationMessageBody location = 3;
 * @return {?proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getLocation = function() {
  return /** @type{?proto.com.elarian.hera.proto.LocationMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LocationMessageBody, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.LocationMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EmailMessageBody email = 4;
 * @return {?proto.com.elarian.hera.proto.EmailMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getEmail = function() {
  return /** @type{?proto.com.elarian.hera.proto.EmailMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.EmailMessageBody, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.EmailMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional TemplateMessageBody template = 5;
 * @return {?proto.com.elarian.hera.proto.TemplateMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getTemplate = function() {
  return /** @type{?proto.com.elarian.hera.proto.TemplateMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.TemplateMessageBody, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.TemplateMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setTemplate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearTemplate = function() {
  return this.setTemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasTemplate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string url = 6;
 * @return {string}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setUrl = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearUrl = function() {
  return jspb.Message.setOneofField(this, 6, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional VoiceCallDialplanMessageBody voice = 7;
 * @return {?proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getVoice = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody, 7));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallDialplanMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setVoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearVoice = function() {
  return this.setVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasVoice = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional UssdMenuMessageBody ussd = 8;
 * @return {?proto.com.elarian.hera.proto.UssdMenuMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.getUssd = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdMenuMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UssdMenuMessageBody, 8));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdMenuMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.setUssd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.com.elarian.hera.proto.OutboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.clearUssd = function() {
  return this.setUssd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessageBody.prototype.hasUssd = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.EntryCase = {
  ENTRY_NOT_SET: 0,
  TEXT: 2,
  MEDIA: 3
};

/**
 * @return {proto.com.elarian.hera.proto.PromptMessageMenuItemBody.EntryCase}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.PromptMessageMenuItemBody.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.PromptMessageMenuItemBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    media: (f = msg.getMedia()) && proto.com.elarian.hera.proto.MediaMessageBody.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.PromptMessageMenuItemBody;
  return proto.com.elarian.hera.proto.PromptMessageMenuItemBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.MediaMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.PromptMessageMenuItemBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} returns this
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} returns this
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 2, proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MediaMessageBody media = 3;
 * @return {?proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.getMedia = function() {
  return /** @type{?proto.com.elarian.hera.proto.MediaMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MediaMessageBody, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.MediaMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} returns this
*/
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.PromptMessageMenuItemBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody} returns this
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.PromptMessageMenuItemBody.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.InboundMessageBody.EntryCase = {
  ENTRY_NOT_SET: 0,
  TEXT: 1,
  MEDIA: 2,
  LOCATION: 3,
  EMAIL: 4,
  VOICE: 5,
  USSD: 6
};

/**
 * @return {proto.com.elarian.hera.proto.InboundMessageBody.EntryCase}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getEntryCase = function() {
  return /** @type {proto.com.elarian.hera.proto.InboundMessageBody.EntryCase} */(jspb.Message.computeOneofCase(this, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.InboundMessageBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.InboundMessageBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InboundMessageBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    media: (f = msg.getMedia()) && proto.com.elarian.hera.proto.MediaMessageBody.toObject(includeInstance, f),
    location: (f = msg.getLocation()) && proto.com.elarian.hera.proto.LocationMessageBody.toObject(includeInstance, f),
    email: (f = msg.getEmail()) && proto.com.elarian.hera.proto.EmailMessageBody.toObject(includeInstance, f),
    voice: (f = msg.getVoice()) && proto.com.elarian.hera.proto.VoiceCallInputMessageBody.toObject(includeInstance, f),
    ussd: (f = msg.getUssd()) && proto.com.elarian.hera.proto.UssdInputMessageBody.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.InboundMessageBody;
  return proto.com.elarian.hera.proto.InboundMessageBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.InboundMessageBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.MediaMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.MediaMessageBody.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 3:
      var value = new proto.com.elarian.hera.proto.LocationMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.LocationMessageBody.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 4:
      var value = new proto.com.elarian.hera.proto.EmailMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.EmailMessageBody.deserializeBinaryFromReader);
      msg.setEmail(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.VoiceCallInputMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.VoiceCallInputMessageBody.deserializeBinaryFromReader);
      msg.setVoice(value);
      break;
    case 6:
      var value = new proto.com.elarian.hera.proto.UssdInputMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.UssdInputMessageBody.deserializeBinaryFromReader);
      msg.setUssd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.InboundMessageBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.InboundMessageBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.InboundMessageBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.com.elarian.hera.proto.MediaMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.com.elarian.hera.proto.LocationMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getEmail();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.com.elarian.hera.proto.EmailMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getVoice();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.VoiceCallInputMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getUssd();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.com.elarian.hera.proto.UssdInputMessageBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setText = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearText = function() {
  return jspb.Message.setOneofField(this, 1, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasText = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MediaMessageBody media = 2;
 * @return {?proto.com.elarian.hera.proto.MediaMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getMedia = function() {
  return /** @type{?proto.com.elarian.hera.proto.MediaMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.MediaMessageBody, 2));
};


/**
 * @param {?proto.com.elarian.hera.proto.MediaMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setMedia = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LocationMessageBody location = 3;
 * @return {?proto.com.elarian.hera.proto.LocationMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getLocation = function() {
  return /** @type{?proto.com.elarian.hera.proto.LocationMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.LocationMessageBody, 3));
};


/**
 * @param {?proto.com.elarian.hera.proto.LocationMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setLocation = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional EmailMessageBody email = 4;
 * @return {?proto.com.elarian.hera.proto.EmailMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getEmail = function() {
  return /** @type{?proto.com.elarian.hera.proto.EmailMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.EmailMessageBody, 4));
};


/**
 * @param {?proto.com.elarian.hera.proto.EmailMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setEmail = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearEmail = function() {
  return this.setEmail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasEmail = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional VoiceCallInputMessageBody voice = 5;
 * @return {?proto.com.elarian.hera.proto.VoiceCallInputMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getVoice = function() {
  return /** @type{?proto.com.elarian.hera.proto.VoiceCallInputMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.VoiceCallInputMessageBody, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.VoiceCallInputMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setVoice = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearVoice = function() {
  return this.setVoice(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasVoice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional UssdInputMessageBody ussd = 6;
 * @return {?proto.com.elarian.hera.proto.UssdInputMessageBody}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.getUssd = function() {
  return /** @type{?proto.com.elarian.hera.proto.UssdInputMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.UssdInputMessageBody, 6));
};


/**
 * @param {?proto.com.elarian.hera.proto.UssdInputMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
*/
proto.com.elarian.hera.proto.InboundMessageBody.prototype.setUssd = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.com.elarian.hera.proto.InboundMessageBody.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.InboundMessageBody} returns this
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.clearUssd = function() {
  return this.setUssd(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.InboundMessageBody.prototype.hasUssd = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    menuList: jspb.Message.toObjectList(msg.getMenuList(),
    proto.com.elarian.hera.proto.PromptMessageMenuItemBody.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.OutboundMessageReplyPrompt;
  return proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.com.elarian.hera.proto.PromptMessageReplyAction} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = new proto.com.elarian.hera.proto.PromptMessageMenuItemBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.PromptMessageMenuItemBody.deserializeBinaryFromReader);
      msg.addMenu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMenuList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.com.elarian.hera.proto.PromptMessageMenuItemBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional PromptMessageReplyAction action = 1;
 * @return {!proto.com.elarian.hera.proto.PromptMessageReplyAction}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.getAction = function() {
  return /** @type {!proto.com.elarian.hera.proto.PromptMessageReplyAction} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.com.elarian.hera.proto.PromptMessageReplyAction} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated PromptMessageMenuItemBody menu = 2;
 * @return {!Array<!proto.com.elarian.hera.proto.PromptMessageMenuItemBody>}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.getMenuList = function() {
  return /** @type{!Array<!proto.com.elarian.hera.proto.PromptMessageMenuItemBody>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.com.elarian.hera.proto.PromptMessageMenuItemBody, 2));
};


/**
 * @param {!Array<!proto.com.elarian.hera.proto.PromptMessageMenuItemBody>} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} returns this
*/
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.setMenuList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody=} opt_value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.PromptMessageMenuItemBody}
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.addMenu = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.com.elarian.hera.proto.PromptMessageMenuItemBody, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} returns this
 */
proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.prototype.clearMenuList = function() {
  return this.setMenuList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.com.elarian.hera.proto.OutboundMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.com.elarian.hera.proto.OutboundMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.elarian.hera.proto.OutboundMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    body: (f = msg.getBody()) && proto.com.elarian.hera.proto.OutboundMessageBody.toObject(includeInstance, f),
    labelsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    providerTag: (f = msg.getProviderTag()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    replyToken: (f = msg.getReplyToken()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    replyPrompt: (f = msg.getReplyPrompt()) && proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.OutboundMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.elarian.hera.proto.OutboundMessage;
  return proto.com.elarian.hera.proto.OutboundMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.elarian.hera.proto.OutboundMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage}
 */
proto.com.elarian.hera.proto.OutboundMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.elarian.hera.proto.OutboundMessageBody;
      reader.readMessage(value,proto.com.elarian.hera.proto.OutboundMessageBody.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addLabels(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setProviderTag(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setReplyToken(value);
      break;
    case 5:
      var value = new proto.com.elarian.hera.proto.OutboundMessageReplyPrompt;
      reader.readMessage(value,proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.deserializeBinaryFromReader);
      msg.setReplyPrompt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.elarian.hera.proto.OutboundMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.elarian.hera.proto.OutboundMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.elarian.hera.proto.OutboundMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.elarian.hera.proto.OutboundMessageBody.serializeBinaryToWriter
    );
  }
  f = message.getLabelsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getProviderTag();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getReplyToken();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getReplyPrompt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.com.elarian.hera.proto.OutboundMessageReplyPrompt.serializeBinaryToWriter
    );
  }
};


/**
 * optional OutboundMessageBody body = 1;
 * @return {?proto.com.elarian.hera.proto.OutboundMessageBody}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.getBody = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessageBody} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.OutboundMessageBody, 1));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessageBody|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
*/
proto.com.elarian.hera.proto.OutboundMessage.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.hasBody = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string labels = 2;
 * @return {!Array<string>}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.getLabelsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.setLabelsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.addLabels = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.clearLabelsList = function() {
  return this.setLabelsList([]);
};


/**
 * optional google.protobuf.StringValue provider_tag = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.getProviderTag = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
*/
proto.com.elarian.hera.proto.OutboundMessage.prototype.setProviderTag = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.clearProviderTag = function() {
  return this.setProviderTag(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.hasProviderTag = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue reply_token = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.getReplyToken = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
*/
proto.com.elarian.hera.proto.OutboundMessage.prototype.setReplyToken = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.clearReplyToken = function() {
  return this.setReplyToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.hasReplyToken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional OutboundMessageReplyPrompt reply_prompt = 5;
 * @return {?proto.com.elarian.hera.proto.OutboundMessageReplyPrompt}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.getReplyPrompt = function() {
  return /** @type{?proto.com.elarian.hera.proto.OutboundMessageReplyPrompt} */ (
    jspb.Message.getWrapperField(this, proto.com.elarian.hera.proto.OutboundMessageReplyPrompt, 5));
};


/**
 * @param {?proto.com.elarian.hera.proto.OutboundMessageReplyPrompt|undefined} value
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
*/
proto.com.elarian.hera.proto.OutboundMessage.prototype.setReplyPrompt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.com.elarian.hera.proto.OutboundMessage} returns this
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.clearReplyPrompt = function() {
  return this.setReplyPrompt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.com.elarian.hera.proto.OutboundMessage.prototype.hasReplyPrompt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingChannel = {
  MESSAGING_CHANNEL_UNSPECIFIED: 0,
  MESSAGING_CHANNEL_SMS: 1,
  MESSAGING_CHANNEL_VOICE: 2,
  MESSAGING_CHANNEL_USSD: 3,
  MESSAGING_CHANNEL_FB_MESSENGER: 4,
  MESSAGING_CHANNEL_TELEGRAM: 5,
  MESSAGING_CHANNEL_WHATSAPP: 6,
  MESSAGING_CHANNEL_EMAIL: 7
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdate = {
  MESSAGING_CONSENT_UPDATE_UNSPECIFIED: 0,
  MESSAGING_CONSENT_UPDATE_ALLOW: 1,
  MESSAGING_CONSENT_UPDATE_BLOCK: 2
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingConsentUpdateStatus = {
  MESSAGING_CONSENT_UPDATE_STATUS_UNSPECIFIED: 0,
  MESSAGING_CONSENT_UPDATE_STATUS_QUEUED: 100,
  MESSAGING_CONSENT_UPDATE_STATUS_COMPLETED: 300,
  MESSAGING_CONSENT_UPDATE_STATUS_INVALID_CHANNEL_NUMBER: 401,
  MESSAGING_CONSENT_UPDATE_STATUS_DECOMMISSIONED_CUSTOMER_ID: 402,
  MESSAGING_CONSENT_UPDATE_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessagingSessionEndReason = {
  MESSAGING_SESSION_END_REASON_UNSPECIFIED: 0,
  MESSAGING_SESSION_END_REASON_NORMAL_CLEARING: 100,
  MESSAGING_SESSION_END_REASON_INACTIVITY: 200,
  MESSAGING_SESSION_END_REASON_FAILURE: 300
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessageReaction = {
  MESSAGE_REACTION_UNSPECIFIED: 0,
  MESSAGE_REACTION_CLICKED: 100,
  MESSAGE_REACTION_UNSUBSCRIBED: 200,
  MESSAGE_REACTION_COMPLAINED: 201
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.PromptMessageReplyAction = {
  PROMPT_MESSAGE_REPLY_ACTION_UNSPECIFIED: 0,
  PROMPT_MESSAGE_REPLY_ACTION_TEXT: 1,
  PROMPT_MESSAGE_REPLY_ACTION_PHONE_NUMBER: 2,
  PROMPT_MESSAGE_REPLY_ACTION_EMAIL: 3,
  PROMPT_MESSAGE_REPLY_ACTION_LOCATION: 4,
  PROMPT_MESSAGE_REPLY_ACTION_URL: 5
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.MessageDeliveryStatus = {
  MESSAGE_DELIVERY_STATUS_UNSPECIFIED: 0,
  MESSAGE_DELIVERY_STATUS_QUEUED: 100,
  MESSAGE_DELIVERY_STATUS_SENT: 101,
  MESSAGE_DELIVERY_STATUS_DELIVERED: 300,
  MESSAGE_DELIVERY_STATUS_READ: 301,
  MESSAGE_DELIVERY_STATUS_RECEIVED: 302,
  MESSAGE_DELIVERY_STATUS_SESSION_INITIATED: 303,
  MESSAGE_DELIVERY_STATUS_FAILED: 400,
  MESSAGE_DELIVERY_STATUS_NO_CONSENT: 401,
  MESSAGE_DELIVERY_STATUS_NO_CAPABILITY: 402,
  MESSAGE_DELIVERY_STATUS_EXPIRED: 403,
  MESSAGE_DELIVERY_STATUS_NO_SESSION_IN_PROGRESS: 404,
  MESSAGE_DELIVERY_STATUS_OTHER_SESSION_IN_PROGRESS: 405,
  MESSAGE_DELIVERY_STATUS_INVALID_REPLY_TOKEN: 406,
  MESSAGE_DELIVERY_STATUS_INVALID_CHANNEL_NUMBER: 407,
  MESSAGE_DELIVERY_STATUS_NOT_SUPPORTED: 408,
  MESSAGE_DELIVERY_STATUS_INVALID_REPLY_TO_MESSAGE_ID: 409,
  MESSAGE_DELIVERY_STATUS_INVALID_CUSTOMER_ID: 410,
  MESSAGE_DELIVERY_STATUS_DUPLICATE_REQUEST: 411,
  MESSAGE_DELIVERY_STATUS_TAG_NOT_FOUND: 412,
  MESSAGE_DELIVERY_STATUS_CUSTOMER_NUMBER_NOT_FOUND: 413,
  MESSAGE_DELIVERY_STATUS_DECOMMISSIONED_CUSTOMERID: 414,
  MESSAGE_DELIVERY_STATUS_REJECTED: 415,
  MESSAGE_DELIVERY_STATUS_INVALID_REQUEST: 416,
  MESSAGE_DELIVERY_STATUS_INSUFFICIENT_CREDITS: 417,
  MESSAGE_DELIVERY_STATUS_GATEWAY_ERROR: 418,
  MESSAGE_DELIVERY_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallStatus = {
  VOICE_CALL_STATUS_UNSPECIFIED: 0,
  VOICE_CALL_STATUS_QUEUED: 100,
  VOICE_CALL_STATUS_ANSWERED: 101,
  VOICE_CALL_STATUS_RINGING: 102,
  VOICE_CALL_STATUS_ACTIVE: 200,
  VOICE_CALL_STATUS_DIALING: 201,
  VOICE_CALL_STATUS_DIAL_COMPLETED: 202,
  VOICE_CALL_STATUS_BRIDGED: 203,
  VOICE_CALL_STATUS_ENQUEUED: 204,
  VOICE_CALL_STATUS_DEQUEUED: 205,
  VOICE_CALL_STATUS_TRANSFERRED: 206,
  VOICE_CALL_STATUS_TRANSFER_COMPLETED: 207,
  VOICE_CALL_STATUS_COMPLETED: 300,
  VOICE_CALL_STATUS_INSUFFICIENT_CREDIT: 400,
  VOICE_CALL_STATUS_NOT_ANSWERED: 401,
  VOICE_CALL_STATUS_INVALID_PHONE_NUMBER: 402,
  VOICE_CALL_STATUS_DESTINATION_NOT_SUPPORTED: 403,
  VOICE_CALL_STATUS_DECOMMISSIONED_CUSTOMERID: 404,
  VOICE_CALL_STATUS_EXPIRED: 405,
  VOICE_CALL_STATUS_INVALID_CHANNEL_NUMBER: 406,
  VOICE_CALL_STATUS_GATEWAY_ERROR: 407,
  VOICE_CALL_STATUS_APPLICATION_ERROR: 501
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.VoiceCallHangupCause = {
  VOICE_CALL_HANGUP_CAUSE_UNSPECIFIED: 0,
  VOICE_CALL_HANGUP_CAUSE_UNALLOCATED_NUMBER: 1,
  VOICE_CALL_HANGUP_CAUSE_USER_BUSY: 17,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_CLEARING: 16,
  VOICE_CALL_HANGUP_CAUSE_NO_USER_RESPONSE: 18,
  VOICE_CALL_HANGUP_CAUSE_NO_ANSWER: 19,
  VOICE_CALL_HANGUP_CAUSE_SUBSCRIBER_ABSENT: 20,
  VOICE_CALL_HANGUP_CAUSE_CALL_REJECTED: 21,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_UNSPECIFIED: 31,
  VOICE_CALL_HANGUP_CAUSE_NORMAL_TEMPORARY_FAILURE: 41,
  VOICE_CALL_HANGUP_CAUSE_SERVICE_UNAVAILABLE: 63,
  VOICE_CALL_HANGUP_CAUSE_RECOVERY_ON_TIMER_EXPIRE: 102,
  VOICE_CALL_HANGUP_CAUSE_ORIGINATOR_CANCEL: 487,
  VOICE_CALL_HANGUP_CAUSE_LOSE_RACE: 502,
  VOICE_CALL_HANGUP_CAUSE_USER_NOT_REGISTERED: 606
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.UssdSessionStatus = {
  USSD_SESSION_STATUS_UNSPECIFIED: 0,
  USSD_SESSION_STATUS_ACTIVE: 100,
  USSD_SESSION_STATUS_INCOMPLETE: 200,
  USSD_SESSION_STATUS_COMPLETED: 201,
  USSD_SESSION_STATUS_APP_ERROR: 300
};

/**
 * @enum {number}
 */
proto.com.elarian.hera.proto.TextToSpeechVoice = {
  TEXT_TO_SPEECH_VOICE_UNSPECIFIED: 0,
  TEXT_TO_SPEECH_VOICE_MALE: 1,
  TEXT_TO_SPEECH_VOICE_FEMALE: 2
};

goog.object.extend(exports, proto.com.elarian.hera.proto);
