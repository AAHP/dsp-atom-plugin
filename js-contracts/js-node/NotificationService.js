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


var PublicNotificationService = require('./PublicNotificationService');
var PublicNotificationServiceClient = PublicNotificationService.Client;
var PublicNotificationServiceProcessor = PublicNotificationService.Processor;
var ttypes = require('./notification_types');
//HELPER FUNCTIONS AND STRUCTURES

var NotificationService_notifyAll_args = function(args) {
  this.ctx = null;
  this.notify = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.notify !== undefined && args.notify !== null) {
      this.notify = new ttypes.Notification(args.notify);
    }
  }
};
NotificationService_notifyAll_args.prototype = {};
NotificationService_notifyAll_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.notify = new ttypes.Notification();
        this.notify.read(input);
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

NotificationService_notifyAll_args.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_notifyAll_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.notify !== null && this.notify !== undefined) {
    output.writeFieldBegin('notify', Thrift.Type.STRUCT, 2);
    this.notify.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_notifyAll_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Notification(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
NotificationService_notifyAll_result.prototype = {};
NotificationService_notifyAll_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Notification();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new common_ttypes.Error();
        this.err.read(input);
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

NotificationService_notifyAll_result.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_notifyAll_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_notifyPrincipals_args = function(args) {
  this.ctx = null;
  this.identities = null;
  this.notify = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.identities !== undefined && args.identities !== null) {
      this.identities = Thrift.copyList(args.identities, [common_ttypes.Identity]);
    }
    if (args.notify !== undefined && args.notify !== null) {
      this.notify = new ttypes.Notification(args.notify);
    }
  }
};
NotificationService_notifyPrincipals_args.prototype = {};
NotificationService_notifyPrincipals_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size26 = 0;
        var _rtmp330;
        this.identities = [];
        var _etype29 = 0;
        _rtmp330 = input.readListBegin();
        _etype29 = _rtmp330.etype;
        _size26 = _rtmp330.size;
        for (var _i31 = 0; _i31 < _size26; ++_i31)
        {
          var elem32 = null;
          elem32 = new common_ttypes.Identity();
          elem32.read(input);
          this.identities.push(elem32);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.notify = new ttypes.Notification();
        this.notify.read(input);
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

NotificationService_notifyPrincipals_args.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_notifyPrincipals_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.identities !== null && this.identities !== undefined) {
    output.writeFieldBegin('identities', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.identities.length);
    for (var iter33 in this.identities)
    {
      if (this.identities.hasOwnProperty(iter33))
      {
        iter33 = this.identities[iter33];
        iter33.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.notify !== null && this.notify !== undefined) {
    output.writeFieldBegin('notify', Thrift.Type.STRUCT, 3);
    this.notify.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_notifyPrincipals_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Notification(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
NotificationService_notifyPrincipals_result.prototype = {};
NotificationService_notifyPrincipals_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Notification();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new common_ttypes.Error();
        this.err.read(input);
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

NotificationService_notifyPrincipals_result.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_notifyPrincipals_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_updateNotification_args = function(args) {
  this.ctx = null;
  this.notify = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.notify !== undefined && args.notify !== null) {
      this.notify = new ttypes.Notification(args.notify);
    }
  }
};
NotificationService_updateNotification_args.prototype = {};
NotificationService_updateNotification_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.notify = new ttypes.Notification();
        this.notify.read(input);
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

NotificationService_updateNotification_args.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_updateNotification_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.notify !== null && this.notify !== undefined) {
    output.writeFieldBegin('notify', Thrift.Type.STRUCT, 2);
    this.notify.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_updateNotification_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.Notification(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
NotificationService_updateNotification_result.prototype = {};
NotificationService_updateNotification_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.Notification();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new common_ttypes.Error();
        this.err.read(input);
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

NotificationService_updateNotification_result.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_updateNotification_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_deleteNotification_args = function(args) {
  this.ctx = null;
  this.notificationID = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.notificationID !== undefined && args.notificationID !== null) {
      this.notificationID = args.notificationID;
    }
  }
};
NotificationService_deleteNotification_args.prototype = {};
NotificationService_deleteNotification_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.notificationID = input.readString();
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

NotificationService_deleteNotification_args.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_deleteNotification_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.notificationID !== null && this.notificationID !== undefined) {
    output.writeFieldBegin('notificationID', Thrift.Type.STRING, 2);
    output.writeString(this.notificationID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_deleteNotification_result = function(args) {
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
NotificationService_deleteNotification_result.prototype = {};
NotificationService_deleteNotification_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new common_ttypes.Error();
        this.err.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationService_deleteNotification_result.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_deleteNotification_result');
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_purgeNotificationsOlderThan_args = function(args) {
  this.ctx = null;
  this.intervalDays = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.intervalDays !== undefined && args.intervalDays !== null) {
      this.intervalDays = args.intervalDays;
    }
  }
};
NotificationService_purgeNotificationsOlderThan_args.prototype = {};
NotificationService_purgeNotificationsOlderThan_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.ctx = new common_ttypes.Context();
        this.ctx.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.intervalDays = input.readI64();
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

NotificationService_purgeNotificationsOlderThan_args.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_purgeNotificationsOlderThan_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.intervalDays !== null && this.intervalDays !== undefined) {
    output.writeFieldBegin('intervalDays', Thrift.Type.I64, 2);
    output.writeI64(this.intervalDays);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationService_purgeNotificationsOlderThan_result = function(args) {
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
NotificationService_purgeNotificationsOlderThan_result.prototype = {};
NotificationService_purgeNotificationsOlderThan_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.err = new common_ttypes.Error();
        this.err.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

NotificationService_purgeNotificationsOlderThan_result.prototype.write = function(output) {
  output.writeStructBegin('NotificationService_purgeNotificationsOlderThan_result');
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(NotificationServiceClient, PublicNotificationServiceClient);
NotificationServiceClient.prototype.seqid = function() { return this._seqid; };
NotificationServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
NotificationServiceClient.prototype.notifyAll = function(ctx, notify, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_notifyAll(ctx, notify);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyAll(ctx, notify);
  }
};

NotificationServiceClient.prototype.send_notifyAll = function(ctx, notify) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyAll', Thrift.MessageType.CALL, this.seqid());
  var args = new NotificationService_notifyAll_args();
  args.ctx = ctx;
  args.notify = notify;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NotificationServiceClient.prototype.recv_notifyAll = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NotificationService_notifyAll_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('notifyAll failed: unknown result');
};
NotificationServiceClient.prototype.notifyPrincipals = function(ctx, identities, notify, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_notifyPrincipals(ctx, identities, notify);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_notifyPrincipals(ctx, identities, notify);
  }
};

