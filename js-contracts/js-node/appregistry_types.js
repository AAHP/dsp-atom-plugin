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
var Item = module.exports.Item = function(args) {
  this.ID = null;
  this.label = null;
  this.uri = null;
  this.iconURI = null;
  this.desc = null;
  this.weight = null;
  this.authGroups = null;
  this.modules = null;
  if (args) {
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.label !== undefined && args.label !== null) {
      this.label = args.label;
    }
    if (args.uri !== undefined && args.uri !== null) {
      this.uri = args.uri;
    }
    if (args.iconURI !== undefined && args.iconURI !== null) {
      this.iconURI = args.iconURI;
    }
    if (args.desc !== undefined && args.desc !== null) {
      this.desc = args.desc;
    }
    if (args.weight !== undefined && args.weight !== null) {
      this.weight = args.weight;
    }
    if (args.authGroups !== undefined && args.authGroups !== null) {
      this.authGroups = Thrift.copyList(args.authGroups, [null]);
    }
    if (args.modules !== undefined && args.modules !== null) {
      this.modules = Thrift.copyList(args.modules, [null]);
    }
  }
};
Item.prototype = {};
Item.prototype.read = function(input) {
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
        this.label = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.uri = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.iconURI = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.desc = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I64) {
        this.weight = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.authGroups = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readString();
          this.authGroups.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.LIST) {
        var _size7 = 0;
        var _rtmp311;
        this.modules = [];
        var _etype10 = 0;
        _rtmp311 = input.readListBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = new ttypes.Item();
          elem13.read(input);
          this.modules.push(elem13);
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

Item.prototype.write = function(output) {
  output.writeStructBegin('Item');
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 1);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  if (this.label !== null && this.label !== undefined) {
    output.writeFieldBegin('label', Thrift.Type.STRING, 2);
    output.writeString(this.label);
    output.writeFieldEnd();
  }
  if (this.uri !== null && this.uri !== undefined) {
    output.writeFieldBegin('uri', Thrift.Type.STRING, 3);
    output.writeString(this.uri);
    output.writeFieldEnd();
  }
  if (this.iconURI !== null && this.iconURI !== undefined) {
    output.writeFieldBegin('iconURI', Thrift.Type.STRING, 4);
    output.writeString(this.iconURI);
    output.writeFieldEnd();
  }
  if (this.desc !== null && this.desc !== undefined) {
    output.writeFieldBegin('desc', Thrift.Type.STRING, 5);
    output.writeString(this.desc);
    output.writeFieldEnd();
  }
  if (this.weight !== null && this.weight !== undefined) {
    output.writeFieldBegin('weight', Thrift.Type.I64, 6);
    output.writeI64(this.weight);
    output.writeFieldEnd();
  }
  if (this.authGroups !== null && this.authGroups !== undefined) {
    output.writeFieldBegin('authGroups', Thrift.Type.LIST, 7);
    output.writeListBegin(Thrift.Type.STRING, this.authGroups.length);
    for (var iter14 in this.authGroups)
    {
      if (this.authGroups.hasOwnProperty(iter14))
      {
        iter14 = this.authGroups[iter14];
        output.writeString(iter14);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.modules !== null && this.modules !== undefined) {
    output.writeFieldBegin('modules', Thrift.Type.LIST, 8);
    output.writeListBegin(Thrift.Type.STRUCT, this.modules.length);
    for (var iter15 in this.modules)
    {
      if (this.modules.hasOwnProperty(iter15))
      {
        iter15 = this.modules[iter15];
        iter15.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.VERSION = '0.4.0';
ttypes.ERR_CODE = 165;
ttypes.SERVICE_NAME = '4cas-appregistry';
