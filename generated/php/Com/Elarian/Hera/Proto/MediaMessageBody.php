<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: messaging_model.proto

namespace Com\Elarian\Hera\Proto;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>com.elarian.hera.proto.MediaMessageBody</code>
 */
class MediaMessageBody extends \Google\Protobuf\Internal\Message
{
    /**
     * Generated from protobuf field <code>string url = 1;</code>
     */
    protected $url = '';
    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.MediaType media = 2;</code>
     */
    protected $media = 0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $url
     *     @type int $media
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\MessagingModel::initOnce();
        parent::__construct($data);
    }

    /**
     * Generated from protobuf field <code>string url = 1;</code>
     * @return string
     */
    public function getUrl()
    {
        return $this->url;
    }

    /**
     * Generated from protobuf field <code>string url = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setUrl($var)
    {
        GPBUtil::checkString($var, True);
        $this->url = $var;

        return $this;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.MediaType media = 2;</code>
     * @return int
     */
    public function getMedia()
    {
        return $this->media;
    }

    /**
     * Generated from protobuf field <code>.com.elarian.hera.proto.MediaType media = 2;</code>
     * @param int $var
     * @return $this
     */
    public function setMedia($var)
    {
        GPBUtil::checkEnum($var, \Com\Elarian\Hera\Proto\MediaType::class);
        $this->media = $var;

        return $this;
    }

}
