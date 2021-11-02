<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: app_socket.proto

namespace Com\Elarian\Hera\Proto;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>com.elarian.hera.proto.InitiatePaymentCommand</code>
 */
class InitiatePaymentCommand extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty debit_party = 1;</code>
     */
    protected $debit_party = null;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty credit_party = 2;</code>
     */
    protected $credit_party = null;
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.Cash value = 3;</code>
     */
    protected $value = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type \Com\Elarian\Hera\Proto\PaymentCounterParty $debit_party
     *     @type \Com\Elarian\Hera\Proto\PaymentCounterParty $credit_party
     *     @type \Com\Elarian\Hera\Proto\Cash $value
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\AppSocket::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty debit_party = 1;</code>
     * @return \Com\Elarian\Hera\Proto\PaymentCounterParty
     */
    public function getDebitParty()
    {
        return isset($this->debit_party) ? $this->debit_party : null;
    }

    public function hasDebitParty()
    {
        return isset($this->debit_party);
    }

    public function clearDebitParty()
    {
        unset($this->debit_party);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty debit_party = 1;</code>
     * @param \Com\Elarian\Hera\Proto\PaymentCounterParty $var
     * @return $this
     */
    public function setDebitParty($var)
    {
        GPBUtil::checkMessage($var, \Com\Elarian\Hera\Proto\PaymentCounterParty::class);
        $this->debit_party = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty credit_party = 2;</code>
     * @return \Com\Elarian\Hera\Proto\PaymentCounterParty
     */
    public function getCreditParty()
    {
        return isset($this->credit_party) ? $this->credit_party : null;
    }

    public function hasCreditParty()
    {
        return isset($this->credit_party);
    }

    public function clearCreditParty()
    {
        unset($this->credit_party);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.PaymentCounterParty credit_party = 2;</code>
     * @param \Com\Elarian\Hera\Proto\PaymentCounterParty $var
     * @return $this
     */
    public function setCreditParty($var)
    {
        GPBUtil::checkMessage($var, \Com\Elarian\Hera\Proto\PaymentCounterParty::class);
        $this->credit_party = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.Cash value = 3;</code>
     * @return \Com\Elarian\Hera\Proto\Cash
     */
    public function getValue()
    {
        return isset($this->value) ? $this->value : null;
    }

    public function hasValue()
    {
        return isset($this->value);
    }

    public function clearValue()
    {
        unset($this->value);
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.Cash value = 3;</code>
     * @param \Com\Elarian\Hera\Proto\Cash $var
     * @return $this
     */
    public function setValue($var)
    {
        GPBUtil::checkMessage($var, \Com\Elarian\Hera\Proto\Cash::class);
        $this->value = $var;

        return $this;
    }

}
