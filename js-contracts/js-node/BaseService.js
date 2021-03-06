//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./common_types');
//HELPER FUNCTIONS AND STRUCTURES

var BaseService_ping_args = function(args) {
};
BaseService_ping_args.prototype = {};
BaseService_ping_args.prototype.read = function(input) {
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
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  };

BaseService_ping_args.prototype.write = function(output) {
    output.writeStructBegin('BaseService_ping_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  };

var BaseService_ping_result = function(args) {
};
BaseService_ping_result.prototype = {};
BaseService_ping_result.prototype.read = function(input) {
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
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  };

BaseService_ping_result.prototype.write = function(output) {
    output.writeStructBegin('BaseService_ping_result');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  };

var BaseService_getVersion_args = function(args) {
};
BaseService_getVersion_args.prototype = {};
BaseService_getVersion_args.prototype.read = function(input) {
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
      input.skip(ftype);
      input.readFieldEnd();
    }
    input.readStructEnd();
    return;
  };

BaseService_getVersion_args.prototype.write = function(output) {
    output.writeStructBegin('BaseService_getVersion_args');
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  };

var BaseService_getVersion_result = function(args) {
    this.success = null;
    if (args) {
        if (args.success !== undefined && args.success !== null) {
            this.success = Thrift.copyMap(args.success, [null]);
        }
    }
};
BaseService_getVersion_result.prototype = {};
BaseService_getVersion_result.prototype.read = function(input) {
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
          var _size46 = 0;
          var _rtmp350;
          this.success = {};
          var _ktype47 = 0;
          var _vtype48 = 0;
          _rtmp350 = input.readMapBegin();
          _ktype47 = _rtmp350.ktype;
          _vtype48 = _rtmp350.vtype;
          _size46 = _rtmp350.size;
          for (var _i51 = 0; _i51 < _size46; ++_i51)
          {
            var key52 = null;
            var val53 = null;
            key52 = input.readString();
            val53 = input.readString();
            this.success[key52] = val53;
          }
          input.readMapEnd();
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

BaseService_getVersion_result.prototype.write = function(output) {
    output.writeStructBegin('BaseService_getVersion_result');
    if (this.success !== null && this.success !== undefined) {
      output.writeFieldBegin('success', Thrift.Type.MAP, 0);
      output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.success));
      for (var kiter54 in this.success)
      {
        if (this.success.hasOwnProperty(kiter54))
        {
          var viter55 = this.success[kiter54];
          output.writeString(kiter54);
          output.writeString(viter55);
        }
      }
      output.writeMapEnd();
      output.writeFieldEnd();
    }
    output.writeFieldStop();
    output.writeStructEnd();
    return;
  };

var BaseServiceClient = exports.Client = function(output, pClass) {
      this.output = output;
      this.pClass = pClass;
      this._seqid = 0;
      this._reqs = {};
  };
  BaseServiceClient.prototype = {};
  BaseServiceClient.prototype.seqid = function() { return this._seqid; };
BaseServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };
BaseServiceClient.prototype.ping = function(callback) {
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
      this.send_ping();
      return _defer.promise;
    } else {
      this._reqs[this.seqid()] = callback;
      this.send_ping();
    }
};

BaseServiceClient.prototype.send_ping = function() {
    var output = new this.pClass(this.output);
    output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid());
    var args = new BaseService_ping_args();
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
};

BaseServiceClient.prototype.recv_ping = function(input,mtype,rseqid) {
    var callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      var x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    var result = new BaseService_ping_result();
    result.read(input);
    input.readMessageEnd();

    callback(null);
};
BaseServiceClient.prototype.getVersion = function(callback) {
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
      this.send_getVersion();
      return _defer.promise;
    } else {
      this._reqs[this.seqid()] = callback;
      this.send_getVersion();
    }
};

BaseServiceClient.prototype.send_getVersion = function() {
    var output = new this.pClass(this.output);
    output.writeMessageBegin('getVersion', Thrift.MessageType.CALL, this.seqid());
    var args = new BaseService_getVersion_args();
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
};

BaseServiceClient.prototype.recv_getVersion = function(input,mtype,rseqid) {
    var callback = this._reqs[rseqid] || function() {};
    delete this._reqs[rseqid];
    if (mtype == Thrift.MessageType.EXCEPTION) {
      var x = new Thrift.TApplicationException();
      x.read(input);
      input.readMessageEnd();
      return callback(x);
    }
    var result = new BaseService_getVersion_result();
    result.read(input);
    input.readMessageEnd();

    if (null !== result.success) {
      return callback(null, result.success);
    }
    return callback('getVersion failed: unknown result');
};
var BaseServiceProcessor = exports.Processor = function(handler)   {
    this._handler = handler;
  }
;
  BaseServiceProcessor.prototype.process = function(input, output)   {
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
  BaseServiceProcessor.prototype.process_ping = function(seqid, input, output)   {
    var args = new BaseService_ping_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.ping.length === 0) {
      Q.fcall(this._handler.ping)
        .then(function(result) {
          var result_obj = new BaseService_ping_result({success: result});
          output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }, function (err) {
          var result;
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
          result.write(output);
          output.writeMessageEnd();
          output.flush();
        });
    } else {
      this._handler.ping(function (err, result) {
        var result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new BaseService_ping_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  };
  BaseServiceProcessor.prototype.process_getVersion = function(seqid, input, output)   {
    var args = new BaseService_getVersion_args();
    args.read(input);
    input.readMessageEnd();
    if (this._handler.getVersion.length === 0) {
      Q.fcall(this._handler.getVersion)
        .then(function(result) {
          var result_obj = new BaseService_getVersion_result({success: result});
          output.writeMessageBegin("getVersion", Thrift.MessageType.REPLY, seqid);
          result_obj.write(output);
          output.writeMessageEnd();
          output.flush();
        }, function (err) {
          var result;
          result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getVersion", Thrift.MessageType.EXCEPTION, seqid);
          result.write(output);
          output.writeMessageEnd();
          output.flush();
        });
    } else {
      this._handler.getVersion(function (err, result) {
        var result_obj;
        if ((err === null || typeof err === 'undefined')) {
          result_obj = new BaseService_getVersion_result((err !== null || typeof err === 'undefined') ? err : {success: result});
          output.writeMessageBegin("getVersion", Thrift.MessageType.REPLY, seqid);
        } else {
          result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
          output.writeMessageBegin("getVersion", Thrift.MessageType.EXCEPTION, seqid);
        }
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      });
    }
  };
