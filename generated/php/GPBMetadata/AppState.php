<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: app_state.proto

namespace GPBMetadata;

class AppState
{
    public static $is_initialized = false;

    public static function initOnce() {
        $pool = \Google\Protobuf\Internal\DescriptorPool::getGeneratedPool();

        if (static::$is_initialized == true) {
          return;
        }
        \GPBMetadata\CommonModel::initOnce();
        \GPBMetadata\AppModel::initOnce();
        $pool->internalAddGeneratedFile(
            '
�
app_state.protocom.elarian.hera.protoapp_model.proto"{
AppState2
data (2$.com.elarian.hera.proto.DataMapValue;
	reminders (2(.com.elarian.hera.proto.CustomerReminderbproto3'
        , true);

        static::$is_initialized = true;
    }
}

