//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = module.exports = {};
var Identity = module.exports.Identity = function(args) {
  this.iss = null;
  this.sub = null;
  if (args) {
    if (args.iss !== undefined && args.iss !== null) {
      this.iss = args.iss;
    }
    if (args.sub !== undefined && args.sub !== null) {
      this.sub = args.sub;
    }
  }
};
Identity.prototype = {};
Identity.prototype.read = function(input) {
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
        this.iss = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.sub = input.readString();
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

Identity.prototype.write = function(output) {
  output.writeStructBegin('Identity');
  if (this.iss !== null && this.iss !== undefined) {
    output.writeFieldBegin('iss', Thrift.Type.STRING, 1);
    output.writeString(this.iss);
    output.writeFieldEnd();
  }
  if (this.sub !== null && this.sub !== undefined) {
    output.writeFieldBegin('sub', Thrift.Type.STRING, 2);
    output.writeString(this.sub);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Session = module.exports.Session = function(args) {
  this.ID = null;
  this.identity = null;
  this.expiresOn = null;
  this.attrs = null;
  if (args) {
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.identity !== undefined && args.identity !== null) {
      this.identity = new ttypes.Identity(args.identity);
    }
    if (args.expiresOn !== undefined && args.expiresOn !== null) {
      this.expiresOn = args.expiresOn;
    }
    if (args.attrs !== undefined && args.attrs !== null) {
      this.attrs = Thrift.copyMap(args.attrs, [Thrift.copyList, null]);
    }
  }
};
Session.prototype = {};
Session.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.identity = new ttypes.Identity();
        this.identity.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.expiresOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size0 = 0;
        var _rtmp34;
        this.attrs = {};
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
          var _size8 = 0;
          var _rtmp312;
          val7 = [];
          var _etype11 = 0;
          _rtmp312 = input.readListBegin();
          _etype11 = _rtmp312.etype;
          _size8 = _rtmp312.size;
          for (var _i13 = 0; _i13 < _size8; ++_i13)
          {
            var elem14 = null;
            elem14 = input.readString();
            val7.push(elem14);
          }
          input.readListEnd();
          this.attrs[key6] = val7;
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

Session.prototype.write = function(output) {
  output.writeStructBegin('Session');
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 1);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  if (this.identity !== null && this.identity !== undefined) {
    output.writeFieldBegin('identity', Thrift.Type.STRUCT, 2);
    this.identity.write(output);
    output.writeFieldEnd();
  }
  if (this.expiresOn !== null && this.expiresOn !== undefined) {
    output.writeFieldBegin('expiresOn', Thrift.Type.STRING, 3);
    output.writeString(this.expiresOn);
    output.writeFieldEnd();
  }
  if (this.attrs !== null && this.attrs !== undefined) {
    output.writeFieldBegin('attrs', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, Thrift.objectLength(this.attrs));
    for (var kiter15 in this.attrs)
    {
      if (this.attrs.hasOwnProperty(kiter15))
      {
        var viter16 = this.attrs[kiter15];
        output.writeString(kiter15);
        output.writeListBegin(Thrift.Type.STRING, viter16.length);
        for (var iter17 in viter16)
        {
          if (viter16.hasOwnProperty(iter17))
          {
            iter17 = viter16[iter17];
            output.writeString(iter17);
          }
        }
        output.writeListEnd();
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Context = module.exports.Context = function(args) {
  this.cid = null;
  this.session = null;
  this.extra = null;
  if (args) {
    if (args.cid !== undefined && args.cid !== null) {
      this.cid = args.cid;
    }
    if (args.session !== undefined && args.session !== null) {
      this.session = new ttypes.Session(args.session);
    }
    if (args.extra !== undefined && args.extra !== null) {
      this.extra = Thrift.copyMap(args.extra, [null]);
    }
  }
};
Context.prototype = {};
Context.prototype.read = function(input) {
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
        this.cid = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.session = new ttypes.Session();
        this.session.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.MAP) {
        var _size18 = 0;
        var _rtmp322;
        this.extra = {};
        var _ktype19 = 0;
        var _vtype20 = 0;
        _rtmp322 = input.readMapBegin();
        _ktype19 = _rtmp322.ktype;
        _vtype20 = _rtmp322.vtype;
        _size18 = _rtmp322.size;
        for (var _i23 = 0; _i23 < _size18; ++_i23)
        {
          var key24 = null;
          var val25 = null;
          key24 = input.readString();
          val25 = input.readString();
          this.extra[key24] = val25;
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

Context.prototype.write = function(output) {
  output.writeStructBegin('Context');
  if (this.cid !== null && this.cid !== undefined) {
    output.writeFieldBegin('cid', Thrift.Type.STRING, 1);
    output.writeString(this.cid);
    output.writeFieldEnd();
  }
  if (this.session !== null && this.session !== undefined) {
    output.writeFieldBegin('session', Thrift.Type.STRUCT, 2);
    this.session.write(output);
    output.writeFieldEnd();
  }
  if (this.extra !== null && this.extra !== undefined) {
    output.writeFieldBegin('extra', Thrift.Type.MAP, 3);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.extra));
    for (var kiter26 in this.extra)
    {
      if (this.extra.hasOwnProperty(kiter26))
      {
        var viter27 = this.extra[kiter26];
        output.writeString(kiter26);
        output.writeString(viter27);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PageParams = module.exports.PageParams = function(args) {
  this.page = null;
  this.perPage = null;
  if (args) {
    if (args.page !== undefined && args.page !== null) {
      this.page = args.page;
    }
    if (args.perPage !== undefined && args.perPage !== null) {
      this.perPage = args.perPage;
    }
  }
};
PageParams.prototype = {};
PageParams.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.page = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.perPage = input.readI32();
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

PageParams.prototype.write = function(output) {
  output.writeStructBegin('PageParams');
  if (this.page !== null && this.page !== undefined) {
    output.writeFieldBegin('page', Thrift.Type.I32, 1);
    output.writeI32(this.page);
    output.writeFieldEnd();
  }
  if (this.perPage !== null && this.perPage !== undefined) {
    output.writeFieldBegin('perPage', Thrift.Type.I32, 2);
    output.writeI32(this.perPage);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SortParams = module.exports.SortParams = function(args) {
  this.field = null;
  this.asc = null;
  if (args) {
    if (args.field !== undefined && args.field !== null) {
      this.field = args.field;
    }
    if (args.asc !== undefined && args.asc !== null) {
      this.asc = args.asc;
    }
  }
};
SortParams.prototype = {};
SortParams.prototype.read = function(input) {
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
        this.field = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.asc = input.readBool();
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

SortParams.prototype.write = function(output) {
  output.writeStructBegin('SortParams');
  if (this.field !== null && this.field !== undefined) {
    output.writeFieldBegin('field', Thrift.Type.STRING, 1);
    output.writeString(this.field);
    output.writeFieldEnd();
  }
  if (this.asc !== null && this.asc !== undefined) {
    output.writeFieldBegin('asc', Thrift.Type.BOOL, 2);
    output.writeBool(this.asc);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Pagination = module.exports.Pagination = function(args) {
  this.page = null;
  this.total = null;
  this.perPage = null;
  this.hasNext = null;
  if (args) {
    if (args.page !== undefined && args.page !== null) {
      this.page = args.page;
    }
    if (args.total !== undefined && args.total !== null) {
      this.total = args.total;
    }
    if (args.perPage !== undefined && args.perPage !== null) {
      this.perPage = args.perPage;
    }
    if (args.hasNext !== undefined && args.hasNext !== null) {
      this.hasNext = args.hasNext;
    }
  }
};
Pagination.prototype = {};
Pagination.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.page = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.total = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I32) {
        this.perPage = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.hasNext = input.readBool();
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

Pagination.prototype.write = function(output) {
  output.writeStructBegin('Pagination');
  if (this.page !== null && this.page !== undefined) {
    output.writeFieldBegin('page', Thrift.Type.I32, 1);
    output.writeI32(this.page);
    output.writeFieldEnd();
  }
  if (this.total !== null && this.total !== undefined) {
    output.writeFieldBegin('total', Thrift.Type.I32, 2);
    output.writeI32(this.total);
    output.writeFieldEnd();
  }
  if (this.perPage !== null && this.perPage !== undefined) {
    output.writeFieldBegin('perPage', Thrift.Type.I32, 3);
    output.writeI32(this.perPage);
    output.writeFieldEnd();
  }
  if (this.hasNext !== null && this.hasNext !== undefined) {
    output.writeFieldBegin('hasNext', Thrift.Type.BOOL, 4);
    output.writeBool(this.hasNext);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Error = module.exports.Error = function(args) {
  Thrift.TException.call(this, "Error");
  this.name = "Error";
  this.code = null;
  this.cause = null;
  this.stack = null;
  this.extra = null;
  if (args) {
    if (args.code !== undefined && args.code !== null) {
      this.code = args.code;
    }
    if (args.cause !== undefined && args.cause !== null) {
      this.cause = args.cause;
    }
    if (args.stack !== undefined && args.stack !== null) {
      this.stack = Thrift.copyList(args.stack, [null]);
    }
    if (args.extra !== undefined && args.extra !== null) {
      this.extra = Thrift.copyMap(args.extra, [null]);
    }
  }
};
Thrift.inherits(Error, Thrift.TException);
Error.prototype.name = 'Error';
Error.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.code = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.cause = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size28 = 0;
        var _rtmp332;
        this.stack = [];
        var _etype31 = 0;
        _rtmp332 = input.readListBegin();
        _etype31 = _rtmp332.etype;
        _size28 = _rtmp332.size;
        for (var _i33 = 0; _i33 < _size28; ++_i33)
        {
          var elem34 = null;
          elem34 = input.readString();
          this.stack.push(elem34);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.MAP) {
        var _size35 = 0;
        var _rtmp339;
        this.extra = {};
        var _ktype36 = 0;
        var _vtype37 = 0;
        _rtmp339 = input.readMapBegin();
        _ktype36 = _rtmp339.ktype;
        _vtype37 = _rtmp339.vtype;
        _size35 = _rtmp339.size;
        for (var _i40 = 0; _i40 < _size35; ++_i40)
        {
          var key41 = null;
          var val42 = null;
          key41 = input.readString();
          val42 = input.readString();
          this.extra[key41] = val42;
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

Error.prototype.write = function(output) {
  output.writeStructBegin('Error');
  if (this.code !== null && this.code !== undefined) {
    output.writeFieldBegin('code', Thrift.Type.I32, 1);
    output.writeI32(this.code);
    output.writeFieldEnd();
  }
  if (this.cause !== null && this.cause !== undefined) {
    output.writeFieldBegin('cause', Thrift.Type.STRING, 2);
    output.writeString(this.cause);
    output.writeFieldEnd();
  }
  if (this.stack !== null && this.stack !== undefined) {
    output.writeFieldBegin('stack', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.stack.length);
    for (var iter43 in this.stack)
    {
      if (this.stack.hasOwnProperty(iter43))
      {
        iter43 = this.stack[iter43];
        output.writeString(iter43);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.extra !== null && this.extra !== undefined) {
    output.writeFieldBegin('extra', Thrift.Type.MAP, 4);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.extra));
    for (var kiter44 in this.extra)
    {
      if (this.extra.hasOwnProperty(kiter44))
      {
        var viter45 = this.extra[kiter44];
        output.writeString(kiter44);
        output.writeString(viter45);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.VERSION_KEY_SPEC = 'specVersion';
ttypes.VERSION_KEY_RELEASE = 'releaseVersion';
ttypes.VERSION_KEY_COMMIT = 'gitCommit';
ttypes.VERSION_SPEC_BUILDSTAMP = 'buildStamp';
ttypes.CtxKeyUserAgent = 'userAgent';
ttypes.CtxKeyRemoteAddr = 'remoteAddr';
ttypes.UNKNOWN_ERROR_CODE = 16777215;
ttypes.UnknownError = new ttypes.Error({
'code' : 16777215,'cause' : 'Unknown error'});