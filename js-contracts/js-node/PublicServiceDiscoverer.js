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


var ttypes = require('./sd_types');
//HELPER FUNCTIONS AND STRUCTURES

var PublicServiceDiscoverer_query_args = function(args) {
  this.ctx = null;
  this.serviceName = null;
  this.tag = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.serviceName !== undefined && args.serviceName !== null) {
      this.serviceName = args.serviceName;
    }
    if (args.tag !== undefined && args.tag !== null) {
      this.tag = args.tag;
    }
  }
};
PublicServiceDiscoverer_query_args.prototype = {};
PublicServiceDiscoverer_query_args.prototype.read = function(input) {
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
        this.serviceName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.tag = input.readString();
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

PublicServiceDiscoverer_query_args.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_query_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.serviceName !== null && this.serviceName !== undefined) {
    output.writeFieldBegin('serviceName', Thrift.Type.STRING, 2);
    output.writeString(this.serviceName);
    output.writeFieldEnd();
  }
  if (this.tag !== null && this.tag !== undefined) {
    output.writeFieldBegin('tag', Thrift.Type.STRING, 3);
    output.writeString(this.tag);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicServiceDiscoverer_query_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.ServiceRecord]);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicServiceDiscoverer_query_result.prototype = {};
PublicServiceDiscoverer_query_result.prototype.read = function(input) {
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
          elem14 = new ttypes.ServiceRecord();
          elem14.read(input);
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

PublicServiceDiscoverer_query_result.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_query_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter15 in this.success)
    {
      if (this.success.hasOwnProperty(iter15))
      {
        iter15 = this.success[iter15];
        iter15.write(output);
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

var PublicServiceDiscoverer_queryMany_args = function(args) {
  this.ctx = null;
  this.serviceNames = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.serviceNames !== undefined && args.serviceNames !== null) {
      this.serviceNames = Thrift.copyList(args.serviceNames, [null]);
    }
  }
};
PublicServiceDiscoverer_queryMany_args.prototype = {};
PublicServiceDiscoverer_queryMany_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size16 = 0;
        var _rtmp320;
        this.serviceNames = [];
        var _etype19 = 0;
        _rtmp320 = input.readListBegin();
        _etype19 = _rtmp320.etype;
        _size16 = _rtmp320.size;
        for (var _i21 = 0; _i21 < _size16; ++_i21)
        {
          var elem22 = null;
          elem22 = input.readString();
          this.serviceNames.push(elem22);
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

PublicServiceDiscoverer_queryMany_args.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_queryMany_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.serviceNames !== null && this.serviceNames !== undefined) {
    output.writeFieldBegin('serviceNames', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.serviceNames.length);
    for (var iter23 in this.serviceNames)
    {
      if (this.serviceNames.hasOwnProperty(iter23))
      {
        iter23 = this.serviceNames[iter23];
        output.writeString(iter23);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicServiceDiscoverer_queryMany_result = function(args) {
  this.success = null;
  this.err = null;
  if (args instanceof common_ttypes.Error) {
    this.err = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyMap(args.success, [Thrift.copyList, ttypes.ServiceRecord]);
    }
    if (args.err !== undefined && args.err !== null) {
      this.err = args.err;
    }
  }
};
PublicServiceDiscoverer_queryMany_result.prototype = {};
PublicServiceDiscoverer_queryMany_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.MAP) {
        var _size24 = 0;
        var _rtmp328;
        this.success = {};
        var _ktype25 = 0;
        var _vtype26 = 0;
        _rtmp328 = input.readMapBegin();
        _ktype25 = _rtmp328.ktype;
        _vtype26 = _rtmp328.vtype;
        _size24 = _rtmp328.size;
        for (var _i29 = 0; _i29 < _size24; ++_i29)
        {
          var key30 = null;
          var val31 = null;
          key30 = input.readString();
          var _size32 = 0;
          var _rtmp336;
          val31 = [];
          var _etype35 = 0;
          _rtmp336 = input.readListBegin();
          _etype35 = _rtmp336.etype;
          _size32 = _rtmp336.size;
          for (var _i37 = 0; _i37 < _size32; ++_i37)
          {
            var elem38 = null;
            elem38 = new ttypes.ServiceRecord();
            elem38.read(input);
            val31.push(elem38);
          }
          input.readListEnd();
          this.success[key30] = val31;
        }
        input.readMapEnd();
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

PublicServiceDiscoverer_queryMany_result.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_queryMany_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.MAP, 0);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.LIST, Thrift.objectLength(this.success));
    for (var kiter39 in this.success)
    {
      if (this.success.hasOwnProperty(kiter39))
      {
        var viter40 = this.success[kiter39];
        output.writeString(kiter39);
        output.writeListBegin(Thrift.Type.STRUCT, viter40.length);
        for (var iter41 in viter40)
        {
          if (viter40.hasOwnProperty(iter41))
          {
            iter41 = viter40[iter41];
            iter41.write(output);
          }
        }
        output.writeListEnd();
      }
    }
    output.writeMapEnd();
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

