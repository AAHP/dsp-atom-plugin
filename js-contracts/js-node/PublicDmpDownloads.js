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
var ttypes = require('./downloads_types');
//HELPER FUNCTIONS AND STRUCTURES

var PublicDmpDownloads_enableDownloads_args = function(args) {
  this.ctx = null;
  this.ID = null;
  this.password = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
PublicDmpDownloads_enableDownloads_args.prototype = {};
PublicDmpDownloads_enableDownloads_args.prototype.read = function(input) {
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
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.password = input.readString();
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

PublicDmpDownloads_enableDownloads_args.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_enableDownloads_args');
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
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 3);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicDmpDownloads_enableDownloads_result = function(args) {
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
PublicDmpDownloads_enableDownloads_result.prototype = {};
PublicDmpDownloads_enableDownloads_result.prototype.read = function(input) {
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

PublicDmpDownloads_enableDownloads_result.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_enableDownloads_result');
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

var PublicDmpDownloads_disableDownloads_args = function(args) {
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
PublicDmpDownloads_disableDownloads_args.prototype = {};
PublicDmpDownloads_disableDownloads_args.prototype.read = function(input) {
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

PublicDmpDownloads_disableDownloads_args.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_disableDownloads_args');
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

var PublicDmpDownloads_disableDownloads_result = function(args) {
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
PublicDmpDownloads_disableDownloads_result.prototype = {};
PublicDmpDownloads_disableDownloads_result.prototype.read = function(input) {
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

PublicDmpDownloads_disableDownloads_result.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_disableDownloads_result');
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

var PublicDmpDownloads_listDownloads_args = function(args) {
  this.ctx = null;
  this.paginator = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.paginator !== undefined && args.paginator !== null) {
      this.paginator = new common_ttypes.PageParams(args.paginator);
    }
  }
};
PublicDmpDownloads_listDownloads_args.prototype = {};
PublicDmpDownloads_listDownloads_args.prototype.read = function(input) {
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
        this.paginator = new common_ttypes.PageParams();
        this.paginator.read(input);
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

PublicDmpDownloads_listDownloads_args.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_listDownloads_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.paginator !== null && this.paginator !== undefined) {
    output.writeFieldBegin('paginator', Thrift.Type.STRUCT, 2);
    this.paginator.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicDmpDownloads_listDownloads_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new vfs_ttypes.ObjectsCollection(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicDmpDownloads_listDownloads_result.prototype = {};
PublicDmpDownloads_listDownloads_result.prototype.read = function(input) {
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
        this.success = new vfs_ttypes.ObjectsCollection();
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

PublicDmpDownloads_listDownloads_result.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpDownloads_listDownloads_result');
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

var PublicDmpDownloadsClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(PublicDmpDownloadsClient, BaseServiceClient);
PublicDmpDownloadsClient.prototype.seqid = function() { return this._seqid; };
PublicDmpDownloadsClient.prototype.new_seqid = function() { return this._seqid += 1; };
PublicDmpDownloadsClient.prototype.enableDownloads = function(ctx, ID, password, callback) {
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
    this.send_enableDownloads(ctx, ID, password);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_enableDownloads(ctx, ID, password);
  }
};

PublicDmpDownloadsClient.prototype.send_enableDownloads = function(ctx, ID, password) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('enableDownloads', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicDmpDownloads_enableDownloads_args();
  args.ctx = ctx;
  args.ID = ID;
  args.password = password;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicDmpDownloadsClient.prototype.recv_enableDownloads = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicDmpDownloads_enableDownloads_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('enableDownloads failed: unknown result');
};
PublicDmpDownloadsClient.prototype.disableDownloads = function(ctx, ID, callback) {
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
    this.send_disableDownloads(ctx, ID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_disableDownloads(ctx, ID);
  }
};

PublicDmpDownloadsClient.prototype.send_disableDownloads = function(ctx, ID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('disableDownloads', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicDmpDownloads_disableDownloads_args();
  args.ctx = ctx;
  args.ID = ID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicDmpDownloadsClient.prototype.recv_disableDownloads = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicDmpDownloads_disableDownloads_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('disableDownloads failed: unknown result');
};
PublicDmpDownloadsClient.prototype.listDownloads = function(ctx, paginator, callback) {
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
    this.send_listDownloads(ctx, paginator);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listDownloads(ctx, paginator);
  }
};

PublicDmpDownloadsClient.prototype.send_listDownloads = function(ctx, paginator) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('listDownloads', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicDmpDownloads_listDownloads_args();
  args.ctx = ctx;
  args.paginator = paginator;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicDmpDownloadsClient.prototype.recv_listDownloads = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicDmpDownloads_listDownloads_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listDownloads failed: unknown result');
};
var PublicDmpDownloadsProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(PublicDmpDownloadsProcessor, BaseServiceProcessor);
PublicDmpDownloadsProcessor.prototype.process = function(input, output) {
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
PublicDmpDownloadsProcessor.prototype.process_enableDownloads = function(seqid, input, output) {
  var args = new PublicDmpDownloads_enableDownloads_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.enableDownloads.length === 3) {
    Q.fcall(this._handler.enableDownloads, args.ctx, args.ID, args.password)
      .then(function(result) {
        var result_obj = new PublicDmpDownloads_enableDownloads_result({success: result});
        output.writeMessageBegin("enableDownloads", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicDmpDownloads_enableDownloads_result(err);
          output.writeMessageBegin("enableDownloads", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("enableDownloads", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.enableDownloads(args.ctx, args.ID, args.password, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicDmpDownloads_enableDownloads_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("enableDownloads", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("enableDownloads", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicDmpDownloadsProcessor.prototype.process_disableDownloads = function(seqid, input, output) {
  var args = new PublicDmpDownloads_disableDownloads_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.disableDownloads.length === 2) {
    Q.fcall(this._handler.disableDownloads, args.ctx, args.ID)
      .then(function(result) {
        var result_obj = new PublicDmpDownloads_disableDownloads_result({success: result});
        output.writeMessageBegin("disableDownloads", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicDmpDownloads_disableDownloads_result(err);
          output.writeMessageBegin("disableDownloads", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("disableDownloads", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.disableDownloads(args.ctx, args.ID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicDmpDownloads_disableDownloads_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("disableDownloads", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("disableDownloads", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicDmpDownloadsProcessor.prototype.process_listDownloads = function(seqid, input, output) {
  var args = new PublicDmpDownloads_listDownloads_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listDownloads.length === 2) {
    Q.fcall(this._handler.listDownloads, args.ctx, args.paginator)
      .then(function(result) {
        var result_obj = new PublicDmpDownloads_listDownloads_result({success: result});
        output.writeMessageBegin("listDownloads", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicDmpDownloads_listDownloads_result(err);
          output.writeMessageBegin("listDownloads", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("listDownloads", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.listDownloads(args.ctx, args.paginator, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicDmpDownloads_listDownloads_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listDownloads", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listDownloads", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