NotificationServiceClient.prototype.send_notifyPrincipals = function(ctx, identities, notify) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('notifyPrincipals', Thrift.MessageType.CALL, this.seqid());
  var args = new NotificationService_notifyPrincipals_args();
  args.ctx = ctx;
  args.identities = identities;
  args.notify = notify;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NotificationServiceClient.prototype.recv_notifyPrincipals = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NotificationService_notifyPrincipals_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('notifyPrincipals failed: unknown result');
};
NotificationServiceClient.prototype.updateNotification = function(ctx, notify, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_updateNotification(ctx, notify);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateNotification(ctx, notify);
  }
};

NotificationServiceClient.prototype.send_updateNotification = function(ctx, notify) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateNotification', Thrift.MessageType.CALL, this.seqid());
  var args = new NotificationService_updateNotification_args();
  args.ctx = ctx;
  args.notify = notify;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NotificationServiceClient.prototype.recv_updateNotification = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NotificationService_updateNotification_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateNotification failed: unknown result');
};
NotificationServiceClient.prototype.deleteNotification = function(ctx, notificationID, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_deleteNotification(ctx, notificationID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_deleteNotification(ctx, notificationID);
  }
};

NotificationServiceClient.prototype.send_deleteNotification = function(ctx, notificationID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('deleteNotification', Thrift.MessageType.CALL, this.seqid());
  var args = new NotificationService_deleteNotification_args();
  args.ctx = ctx;
  args.notificationID = notificationID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NotificationServiceClient.prototype.recv_deleteNotification = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NotificationService_deleteNotification_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  callback(null);
};
NotificationServiceClient.prototype.purgeNotificationsOlderThan = function(ctx, intervalDays, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_purgeNotificationsOlderThan(ctx, intervalDays);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_purgeNotificationsOlderThan(ctx, intervalDays);
  }
};

