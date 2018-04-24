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
var connectors_ttypes = require('./connectors_types');


var BaseService = require('./BaseService');
var BaseServiceClient = BaseService.Client;
var BaseServiceProcessor = BaseService.Processor;
var ttypes = require('./connector-mssql_types');
//HELPER FUNCTIONS AND STRUCTURES

var PublicDmpMssqlConnector_listTables_args = function(args) {
  this.ctx = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
  }
};
PublicDmpMssqlConnector_listTables_args.prototype = {};
PublicDmpMssqlConnector_listTables_args.prototype.read = function(input) {
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

PublicDmpMssqlConnector_listTables_args.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpMssqlConnector_listTables_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicDmpMssqlConnector_listTables_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [connectors_ttypes.SqlTableInfo]);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicDmpMssqlConnector_listTables_result.prototype = {};
PublicDmpMssqlConnector_listTables_result.prototype.read = function(input) {
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
        var _size0 = 0;
        var _rtmp34;
        this.success = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new connectors_ttypes.SqlTableInfo();
          elem6.read(input);
          this.success.push(elem6);
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

PublicDmpMssqlConnector_listTables_result.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpMssqlConnector_listTables_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter7 in this.success)
    {
      if (this.success.hasOwnProperty(iter7))
      {
        iter7 = this.success[iter7];
        iter7.write(output);
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

var PublicDmpMssqlConnector_listSchemas_args = function(args) {
  this.ctx = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
  }
};
PublicDmpMssqlConnector_listSchemas_args.prototype = {};
PublicDmpMssqlConnector_listSchemas_args.prototype.read = function(input) {
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

PublicDmpMssqlConnector_listSchemas_args.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpMssqlConnector_listSchemas_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicDmpMssqlConnector_listSchemas_result = function(args) {
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
PublicDmpMssqlConnector_listSchemas_result.prototype = {};
PublicDmpMssqlConnector_listSchemas_result.prototype.read = function(input) {
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

PublicDmpMssqlConnector_listSchemas_result.prototype.write = function(output) {
  output.writeStructBegin('PublicDmpMssqlConnector_listSchemas_result');
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

var PublicDmpMssqlConnectorClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
Thrift.inherits(PublicDmpMssqlConnectorClient, BaseServiceClient);
PublicDmpMssqlConnectorClient.prototype.seqid = function() { return this._seqid; };
PublicDmpMssqlConnectorClient.prototype.new_seqid = function() { return this._seqid += 1; };
PublicDmpMssqlConnectorClient.prototype.listTables = function(ctx, callback) {
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
    this.send_listTables(ctx);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listTables(ctx);
  }
};

PublicDmpMssqlConnectorClient.prototype.send_listTables = function(ctx) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('listTables', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicDmpMssqlConnector_listTables_args();
  args.ctx = ctx;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicDmpMssqlConnectorClient.prototype.recv_listTables = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicDmpMssqlConnector_listTables_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listTables failed: unknown result');
};
PublicDmpMssqlConnectorClient.prototype.listSchemas = function(ctx, callback) {
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
    this.send_listSchemas(ctx);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_listSchemas(ctx);
  }
};

PublicDmpMssqlConnectorClient.prototype.send_listSchemas = function(ctx) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('listSchemas', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicDmpMssqlConnector_listSchemas_args();
  args.ctx = ctx;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicDmpMssqlConnectorClient.prototype.recv_listSchemas = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicDmpMssqlConnector_listSchemas_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('listSchemas failed: unknown result');
};
var PublicDmpMssqlConnectorProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
Thrift.inherits(PublicDmpMssqlConnectorProcessor, BaseServiceProcessor);
PublicDmpMssqlConnectorProcessor.prototype.process = function(input, output) {
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
PublicDmpMssqlConnectorProcessor.prototype.process_listTables = function(seqid, input, output) {
  var args = new PublicDmpMssqlConnector_listTables_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listTables.length === 1) {
    Q.fcall(this._handler.listTables, args.ctx)
      .then(function(result) {
        var result_obj = new PublicDmpMssqlConnector_listTables_result({success: result});
        output.writeMessageBegin("listTables", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicDmpMssqlConnector_listTables_result(err);
          output.writeMessageBegin("listTables", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("listTables", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.listTables(args.ctx, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicDmpMssqlConnector_listTables_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listTables", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listTables", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicDmpMssqlConnectorProcessor.prototype.process_listSchemas = function(seqid, input, output) {
  var args = new PublicDmpMssqlConnector_listSchemas_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.listSchemas.length === 1) {
    Q.fcall(this._handler.listSchemas, args.ctx)
      .then(function(result) {
        var result_obj = new PublicDmpMssqlConnector_listSchemas_result({success: result});
        output.writeMessageBegin("listSchemas", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicDmpMssqlConnector_listSchemas_result(err);
          output.writeMessageBegin("listSchemas", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("listSchemas", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.listSchemas(args.ctx, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicDmpMssqlConnector_listSchemas_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("listSchemas", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("listSchemas", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};