var PublicServiceDiscoverer_services_args = function(args) {
  this.ctx = null;
  this.tags = null;
  if (args) {
    if (args.ctx !== undefined && args.ctx !== null) {
      this.ctx = new common_ttypes.Context(args.ctx);
    }
    if (args.tags !== undefined && args.tags !== null) {
      this.tags = Thrift.copyList(args.tags, [null]);
    }
  }
};
PublicServiceDiscoverer_services_args.prototype = {};
PublicServiceDiscoverer_services_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        var _size42 = 0;
        var _rtmp346;
        this.tags = [];
        var _etype45 = 0;
        _rtmp346 = input.readListBegin();
        _etype45 = _rtmp346.etype;
        _size42 = _rtmp346.size;
        for (var _i47 = 0; _i47 < _size42; ++_i47)
        {
          var elem48 = null;
          elem48 = input.readString();
          this.tags.push(elem48);
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

PublicServiceDiscoverer_services_args.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_services_args');
  if (this.ctx !== null && this.ctx !== undefined) {
    output.writeFieldBegin('ctx', Thrift.Type.STRUCT, 1);
    this.ctx.write(output);
    output.writeFieldEnd();
  }
  if (this.tags !== null && this.tags !== undefined) {
    output.writeFieldBegin('tags', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRING, this.tags.length);
    for (var iter49 in this.tags)
    {
      if (this.tags.hasOwnProperty(iter49))
      {
        iter49 = this.tags[iter49];
        output.writeString(iter49);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PublicServiceDiscoverer_services_result = function(args) {
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
PublicServiceDiscoverer_services_result.prototype = {};
PublicServiceDiscoverer_services_result.prototype.read = function(input) {
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
        var _size50 = 0;
        var _rtmp354;
        this.success = [];
        var _etype53 = 0;
        _rtmp354 = input.readListBegin();
        _etype53 = _rtmp354.etype;
        _size50 = _rtmp354.size;
        for (var _i55 = 0; _i55 < _size50; ++_i55)
        {
          var elem56 = null;
          elem56 = input.readString();
          this.success.push(elem56);
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

PublicServiceDiscoverer_services_result.prototype.write = function(output) {
  output.writeStructBegin('PublicServiceDiscoverer_services_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRING, this.success.length);
    for (var iter57 in this.success)
    {
      if (this.success.hasOwnProperty(iter57))
      {
        iter57 = this.success[iter57];
        output.writeString(iter57);
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

var PublicServiceDiscovererClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
PublicServiceDiscovererClient.prototype = {};
PublicServiceDiscovererClient.prototype.seqid = function() { return this._seqid; };
PublicServiceDiscovererClient.prototype.new_seqid = function() { return this._seqid += 1; };
PublicServiceDiscovererClient.prototype.query = function(ctx, serviceName, tag, callback) {
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
    this.send_query(ctx, serviceName, tag);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_query(ctx, serviceName, tag);
  }
};

PublicServiceDiscovererClient.prototype.send_query = function(ctx, serviceName, tag) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('query', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicServiceDiscoverer_query_args();
  args.ctx = ctx;
  args.serviceName = serviceName;
  args.tag = tag;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicServiceDiscovererClient.prototype.recv_query = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicServiceDiscoverer_query_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('query failed: unknown result');
};
PublicServiceDiscovererClient.prototype.queryMany = function(ctx, serviceNames, callback) {
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
    this.send_queryMany(ctx, serviceNames);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_queryMany(ctx, serviceNames);
  }
};

PublicServiceDiscovererClient.prototype.send_queryMany = function(ctx, serviceNames) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('queryMany', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicServiceDiscoverer_queryMany_args();
  args.ctx = ctx;
  args.serviceNames = serviceNames;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicServiceDiscovererClient.prototype.recv_queryMany = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicServiceDiscoverer_queryMany_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('queryMany failed: unknown result');
};
PublicServiceDiscovererClient.prototype.services = function(ctx, tags, callback) {
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
    this.send_services(ctx, tags);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_services(ctx, tags);
  }
};

PublicServiceDiscovererClient.prototype.send_services = function(ctx, tags) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('services', Thrift.MessageType.CALL, this.seqid());
  var args = new PublicServiceDiscoverer_services_args();
  args.ctx = ctx;
  args.tags = tags;
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

PublicServiceDiscovererClient.prototype.recv_services = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PublicServiceDiscoverer_services_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.err) {
    return callback(result.err);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('services failed: unknown result');
};
var PublicServiceDiscovererProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
PublicServiceDiscovererProcessor.prototype.process = function(input, output) {
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
PublicServiceDiscovererProcessor.prototype.process_query = function(seqid, input, output) {
  var args = new PublicServiceDiscoverer_query_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.query.length === 3) {
    Q.fcall(this._handler.query, args.ctx, args.serviceName, args.tag)
      .then(function(result) {
        var result_obj = new PublicServiceDiscoverer_query_result({success: result});
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicServiceDiscoverer_query_result(err);
          output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("query", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.query(args.ctx, args.serviceName, args.tag, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicServiceDiscoverer_query_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("query", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("query", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicServiceDiscovererProcessor.prototype.process_queryMany = function(seqid, input, output) {
  var args = new PublicServiceDiscoverer_queryMany_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.queryMany.length === 2) {
    Q.fcall(this._handler.queryMany, args.ctx, args.serviceNames)
      .then(function(result) {
        var result_obj = new PublicServiceDiscoverer_queryMany_result({success: result});
        output.writeMessageBegin("queryMany", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicServiceDiscoverer_queryMany_result(err);
          output.writeMessageBegin("queryMany", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("queryMany", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.queryMany(args.ctx, args.serviceNames, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicServiceDiscoverer_queryMany_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("queryMany", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("queryMany", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PublicServiceDiscovererProcessor.prototype.process_services = function(seqid, input, output) {
  var args = new PublicServiceDiscoverer_services_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.services.length === 2) {
    Q.fcall(this._handler.services, args.ctx, args.tags)
      .then(function(result) {
        var result_obj = new PublicServiceDiscoverer_services_result({success: result});
        output.writeMessageBegin("services", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        if (err instanceof common_ttypes.Error) {
          result = new PublicServiceDiscoverer_services_result(err);
          output.writeMessageBegin("services", Thrift.MessageType.REPLY, seqid);
        } else {
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("services", Thrift.MessageType.EXCEPTION, seqid);
        }
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.services(args.ctx, args.tags, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof common_ttypes.Error) {
        result_obj = new PublicServiceDiscoverer_services_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("services", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("services", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