NotificationServiceClient.prototype.send_purgeNotificationsOlderThan = function(ctx, intervalDays) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('purgeNotificationsOlderThan', Thrift.MessageType.CALL, this.seqid());
  var args = new NotificationService_purgeNotificationsOlderThan_args();
  args.ctx = ctx;
  args.intervalDays = intervalDays;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

NotificationServiceClient.prototype.recv_purgeNotificationsOlderThan = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new NotificationService_purgeNotificationsOlderThan_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  callback(null);
};
var NotificationServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(NotificationServiceProcessor, PublicNotificationServiceProcessor);
NotificationServiceProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
NotificationServiceProcessor.prototype.process_notifyAll = function(seqid, input, output) {
  var args = new NotificationService_notifyAll_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyAll.length === 2) {
    Q.fcall(this._handler.notifyAll, args.ctx, args.notify)
      .then(function(result) {
        var result_obj = new NotificationService_notifyAll_result({success: result});
        output.writeMessageBegin("notifyAll", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new NotificationService_notifyAll_result(err);
          output.writeMessageBegin("notifyAll", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyAll", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyAll(args.ctx, args.notify, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new NotificationService_notifyAll_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyAll", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyAll", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
NotificationServiceProcessor.prototype.process_notifyPrincipals = function(seqid, input, output) {
  var args = new NotificationService_notifyPrincipals_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.notifyPrincipals.length === 3) {
    Q.fcall(this._handler.notifyPrincipals, args.ctx, args.identities, args.notify)
      .then(function(result) {
        var result_obj = new NotificationService_notifyPrincipals_result({success: result});
        output.writeMessageBegin("notifyPrincipals", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new NotificationService_notifyPrincipals_result(err);
          output.writeMessageBegin("notifyPrincipals", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("notifyPrincipals", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.notifyPrincipals(args.ctx, args.identities, args.notify, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new NotificationService_notifyPrincipals_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("notifyPrincipals", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("notifyPrincipals", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
NotificationServiceProcessor.prototype.process_updateNotification = function(seqid, input, output) {
  var args = new NotificationService_updateNotification_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateNotification.length === 2) {
    Q.fcall(this._handler.updateNotification, args.ctx, args.notify)
      .then(function(result) {
        var result_obj = new NotificationService_updateNotification_result({success: result});
        output.writeMessageBegin("updateNotification", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new NotificationService_updateNotification_result(err);
          output.writeMessageBegin("updateNotification", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateNotification", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateNotification(args.ctx, args.notify, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new NotificationService_updateNotification_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateNotification", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateNotification", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
NotificationServiceProcessor.prototype.process_deleteNotification = function(seqid, input, output) {
  var args = new NotificationService_deleteNotification_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.deleteNotification.length === 2) {
    Q.fcall(this._handler.deleteNotification, args.ctx, args.notificationID)
      .then(function(result) {
        var result_obj = new NotificationService_deleteNotification_result({success: result});
        output.writeMessageBegin("deleteNotification", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new NotificationService_deleteNotification_result(err);
          output.writeMessageBegin("deleteNotification", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("deleteNotification", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.deleteNotification(args.ctx, args.notificationID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new NotificationService_deleteNotification_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("deleteNotification", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("deleteNotification", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
NotificationServiceProcessor.prototype.process_purgeNotificationsOlderThan = function(seqid, input, output) {
  var args = new NotificationService_purgeNotificationsOlderThan_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.purgeNotificationsOlderThan.length === 2) {
    Q.fcall(this._handler.purgeNotificationsOlderThan, args.ctx, args.intervalDays)
      .then(function(result) {
        var result_obj = new NotificationService_purgeNotificationsOlderThan_result({success: result});
        output.writeMessageBegin("purgeNotificationsOlderThan", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new NotificationService_purgeNotificationsOlderThan_result(err);
          output.writeMessageBegin("purgeNotificationsOlderThan", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("purgeNotificationsOlderThan", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.purgeNotificationsOlderThan(args.ctx, args.intervalDays, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new NotificationService_purgeNotificationsOlderThan_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("purgeNotificationsOlderThan", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("purgeNotificationsOlderThan", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};