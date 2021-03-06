//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var mime_ttypes = require('./mime_types');
var common_ttypes = require('./common_types');


var BaseService = require('./BaseService');
var BaseServiceClient = BaseService.Client;
var BaseServiceProcessor = BaseService.Processor;
var ttypes = require('./compressor_types');
//HELPER FUNCTIONS AND STRUCTURES

var PublicCompressorService_listCompressedPaths_args = function(args) {
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
PublicCompressorService_listCompressedPaths_args.prototype = {};
PublicCompressorService_listCompressedPaths_args.prototype.read = function(input) {
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

PublicCompressorService_listCompressedPaths_args.prototype.write = function(output) {
  output.writeStructBegin('PublicCompressorService_listCompressedPaths_args');
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

var PublicCompressorService_listCompressedPaths_result = function(args) {
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
PublicCompressorService_listCompressedPaths_result.prototype = {};
PublicCompressorService_listCompressedPaths_result.prototype.read = function(input) {
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
        var _size8 = 0;
        var _rtmp312;
        this.success = [];
        var _etype11 = 0;
        _rtmp312 = input.readListBegin();
        _etype11 = _rtmp312.etype;
        _size8 = _rtmp312.size;
        for (var _i13 = 0; _i13 < _size8; ++_i13)
        {
          var elem14 = null;
          elem14 = input.readString();
          this.success.push(elem14);
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

PublicCompressorService_listCompressedPaths_result.prototype.write = function(output) {
  output.writeStructBegin('PublicCompressorService_listCompressedPaths_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        output.writeString(iter15);
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

var PublicCompressorServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(PublicCompressorServiceClient, BaseServiceClient);
PublicCompressorServiceClient.prototype.seqid = function() { return this._seqid; };
PublicCompressorServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
PublicCompressorServiceClient.prototype.listCompressedPaths = function(ctx, vfsID, callback) {
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
    this.send_listCompressedPaths(ctx, vfsID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listCompressedPaths(ctx, vfsID);
  }
};

PublicCompressorServiceClient.prototype.send_listCompressedPaths = function(ctx, vfsID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('listCompressedPaths', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicCompressorService_listCompressedPaths_args();
  args.ctx = ctx;
  args.vfsID = vfsID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicCompressorServiceClient.prototype.recv_listCompressedPaths = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicCompressorService_listCompressedPaths_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listCompressedPaths failed: unknown result');
};
var PublicCompressorServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(PublicCompressorServiceProcessor, BaseServiceProcessor);
PublicCompressorServiceProcessor.prototype.process = function(input, output) {
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
PublicCompressorServiceProcessor.prototype.process_listCompressedPaths = function(seqid, input, output) {
  var args = new PublicCompressorService_listCompressedPaths_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listCompressedPaths.length === 2) {
    Q.fcall(this._handler.listCompressedPaths, args.ctx, args.vfsID)
      .then(function(result) {
        var result_obj = new PublicCompressorService_listCompressedPaths_result({success: result});
        output.writeMessageBegin("listCompressedPaths", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicCompressorService_listCompressedPaths_result(err);
          output.writeMessageBegin("listCompressedPaths", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("listCompressedPaths", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.listCompressedPaths(args.ctx, args.vfsID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicCompressorService_listCompressedPaths_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listCompressedPaths", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listCompressedPaths", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
