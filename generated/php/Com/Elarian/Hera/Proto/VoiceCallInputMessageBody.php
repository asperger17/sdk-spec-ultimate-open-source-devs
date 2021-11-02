<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: messaging_model.proto

namespace Com\Elarian\Hera\Proto;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>com.elarian.hera.proto.VoiceCallInputMessageBody</code>
 */
class VoiceCallInputMessageBody extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.CustomerEventDirection direction = 1;</code>
     */
    protected $direction = 0;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallStatus status = 2;</code>
     */
    protected $status = 0;
    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp started_at = 3;</code>
     */
    protected $started_at = null;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallHangupCause hangup_cause = 4;</code>
     */
    protected $hangup_cause = 0;
    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue dtmf_digits = 5;</code>
     */
    protected $dtmf_digits = null;
    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue recording_url = 6;</code>
     */
    protected $recording_url = null;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallDialInput dial_data = 7;</code>
     */
    protected $dial_data = null;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallQueueInput queue_data = 8;</code>
     */
    protected $queue_data = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $direction
     *     @type int $status
     *     @type \Google\Protobuf\Timestamp $started_at
     *     @type int $hangup_cause
     *     @type \Google\Protobuf\StringValue $dtmf_digits
     *     @type \Google\Protobuf\StringValue $recording_url
     *     @type \Com\Elarian\Hera\Proto\VoiceCallDialInput $dial_data
     *     @type \Com\Elarian\Hera\Proto\VoiceCallQueueInput $queue_data
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\MessagingModel::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.CustomerEventDirection direction = 1;</code>
     * @return int
     */
    public function getDirection()
    {
        return $this->direction;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.CustomerEventDirection direction = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setDirection($var)
    {
        GPBUtil::checkEnum($var, \Com\Elarian\Hera\Proto\CustomerEventDirection::class);
        $this->direction = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallStatus status = 2;</code>
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallStatus status = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setStatus($var)
    {
        GPBUtil::checkEnum($var, \Com\Elarian\Hera\Proto\VoiceCallStatus::class);
        $this->status = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp started_at = 3;</code>
     * @return \Google\Protobuf\Timestamp
     */
    public function getStartedAt()
    {
        return isset($this->started_at) ? $this->started_at : null;
    }

    public function hasStartedAt()
    {
        return isset($this->started_at);
    }

    public function clearStartedAt()
    {
        unset($this->started_at);
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.Timestamp started_at = 3;</code>
     * @param \Google\Protobuf\Timestamp $var
     * @return $this
     */
    public function setStartedAt($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\Timestamp::class);
        $this->started_at = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallHangupCause hangup_cause = 4;</code>
     * @return int
     */
    public function getHangupCause()
    {
        return $this->hangup_cause;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallHangupCause hangup_cause = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setHangupCause($var)
    {
        GPBUtil::checkEnum($var, \Com\Elarian\Hera\Proto\VoiceCallHangupCause::class);
        $this->hangup_cause = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue dtmf_digits = 5;</code>
     * @return \Google\Protobuf\StringValue
     */
    public function getDtmfDigits()
    {
        return isset($this->dtmf_digits) ? $this->dtmf_digits : null;
    }

    public function hasDtmfDigits()
    {
        return isset($this->dtmf_digits);
    }

    public function clearDtmfDigits()
    {
        unset($this->dtmf_digits);
    }

    /**
     * Returns the unboxed value from <code>getDtmfDigits()</code>

     * Generated from protobuf field <code>.google.protobuf.StringValue dtmf_digits = 5;</code>
     * @return string|null
     */
    public function getDtmfDigitsUnwrapped()
    {
        return $this->readWrapperValue("dtmf_digits");
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue dtmf_digits = 5;</code>
     * @param \Google\Protobuf\StringValue $var
     * @return $this
     */
    public function setDtmfDigits($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\StringValue::class);
        $this->dtmf_digits = $var;

        return $this;
    }

    /**
     * Sets the field by wrapping a primitive type in a Google\Protobuf\StringValue object.

     * Generated from protobuf field <code>.google.protobuf.StringValue dtmf_digits = 5;</code>
     * @param string|null $var
     * @return $this
     */
    public function setDtmfDigitsUnwrapped($var)
    {
        $this->writeWrapperValue("dtmf_digits", $var);
        return $this;}

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue recording_url = 6;</code>
     * @return \Google\Protobuf\StringValue
     */
    public function getRecordingUrl()
    {
        return isset($this->recording_url) ? $this->recording_url : null;
    }

    public function hasRecordingUrl()
    {
        return isset($this->recording_url);
    }

    public function clearRecordingUrl()
    {
        unset($this->recording_url);
    }

    /**
     * Returns the unboxed value from <code>getRecordingUrl()</code>

     * Generated from protobuf field <code>.google.protobuf.StringValue recording_url = 6;</code>
     * @return string|null
     */
    public function getRecordingUrlUnwrapped()
    {
        return $this->readWrapperValue("recording_url");
    }

    /**
     * Generated from protobuf field <code>.google.protobuf.StringValue recording_url = 6;</code>
     * @param \Google\Protobuf\StringValue $var
     * @return $this
     */
    public function setRecordingUrl($var)
    {
        GPBUtil::checkMessage($var, \Google\Protobuf\StringValue::class);
        $this->recording_url = $var;

        return $this;
    }

    /**
     * Sets the field by wrapping a primitive type in a Google\Protobuf\StringValue object.

     * Generated from protobuf field <code>.google.protobuf.StringValue recording_url = 6;</code>
     * @param string|null $var
     * @return $this
     */
    public function setRecordingUrlUnwrapped($var)
    {
        $this->writeWrapperValue("recording_url", $var);
        return $this;}

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallDialInput dial_data = 7;</code>
     * @return \Com\Elarian\Hera\Proto\VoiceCallDialInput
     */
    public function getDialData()
    {
        return isset($this->dial_data) ? $this->dial_data : null;
    }

    public function hasDialData()
    {
        return isset($this->dial_data);
    }

    public function clearDialData()
    {
        unset($this->dial_data);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallDialInput dial_data = 7;</code>
     * @param \Com\Elarian\Hera\Proto\VoiceCallDialInput $var
     * @return $this
     */
    public function setDialData($var)
    {
        GPBUtil::checkMessage($var, \Com\Elarian\Hera\Proto\VoiceCallDialInput::class);
        $this->dial_data = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallQueueInput queue_data = 8;</code>
     * @return \Com\Elarian\Hera\Proto\VoiceCallQueueInput
     */
    public function getQueueData()
    {
        return isset($this->queue_data) ? $this->queue_data : null;
    }

    public function hasQueueData()
    {
        return isset($this->queue_data);
    }

    public function clearQueueData()
    {
        unset($this->queue_data);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.VoiceCallQueueInput queue_data = 8;</code>
     * @param \Com\Elarian\Hera\Proto\VoiceCallQueueInput $var
     * @return $this
     */
    public function setQueueData($var)
    {
        GPBUtil::checkMessage($var, \Com\Elarian\Hera\Proto\VoiceCallQueueInput::class);
        $this->queue_data = $var;

        return $this;
    }

}
