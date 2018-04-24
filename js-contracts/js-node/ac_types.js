//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var common_ttypes = require('./common_types');


var ttypes = module.exports = {};
var Request = module.exports.Request = function(args) {
  this.resource = null;
  this.action = null;
  this.subject = null;
  this.context = null;
  if (args) {
    if (args.resource !== undefined && args.resource !== null) {
      this.resource = args.resource;
    }
    if (args.action !== undefined && args.action !== null) {
      this.action = args.action;
    }
    if (args.subject !== undefined && args.subject !== null) {
      this.subject = args.subject;
    }
    if (args.context !== undefined && args.context !== null) {
      this.context = Thrift.copyMap(args.context, [null]);
    }
  }
};
Request.prototype = {};
Request.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.resource = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.action = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.subject = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.context = {};
        var _ktype1 = 0;
        var _vtype2 = 0;
        _rtmp34 = input.readMapBegin();
        _ktype1 = _rtmp34.ktype;
        _vtype2 = _rtmp34.vtype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var key6 = null;
          var val7 = null;
          key6 = input.readString();
          val7 = input.readString();
          this.context[key6] = val7;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Request.prototype.write = function(output) {
  output.writeStructBegin('Request');
  if (this.resource !== null && this.resource !== undefined) {
    output.writeFieldBegin('resource', Thrift.Type.STRING, 1);
    output.writeString(this.resource);
    output.writeFieldEnd();
  }
  if (this.action !== null && this.action !== undefined) {
    output.writeFieldBegin('action', Thrift.Type.STRING, 2);
    output.writeString(this.action);
    output.writeFieldEnd();
  }
  if (this.subject !== null && this.subject !== undefined) {
    output.writeFieldBegin('subject', Thrift.Type.STRING, 3);
    output.writeString(this.subject);
    output.writeFieldEnd();
  }
  if (this.context !== null && this.context !== undefined) {
    output.writeFieldBegin('context', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.context));
    for (var kiter8 in this.context)
    {
      if (this.context.hasOwnProperty(kiter8))
      {
        var viter9 = this.context[kiter8];
        output.writeString(kiter8);
        output.writeString(viter9);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.VERSION = '1.1.0';
ttypes.ERR_CODE = 163;
ttypes.SERVICE_NAME = '4cas-ac';
