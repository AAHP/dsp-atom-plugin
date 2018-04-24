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
ttypes.NotificationPriority = {
  'URGENT' : 0,
  'HIGH' : 128,
  'NORMAL' : 1024,
  'LOW' : 2048,
  'VERYLOW' : 4096
};
var NotificationAction = module.exports.NotificationAction = function(args) {
  this.ID = null;
  this.title = null;
  this.extra = null;
  if (args) {
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.title !== undefined && args.title !== null) {
      this.title = args.title;
    }
    if (args.extra !== undefined && args.extra !== null) {
      this.extra = Thrift.copyMap(args.extra, [null]);
    }
  }
};
NotificationAction.prototype = {};
NotificationAction.prototype.read = function(input) {
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
        this.ID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.title = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.extra = {};
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
          this.extra[key6] = val7;
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

NotificationAction.prototype.write = function(output) {
  output.writeStructBegin('NotificationAction');
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 1);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  if (this.title !== null && this.title !== undefined) {
    output.writeFieldBegin('title', Thrift.Type.STRING, 2);
    output.writeString(this.title);
    output.writeFieldEnd();
  }
  if (this.extra !== null && this.extra !== undefined) {
    output.writeFieldBegin('extra', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.extra));
    for (var kiter8 in this.extra)
    {
      if (this.extra.hasOwnProperty(kiter8))
      {
        var viter9 = this.extra[kiter8];
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

var Notification = module.exports.Notification = function(args) {
  this.ID = null;
  this.text = null;
  this.isRead = null;
  this.readOn = null;
  this.createdOn = null;
  this.category = 'INFO';
  this.priority = 4096;
  this.isPrivate = null;
  this.actions = null;
  if (args) {
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.isRead !== undefined && args.isRead !== null) {
      this.isRead = args.isRead;
    }
    if (args.readOn !== undefined && args.readOn !== null) {
      this.readOn = args.readOn;
    }
    if (args.createdOn !== undefined && args.createdOn !== null) {
      this.createdOn = args.createdOn;
    }
    if (args.category !== undefined && args.category !== null) {
      this.category = args.category;
    }
    if (args.priority !== undefined && args.priority !== null) {
      this.priority = args.priority;
    }
    if (args.isPrivate !== undefined && args.isPrivate !== null) {
      this.isPrivate = args.isPrivate;
    }
    if (args.actions !== undefined && args.actions !== null) {
      this.actions = Thrift.copyList(args.actions, [ttypes.NotificationAction]);
    }
  }
};
Notification.prototype = {};
Notification.prototype.read = function(input) {
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
        this.ID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.isRead = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.readOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.createdOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.category = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.priority = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.isPrivate = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.LIST) {
        var _size10 = 0;
        var _rtmp314;
        this.actions = [];
        var _etype13 = 0;
        _rtmp314 = input.readListBegin();
        _etype13 = _rtmp314.etype;
        _size10 = _rtmp314.size;
        for (var _i15 = 0; _i15 < _size10; ++_i15)
        {
          var elem16 = null;
          elem16 = new ttypes.NotificationAction();
          elem16.read(input);
          this.actions.push(elem16);
        }
        input.readListEnd();
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

Notification.prototype.write = function(output) {
  output.writeStructBegin('Notification');
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 1);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 2);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.isRead !== null && this.isRead !== undefined) {
    output.writeFieldBegin('isRead', Thrift.Type.BOOL, 3);
    output.writeBool(this.isRead);
    output.writeFieldEnd();
  }
  if (this.readOn !== null && this.readOn !== undefined) {
    output.writeFieldBegin('readOn', Thrift.Type.STRING, 4);
    output.writeString(this.readOn);
    output.writeFieldEnd();
  }
  if (this.createdOn !== null && this.createdOn !== undefined) {
    output.writeFieldBegin('createdOn', Thrift.Type.STRING, 5);
    output.writeString(this.createdOn);
    output.writeFieldEnd();
  }
  if (this.category !== null && this.category !== undefined) {
    output.writeFieldBegin('category', Thrift.Type.STRING, 6);
    output.writeString(this.category);
    output.writeFieldEnd();
  }
  if (this.priority !== null && this.priority !== undefined) {
    output.writeFieldBegin('priority', Thrift.Type.I32, 7);
    output.writeI32(this.priority);
    output.writeFieldEnd();
  }
  if (this.isPrivate !== null && this.isPrivate !== undefined) {
    output.writeFieldBegin('isPrivate', Thrift.Type.BOOL, 8);
    output.writeBool(this.isPrivate);
    output.writeFieldEnd();
  }
  if (this.actions !== null && this.actions !== undefined) {
    output.writeFieldBegin('actions', Thrift.Type.LIST, 10);
    output.writeListBegin(Thrift.Type.STRUCT, this.actions.length);
    for (var iter17 in this.actions)
    {
      if (this.actions.hasOwnProperty(iter17))
      {
        iter17 = this.actions[iter17];
        iter17.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationCollection = module.exports.NotificationCollection = function(args) {
  this.notifications = null;
  this.pagination = null;
  if (args) {
    if (args.notifications !== undefined && args.notifications !== null) {
      this.notifications = Thrift.copyList(args.notifications, [ttypes.Notification]);
    }
    if (args.pagination !== undefined && args.pagination !== null) {
      this.pagination = new common_ttypes.Pagination(args.pagination);
    }
  }
};
NotificationCollection.prototype = {};
NotificationCollection.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size18 = 0;
        var _rtmp322;
        this.notifications = [];
        var _etype21 = 0;
        _rtmp322 = input.readListBegin();
        _etype21 = _rtmp322.etype;
        _size18 = _rtmp322.size;
        for (var _i23 = 0; _i23 < _size18; ++_i23)
        {
          var elem24 = null;
          elem24 = new ttypes.Notification();
          elem24.read(input);
          this.notifications.push(elem24);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.pagination = new common_ttypes.Pagination();
        this.pagination.read(input);
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

NotificationCollection.prototype.write = function(output) {
  output.writeStructBegin('NotificationCollection');
  if (this.notifications !== null && this.notifications !== undefined) {
    output.writeFieldBegin('notifications', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.notifications.length);
    for (var iter25 in this.notifications)
    {
      if (this.notifications.hasOwnProperty(iter25))
      {
        iter25 = this.notifications[iter25];
        iter25.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.pagination !== null && this.pagination !== undefined) {
    output.writeFieldBegin('pagination', Thrift.Type.STRUCT, 2);
    this.pagination.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var NotificationFilter = module.exports.NotificationFilter = function(args) {
  this.identity = null;
  this.category = null;
  this.isRead = null;
  if (args) {
    if (args.identity !== undefined && args.identity !== null) {
      this.identity = new common_ttypes.Identity(args.identity);
    }
    if (args.category !== undefined && args.category !== null) {
      this.category = args.category;
    }
    if (args.isRead !== undefined && args.isRead !== null) {
      this.isRead = args.isRead;
    }
  }
};
NotificationFilter.prototype = {};
NotificationFilter.prototype.read = function(input) {
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
        this.identity = new common_ttypes.Identity();
        this.identity.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.category = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.isRead = input.readBool();
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

NotificationFilter.prototype.write = function(output) {
  output.writeStructBegin('NotificationFilter');
  if (this.identity !== null && this.identity !== undefined) {
    output.writeFieldBegin('identity', Thrift.Type.STRUCT, 1);
    this.identity.write(output);
    output.writeFieldEnd();
  }
  if (this.category !== null && this.category !== undefined) {
    output.writeFieldBegin('category', Thrift.Type.STRING, 2);
    output.writeString(this.category);
    output.writeFieldEnd();
  }
  if (this.isRead !== null && this.isRead !== undefined) {
    output.writeFieldBegin('isRead', Thrift.Type.BOOL, 3);
    output.writeBool(this.isRead);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.SERVICE_NAME = 'shared-notifications';
ttypes.VERSION = '0.0.1';
ttypes.ERR_CODE = 176;
ttypes.WS_ERR_CODE = 177;
ttypes.CATEGORY_CRIT = 'CRIT';
ttypes.CATEGORY_ERROR = 'ERROR';
ttypes.CATEGORY_WARN = 'WARN';
ttypes.CATEGORY_INFO = 'INFO';
ttypes.CATEGORY_DEBUG = 'DEBUG';