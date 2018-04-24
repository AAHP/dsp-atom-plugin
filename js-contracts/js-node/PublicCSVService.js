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
var vfs_ttypes = require('./vfs_types');


var BaseService = require('./BaseService');
var BaseServiceClient = BaseService.Client;
var BaseServiceProcessor = BaseService.Processor;
var ttypes = require('./csv_types');
//HELPER FUNCTIONS AND STRUCTURES

var PublicCSVService_getFirstRow_args = function(args) {
  this.ctx = null;
  this.vfsID = null;
  this.format = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.vfsID !== undefined && args.vfsID !== null) {
      this.vfsID = args.vfsID;
    }
    if (args.format !== undefined && args.format !== null) {
      this.format = new ttypes.FileFormat(args.format);
    }
  }
};
PublicCSVService_getFirstRow_args.prototype = {};
PublicCSVService_getFirstRow_args.prototype.read = function(input) {
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
        this.vfsID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.format = new ttypes.FileFormat();
        this.format.read(input);
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

PublicCSVService_getFirstRow_args.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_getFirstRow_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.vfsID !== null && this.vfsID !== undefined) {
    output.writeFieldBegin('vfsID', Thrift.Type.STRING, 2);
    output.writeString(this.vfsID);
    output.writeFieldEnd();
  }
  if (this.format !== null && this.format !== undefined) {
    output.writeFieldBegin('format', Thrift.Type.STRUCT, 3);
    this.format.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicCSVService_getFirstRow_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicCSVService_getFirstRow_result.prototype = {};
PublicCSVService_getFirstRow_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.success = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = input.readString();
          this.success.push(elem22);
        }
        input.readListEnd();
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

PublicCSVService_getFirstRow_result.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_getFirstRow_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter23 in this.success)
    {
      if (this.success.hasOwnProperty(iter23))
      {
        iter23 = this.success[iter23];
        output.writeString(iter23);
      }
    }
    output.writeListEnd();
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

