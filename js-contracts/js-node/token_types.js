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
var APIToken = module.exports.APIToken = function(args) {
  this.ID = null;
  this.secret = null;
  this.name = null;
  this.identity = null;
  this.expiresOn = null;
  this.createdOn = null;
  if (args) {
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.secret !== undefined && args.secret !== null) {
      this.secret = args.secret;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.identity !== undefined && args.identity !== null) {
      this.identity = new common_ttypes.Identity(args.identity);
    }
    if (args.expiresOn !== undefined && args.expiresOn !== null) {
      this.expiresOn = args.expiresOn;
    }
    if (args.createdOn !== undefined && args.createdOn !== null) {
      this.createdOn = args.createdOn;
    }
  }
};
APIToken.prototype = {};
APIToken.prototype.read = function(input) {
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
        this.secret = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.identity = new common_ttypes.Identity();
        this.identity.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.expiresOn = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.createdOn = input.readString();
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

APIToken.prototype.write = function(output) {
  output.writeStructBegin('APIToken');
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 1);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  if (this.secret !== null && this.secret !== undefined) {
    output.writeFieldBegin('secret', Thrift.Type.STRING, 2);
    output.writeString(this.secret);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 3);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.identity !== null && this.identity !== undefined) {
    output.writeFieldBegin('identity', Thrift.Type.STRUCT, 4);
    this.identity.write(output);
    output.writeFieldEnd();
  }
  if (this.expiresOn !== null && this.expiresOn !== undefined) {
    output.writeFieldBegin('expiresOn', Thrift.Type.STRING, 5);
    output.writeString(this.expiresOn);
    output.writeFieldEnd();
  }
  if (this.createdOn !== null && this.createdOn !== undefined) {
    output.writeFieldBegin('createdOn', Thrift.Type.STRING, 6);
    output.writeString(this.createdOn);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenCollection = module.exports.APITokenCollection = function(args) {
  this.tokens = null;
  this.pagination = null;
  if (args) {
    if (args.tokens !== undefined && args.tokens !== null) {
      this.tokens = Thrift.copyList(args.tokens, [ttypes.APIToken]);
    }
    if (args.pagination !== undefined && args.pagination !== null) {
      this.pagination = new common_ttypes.Pagination(args.pagination);
    }
  }
};
APITokenCollection.prototype = {};
APITokenCollection.prototype.read = function(input) {
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
        var _size0 = 0;
        var _rtmp34;
        this.tokens = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.APIToken();
          elem6.read(input);
          this.tokens.push(elem6);
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

APITokenCollection.prototype.write = function(output) {
  output.writeStructBegin('APITokenCollection');
  if (this.tokens !== null && this.tokens !== undefined) {
    output.writeFieldBegin('tokens', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.tokens.length);
    for (var iter7 in this.tokens)
    {
      if (this.tokens.hasOwnProperty(iter7))
      {
        iter7 = this.tokens[iter7];
        iter7.write(output);
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

var Filter = module.exports.Filter = function(args) {
  this.identity = null;
  this.onlyValid = null;
  this.IDs = null;
  if (args) {
    if (args.identity !== undefined && args.identity !== null) {
      this.identity = new common_ttypes.Identity(args.identity);
    }
    if (args.onlyValid !== undefined && args.onlyValid !== null) {
      this.onlyValid = args.onlyValid;
    }
    if (args.IDs !== undefined && args.IDs !== null) {
      this.IDs = Thrift.copyList(args.IDs, [null]);
    }
  }
};
Filter.prototype = {};
Filter.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.onlyValid = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size8 = 0;
        var _rtmp312;
        this.IDs = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.IDs.push(elem14);
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

Filter.prototype.write = function(output) {
  output.writeStructBegin('Filter');
  if (this.identity !== null && this.identity !== undefined) {
    output.writeFieldBegin('identity', Thrift.Type.STRUCT, 1);
    this.identity.write(output);
    output.writeFieldEnd();
  }
  if (this.onlyValid !== null && this.onlyValid !== undefined) {
    output.writeFieldBegin('onlyValid', Thrift.Type.BOOL, 2);
    output.writeBool(this.onlyValid);
    output.writeFieldEnd();
  }
  if (this.IDs !== null && this.IDs !== undefined) {
    output.writeFieldBegin('IDs', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.IDs.length);
    for (var iter15 in this.IDs)
    {
      if (this.IDs.hasOwnProperty(iter15))
      {
        iter15 = this.IDs[iter15];
        output.writeString(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.VERSION = '0.2.0';
ttypes.ERR_CODE = 166;
ttypes.SERVICE_NAME = '4cas-token';
ttypes.SERVICE_NAME_INTERNAL = '4cas-token-internal';