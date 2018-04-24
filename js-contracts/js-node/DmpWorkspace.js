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


var PublicDmpWorkspace = require('./PublicDmpWorkspace');
var PublicDmpWorkspaceClient = PublicDmpWorkspace.Client;
var PublicDmpWorkspaceProcessor = PublicDmpWorkspace.Processor;
var ttypes = require('./workspace_types');
//HELPER FUNCTIONS AND STRUCTURES

var DmpWorkspace_updateFile_args = function(args) {
  this.ctx = null;
  this.ID = null;
  this.status = null;
  this.properties = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.ID !== undefined && args.ID !== null) {
      this.ID = args.ID;
    }
    if (args.status !== undefined && args.status !== null) {
      this.status = args.status;
    }
    if (args.properties !== undefined && args.properties !== null) {
      this.properties = new vfs_ttypes.FileProperties(args.properties);
    }
  }
};
DmpWorkspace_updateFile_args.prototype = {};
DmpWorkspace_updateFile_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BYTE) {
        this.status = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.properties = new vfs_ttypes.FileProperties();
        this.properties.read(input);
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

DmpWorkspace_updateFile_args.prototype.write = function(output) {
  output.writeStructBegin('DmpWorkspace_updateFile_args');
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
  if (this.status !== null && this.status !== undefined) {
    output.writeFieldBegin('status', Thrift.Type.BYTE, 3);
    output.writeByte(this.status);
    output.writeFieldEnd();
  }
  if (this.properties !== null && this.properties !== undefined) {
    output.writeFieldBegin('properties', Thrift.Type.STRUCT, 4);
    this.properties.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var DmpWorkspace_updateFile_result = function(args) {
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
DmpWorkspace_updateFile_result.prototype = {};
DmpWorkspace_updateFile_result.prototype.read = function(input) {
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

DmpWorkspace_updateFile_result.prototype.write = function(output) {
  output.writeStructBegin('DmpWorkspace_updateFile_result');
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

var DmpWorkspace_listAllNestedObjects_args = function(args) {
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
DmpWorkspace_listAllNestedObjects_args.prototype = {};
DmpWorkspace_listAllNestedObjects_args.prototype.read = function(input) {
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

DmpWorkspace_listAllNestedObjects_args.prototype.write = function(output) {
  output.writeStructBegin('DmpWorkspace_listAllNestedObjects_args');
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

var DmpWorkspace_listAllNestedObjects_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new vfs_ttypes.ObjectsNestedCollection(args.success);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
DmpWorkspace_listAllNestedObjects_result.prototype = {};
DmpWorkspace_listAllNestedObjects_result.prototype.read = function(input) {
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
        this.success = new vfs_ttypes.ObjectsNestedCollection();
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

DmpWorkspace_listAllNestedObjects_result.prototype.write = function(output) {
  output.writeStructBegin('DmpWorkspace_listAllNestedObjects_result');
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

var DmpWorkspaceClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(DmpWorkspaceClient, PublicDmpWorkspaceClient);
DmpWorkspaceClient.prototype.seqid = function() { return this._seqid; };
DmpWorkspaceClient.prototype.new_seqid = function() { return this._seqid += 1; };
DmpWorkspaceClient.prototype.updateFile = function(ctx, ID, status, properties, callback) {
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
    this.send_updateFile(ctx, ID, status, properties);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_updateFile(ctx, ID, status, properties);
  }
};

DmpWorkspaceClient.prototype.send_updateFile = function(ctx, ID, status, properties) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('updateFile', Thrift.MessageType.CALL, this.seqid());
  var args = new DmpWorkspace_updateFile_args();
  args.ctx = ctx;
  args.ID = ID;
  args.status = status;
  args.properties = properties;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

DmpWorkspaceClient.prototype.recv_updateFile = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DmpWorkspace_updateFile_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('updateFile failed: unknown result');
};
DmpWorkspaceClient.prototype.listAllNestedObjects = function(ctx, ID, callback) {
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
    this.send_listAllNestedObjects(ctx, ID);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listAllNestedObjects(ctx, ID);
  }
};

DmpWorkspaceClient.prototype.send_listAllNestedObjects = function(ctx, ID) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('listAllNestedObjects', Thrift.MessageType.CALL, this.seqid());
  var args = new DmpWorkspace_listAllNestedObjects_args();
  args.ctx = ctx;
  args.ID = ID;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

DmpWorkspaceClient.prototype.recv_listAllNestedObjects = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new DmpWorkspace_listAllNestedObjects_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listAllNestedObjects failed: unknown result');
};
var DmpWorkspaceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(DmpWorkspaceProcessor, PublicDmpWorkspaceProcessor);
DmpWorkspaceProcessor.prototype.process = function(input, output) {
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
DmpWorkspaceProcessor.prototype.process_updateFile = function(seqid, input, output) {
  var args = new DmpWorkspace_updateFile_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.updateFile.length === 4) {
    Q.fcall(this._handler.updateFile, args.ctx, args.ID, args.status, args.properties)
      .then(function(result) {
        var result_obj = new DmpWorkspace_updateFile_result({success: result});
        output.writeMessageBegin("updateFile", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new DmpWorkspace_updateFile_result(err);
          output.writeMessageBegin("updateFile", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("updateFile", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.updateFile(args.ctx, args.ID, args.status, args.properties, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new DmpWorkspace_updateFile_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("updateFile", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("updateFile", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
DmpWorkspaceProcessor.prototype.process_listAllNestedObjects = function(seqid, input, output) {
  var args = new DmpWorkspace_listAllNestedObjects_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listAllNestedObjects.length === 2) {
    Q.fcall(this._handler.listAllNestedObjects, args.ctx, args.ID)
      .then(function(result) {
        var result_obj = new DmpWorkspace_listAllNestedObjects_result({success: result});
        output.writeMessageBegin("listAllNestedObjects", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new DmpWorkspace_listAllNestedObjects_result(err);
          output.writeMessageBegin("listAllNestedObjects", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("listAllNestedObjects", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.listAllNestedObjects(args.ctx, args.ID, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new DmpWorkspace_listAllNestedObjects_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listAllNestedObjects", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listAllNestedObjects", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};