var PublicCSVService_getFormatParameters_args = function(args) {
  this.ctx = null;
  this.vfsID = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.vfsID !== undefined && args.vfsID !== null) {
      this.vfsID = args.vfsID;
    }
  }
};
PublicCSVService_getFormatParameters_args.prototype = {};
PublicCSVService_getFormatParameters_args.prototype.read = function(input) {
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
        this.vfsID = input.readString();
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

PublicCSVService_getFormatParameters_args.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_getFormatParameters_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.vfsID !== null && this.vfsID !== undefined) {
    output.writeFieldBegin('vfsID', Thrift.Type.STRING, 2);
    output.writeString(this.vfsID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicCSVService_getFormatParameters_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.FileFormatParameters(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicCSVService_getFormatParameters_result.prototype = {};
PublicCSVService_getFormatParameters_result.prototype.read = function(input) {
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
        this.success = new ttypes.FileFormatParameters();
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

PublicCSVService_getFormatParameters_result.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_getFormatParameters_result');
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

var PublicCSVService_setFormatParameters_args = function(args) {
  this.ctx = null;
  this.vfsID = null;
  this.format = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.vfsID !== undefined && args.vfsID !== null) {
      this.vfsID = args.vfsID;
    }
    if (args.format !== undefined && args.format !== null) {
      this.format = new ttypes.FileFormat(args.format);
    }
  }
};
PublicCSVService_setFormatParameters_args.prototype = {};
PublicCSVService_setFormatParameters_args.prototype.read = function(input) {
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
        this.vfsID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.format = new ttypes.FileFormat();
        this.format.read(input);
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

PublicCSVService_setFormatParameters_args.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_setFormatParameters_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.vfsID !== null && this.vfsID !== undefined) {
    output.writeFieldBegin('vfsID', Thrift.Type.STRING, 2);
    output.writeString(this.vfsID);
    output.writeFieldEnd();
  }
  if (this.format !== null && this.format !== undefined) {
    output.writeFieldBegin('format', Thrift.Type.STRUCT, 3);
    this.format.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicCSVService_setFormatParameters_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new vfs_ttypes.Object(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicCSVService_setFormatParameters_result.prototype = {};
PublicCSVService_setFormatParameters_result.prototype.read = function(input) {
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
        this.success = new vfs_ttypes.Object();
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

PublicCSVService_setFormatParameters_result.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_setFormatParameters_result');
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

var PublicCSVService_detectFormatParameters_args = function(args) {
  this.ctx = null;
  this.vfsID = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.vfsID !== undefined && args.vfsID !== null) {
      this.vfsID = args.vfsID;
    }
  }
};
PublicCSVService_detectFormatParameters_args.prototype = {};
PublicCSVService_detectFormatParameters_args.prototype.read = function(input) {
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
        this.vfsID = input.readString();
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

PublicCSVService_detectFormatParameters_args.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_detectFormatParameters_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.vfsID !== null && this.vfsID !== undefined) {
    output.writeFieldBegin('vfsID', Thrift.Type.STRING, 2);
    output.writeString(this.vfsID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicCSVService_detectFormatParameters_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.FileFormatParameters(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicCSVService_detectFormatParameters_result.prototype = {};
PublicCSVService_detectFormatParameters_result.prototype.read = function(input) {
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
        this.success = new ttypes.FileFormatParameters();
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

PublicCSVService_detectFormatParameters_result.prototype.write = function(output) {
  output.writeStructBegin('PublicCSVService_detectFormatParameters_result');
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

var PublicCSVServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(PublicCSVServiceClient, BaseServiceClient);
PublicCSVServiceClient.prototype.seqid = function() { return this._seqid; };
PublicCSVServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
PublicCSVServiceClient.prototype.getFirstRow = function(ctx, vfsID, format, callback) {
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
    this.send_getFirstRow(ctx, vfsID, format);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getFirstRow(ctx, vfsID, format);
  }
};

PublicCSVServiceClient.prototype.send_getFirstRow = function(ctx, vfsID, format) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFirstRow', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicCSVService_getFirstRow_args();
  args.ctx = ctx;
  args.vfsID = vfsID;
  args.format = format;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicCSVServiceClient.prototype.recv_getFirstRow = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicCSVService_getFirstRow_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFirstRow failed: unknown result');
};
PublicCSVServiceClient.prototype.getFormatParameters = function(ctx, vfsID, callback) {
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
    this.send_getFormatParameters(ctx, vfsID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getFormatParameters(ctx, vfsID);
  }
};

PublicCSVServiceClient.prototype.send_getFormatParameters = function(ctx, vfsID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getFormatParameters', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicCSVService_getFormatParameters_args();
  args.ctx = ctx;
  args.vfsID = vfsID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicCSVServiceClient.prototype.recv_getFormatParameters = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicCSVService_getFormatParameters_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getFormatParameters failed: unknown result');
};
PublicCSVServiceClient.prototype.setFormatParameters = function(ctx, vfsID, format, callback) {
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
    this.send_setFormatParameters(ctx, vfsID, format);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setFormatParameters(ctx, vfsID, format);
  }
};

PublicCSVServiceClient.prototype.send_setFormatParameters = function(ctx, vfsID, format) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('setFormatParameters', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicCSVService_setFormatParameters_args();
  args.ctx = ctx;
  args.vfsID = vfsID;
  args.format = format;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicCSVServiceClient.prototype.recv_setFormatParameters = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicCSVService_setFormatParameters_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('setFormatParameters failed: unknown result');
};
PublicCSVServiceClient.prototype.detectFormatParameters = function(ctx, vfsID, callback) {
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
    this.send_detectFormatParameters(ctx, vfsID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_detectFormatParameters(ctx, vfsID);
  }
};

PublicCSVServiceClient.prototype.send_detectFormatParameters = function(ctx, vfsID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('detectFormatParameters', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicCSVService_detectFormatParameters_args();
  args.ctx = ctx;
  args.vfsID = vfsID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicCSVServiceClient.prototype.recv_detectFormatParameters = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicCSVService_detectFormatParameters_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('detectFormatParameters failed: unknown result');
};
var PublicCSVServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(PublicCSVServiceProcessor, BaseServiceProcessor);
PublicCSVServiceProcessor.prototype.process = function(input, output) {
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
PublicCSVServiceProcessor.prototype.process_getFirstRow = function(seqid, input, output) {
  var args = new PublicCSVService_getFirstRow_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getFirstRow.length === 3) {
    Q.fcall(this._handler.getFirstRow, args.ctx, args.vfsID, args.format)
      .then(function(result) {
        var result_obj = new PublicCSVService_getFirstRow_result({success: result});
        output.writeMessageBegin("getFirstRow", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicCSVService_getFirstRow_result(err);
          output.writeMessageBegin("getFirstRow", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFirstRow", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getFirstRow(args.ctx, args.vfsID, args.format, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicCSVService_getFirstRow_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getFirstRow", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFirstRow", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicCSVServiceProcessor.prototype.process_getFormatParameters = function(seqid, input, output) {
  var args = new PublicCSVService_getFormatParameters_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getFormatParameters.length === 2) {
    Q.fcall(this._handler.getFormatParameters, args.ctx, args.vfsID)
      .then(function(result) {
        var result_obj = new PublicCSVService_getFormatParameters_result({success: result});
        output.writeMessageBegin("getFormatParameters", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicCSVService_getFormatParameters_result(err);
          output.writeMessageBegin("getFormatParameters", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getFormatParameters(args.ctx, args.vfsID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicCSVService_getFormatParameters_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getFormatParameters", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicCSVServiceProcessor.prototype.process_setFormatParameters = function(seqid, input, output) {
  var args = new PublicCSVService_setFormatParameters_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setFormatParameters.length === 3) {
    Q.fcall(this._handler.setFormatParameters, args.ctx, args.vfsID, args.format)
      .then(function(result) {
        var result_obj = new PublicCSVService_setFormatParameters_result({success: result});
        output.writeMessageBegin("setFormatParameters", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicCSVService_setFormatParameters_result(err);
          output.writeMessageBegin("setFormatParameters", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("setFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.setFormatParameters(args.ctx, args.vfsID, args.format, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicCSVService_setFormatParameters_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setFormatParameters", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicCSVServiceProcessor.prototype.process_detectFormatParameters = function(seqid, input, output) {
  var args = new PublicCSVService_detectFormatParameters_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.detectFormatParameters.length === 2) {
    Q.fcall(this._handler.detectFormatParameters, args.ctx, args.vfsID)
      .then(function(result) {
        var result_obj = new PublicCSVService_detectFormatParameters_result({success: result});
        output.writeMessageBegin("detectFormatParameters", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicCSVService_detectFormatParameters_result(err);
          output.writeMessageBegin("detectFormatParameters", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("detectFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.detectFormatParameters(args.ctx, args.vfsID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicCSVService_detectFormatParameters_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("detectFormatParameters", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("detectFormatParameters", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
