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


var BaseService = require('./BaseService');
var BaseServiceClient = BaseService.Client;
var BaseServiceProcessor = BaseService.Processor;
var ttypes = require('./token_types');
//HELPER FUNCTIONS AND STRUCTURES

var APITokenService_create_args = function(args) {
  this.ctx = null;
  this.name = null;
  this.expiresOn = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.expiresOn !== undefined && args.expiresOn !== null) {
      this.expiresOn = args.expiresOn;
    }
  }
};
APITokenService_create_args.prototype = {};
APITokenService_create_args.prototype.read = function(input) {
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
        this.name = input.readString();
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
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

APITokenService_create_args.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_create_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 2);
    output.writeString(this.name);
    output.writeFieldEnd();
  }
  if (this.expiresOn !== null && this.expiresOn !== undefined) {
    output.writeFieldBegin('expiresOn', Thrift.Type.STRING, 3);
    output.writeString(this.expiresOn);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenService_create_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.APIToken(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
APITokenService_create_result.prototype = {};
APITokenService_create_result.prototype.read = function(input) {
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
        this.success = new ttypes.APIToken();
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

APITokenService_create_result.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_create_result');
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

var APITokenService_revoke_args = function(args) {
  this.ctx = null;
  this.ID = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
  }
};
APITokenService_revoke_args.prototype = {};
APITokenService_revoke_args.prototype.read = function(input) {
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
        this.ID = input.readString();
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

APITokenService_revoke_args.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_revoke_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 2);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenService_revoke_result = function(args) {
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
APITokenService_revoke_result.prototype = {};
APITokenService_revoke_result.prototype.read = function(input) {
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

APITokenService_revoke_result.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_revoke_result');
  if (this.err !== null && this.err !== undefined) {
    output.writeFieldBegin('err', Thrift.Type.STRUCT, 1);
    this.err.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenService_get_args = function(args) {
  this.ctx = null;
  this.ID = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
  }
};
APITokenService_get_args.prototype = {};
APITokenService_get_args.prototype.read = function(input) {
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
        this.ID = input.readString();
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

APITokenService_get_args.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_get_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.ID !== null && this.ID !== undefined) {
    output.writeFieldBegin('ID', Thrift.Type.STRING, 2);
    output.writeString(this.ID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenService_get_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.APIToken(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
APITokenService_get_result.prototype = {};
APITokenService_get_result.prototype.read = function(input) {
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
        this.success = new ttypes.APIToken();
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

APITokenService_get_result.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_get_result');
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

var APITokenService_getTokens_args = function(args) {
  this.ctx = null;
  this.filter = null;
  this.pager = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.filter !== undefined && args.filter !== null) {
      this.filter = new ttypes.Filter(args.filter);
    }
    if (args.pager !== undefined && args.pager !== null) {
      this.pager = new common_ttypes.PageParams(args.pager);
    }
  }
};
APITokenService_getTokens_args.prototype = {};
APITokenService_getTokens_args.prototype.read = function(input) {
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
        this.filter = new ttypes.Filter();
        this.filter.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.pager = new common_ttypes.PageParams();
        this.pager.read(input);
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

APITokenService_getTokens_args.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_getTokens_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.filter !== null && this.filter !== undefined) {
    output.writeFieldBegin('filter', Thrift.Type.STRUCT, 2);
    this.filter.write(output);
    output.writeFieldEnd();
  }
  if (this.pager !== null && this.pager !== undefined) {
    output.writeFieldBegin('pager', Thrift.Type.STRUCT, 3);
    this.pager.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var APITokenService_getTokens_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.APITokenCollection(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
APITokenService_getTokens_result.prototype = {};
APITokenService_getTokens_result.prototype.read = function(input) {
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
        this.success = new ttypes.APITokenCollection();
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

APITokenService_getTokens_result.prototype.write = function(output) {
  output.writeStructBegin('APITokenService_getTokens_result');
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

var APITokenServiceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(APITokenServiceClient, BaseServiceClient);
APITokenServiceClient.prototype.seqid = function() { return this._seqid; };
APITokenServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
APITokenServiceClient.prototype.create = function(ctx, name, expiresOn, callback) {
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
    this.send_create(ctx, name, expiresOn);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_create(ctx, name, expiresOn);
  }
};

APITokenServiceClient.prototype.send_create = function(ctx, name, expiresOn) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('create', Thrift.MessageType.CALL, this.seqid());
  var args = new APITokenService_create_args();
  args.ctx = ctx;
  args.name = name;
  args.expiresOn = expiresOn;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APITokenServiceClient.prototype.recv_create = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new APITokenService_create_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('create failed: unknown result');
};
APITokenServiceClient.prototype.revoke = function(ctx, ID, callback) {
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
    this.send_revoke(ctx, ID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_revoke(ctx, ID);
  }
};

APITokenServiceClient.prototype.send_revoke = function(ctx, ID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('revoke', Thrift.MessageType.CALL, this.seqid());
  var args = new APITokenService_revoke_args();
  args.ctx = ctx;
  args.ID = ID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APITokenServiceClient.prototype.recv_revoke = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new APITokenService_revoke_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  callback(null);
};
APITokenServiceClient.prototype.get = function(ctx, ID, callback) {
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
    this.send_get(ctx, ID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_get(ctx, ID);
  }
};

APITokenServiceClient.prototype.send_get = function(ctx, ID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('get', Thrift.MessageType.CALL, this.seqid());
  var args = new APITokenService_get_args();
  args.ctx = ctx;
  args.ID = ID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APITokenServiceClient.prototype.recv_get = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new APITokenService_get_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('get failed: unknown result');
};
APITokenServiceClient.prototype.getTokens = function(ctx, filter, pager, callback) {
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
    this.send_getTokens(ctx, filter, pager);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getTokens(ctx, filter, pager);
  }
};

APITokenServiceClient.prototype.send_getTokens = function(ctx, filter, pager) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('getTokens', Thrift.MessageType.CALL, this.seqid());
  var args = new APITokenService_getTokens_args();
  args.ctx = ctx;
  args.filter = filter;
  args.pager = pager;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

APITokenServiceClient.prototype.recv_getTokens = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new APITokenService_getTokens_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getTokens failed: unknown result');
};
var APITokenServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(APITokenServiceProcessor, BaseServiceProcessor);
APITokenServiceProcessor.prototype.process = function(input, output) {
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
APITokenServiceProcessor.prototype.process_create = function(seqid, input, output) {
  var args = new APITokenService_create_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.create.length === 3) {
    Q.fcall(this._handler.create, args.ctx, args.name, args.expiresOn)
      .then(function(result) {
        var result_obj = new APITokenService_create_result({success: result});
        output.writeMessageBegin("create", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new APITokenService_create_result(err);
          output.writeMessageBegin("create", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("create", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.create(args.ctx, args.name, args.expiresOn, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new APITokenService_create_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("create", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("create", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APITokenServiceProcessor.prototype.process_revoke = function(seqid, input, output) {
  var args = new APITokenService_revoke_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.revoke.length === 2) {
    Q.fcall(this._handler.revoke, args.ctx, args.ID)
      .then(function(result) {
        var result_obj = new APITokenService_revoke_result({success: result});
        output.writeMessageBegin("revoke", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new APITokenService_revoke_result(err);
          output.writeMessageBegin("revoke", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("revoke", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.revoke(args.ctx, args.ID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new APITokenService_revoke_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("revoke", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("revoke", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APITokenServiceProcessor.prototype.process_get = function(seqid, input, output) {
  var args = new APITokenService_get_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.get.length === 2) {
    Q.fcall(this._handler.get, args.ctx, args.ID)
      .then(function(result) {
        var result_obj = new APITokenService_get_result({success: result});
        output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new APITokenService_get_result(err);
          output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("get", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.get(args.ctx, args.ID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new APITokenService_get_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("get", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("get", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
APITokenServiceProcessor.prototype.process_getTokens = function(seqid, input, output) {
  var args = new APITokenService_getTokens_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getTokens.length === 3) {
    Q.fcall(this._handler.getTokens, args.ctx, args.filter, args.pager)
      .then(function(result) {
        var result_obj = new APITokenService_getTokens_result({success: result});
        output.writeMessageBegin("getTokens", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new APITokenService_getTokens_result(err);
          output.writeMessageBegin("getTokens", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getTokens", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.getTokens(args.ctx, args.filter, args.pager, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new APITokenService_getTokens_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getTokens", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getTokens", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};