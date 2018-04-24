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


var ttypes = module.exports = {};
var FileFormat = module.exports.FileFormat = function(args) {
  this.delimeterChar = null;
  this.delimeterTab = null;
  this.quoteChar = null;
  this.quoteStyle = null;
  this.doubleQuote = null;
  this.escapeChar = null;
  this.maxFieldSize = null;
  this.encoding = null;
  this.skipInitialSpace = null;
  this.hasHeader = null;
  if (args) {
    if (args.delimeterChar !== undefined && args.delimeterChar !== null) {
      this.delimeterChar = args.delimeterChar;
    }
    if (args.delimeterTab !== undefined && args.delimeterTab !== null) {
      this.delimeterTab = args.delimeterTab;
    }
    if (args.quoteChar !== undefined && args.quoteChar !== null) {
      this.quoteChar = args.quoteChar;
    }
    if (args.quoteStyle !== undefined && args.quoteStyle !== null) {
      this.quoteStyle = args.quoteStyle;
    }
    if (args.doubleQuote !== undefined && args.doubleQuote !== null) {
      this.doubleQuote = args.doubleQuote;
    }
    if (args.escapeChar !== undefined && args.escapeChar !== null) {
      this.escapeChar = args.escapeChar;
    }
    if (args.maxFieldSize !== undefined && args.maxFieldSize !== null) {
      this.maxFieldSize = args.maxFieldSize;
    }
    if (args.encoding !== undefined && args.encoding !== null) {
      this.encoding = args.encoding;
    }
    if (args.skipInitialSpace !== undefined && args.skipInitialSpace !== null) {
      this.skipInitialSpace = args.skipInitialSpace;
    }
    if (args.hasHeader !== undefined && args.hasHeader !== null) {
      this.hasHeader = args.hasHeader;
    }
  }
};
FileFormat.prototype = {};
FileFormat.prototype.read = function(input) {
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
        this.delimeterChar = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BOOL) {
        this.delimeterTab = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.quoteChar = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BYTE) {
        this.quoteStyle = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BOOL) {
        this.doubleQuote = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.escapeChar = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.maxFieldSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.STRING) {
        this.encoding = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BOOL) {
        this.skipInitialSpace = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.hasHeader = input.readBool();
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

FileFormat.prototype.write = function(output) {
  output.writeStructBegin('FileFormat');
  if (this.delimeterChar !== null && this.delimeterChar !== undefined) {
    output.writeFieldBegin('delimeterChar', Thrift.Type.STRING, 1);
    output.writeString(this.delimeterChar);
    output.writeFieldEnd();
  }
  if (this.delimeterTab !== null && this.delimeterTab !== undefined) {
    output.writeFieldBegin('delimeterTab', Thrift.Type.BOOL, 2);
    output.writeBool(this.delimeterTab);
    output.writeFieldEnd();
  }
  if (this.quoteChar !== null && this.quoteChar !== undefined) {
    output.writeFieldBegin('quoteChar', Thrift.Type.STRING, 3);
    output.writeString(this.quoteChar);
    output.writeFieldEnd();
  }
  if (this.quoteStyle !== null && this.quoteStyle !== undefined) {
    output.writeFieldBegin('quoteStyle', Thrift.Type.BYTE, 4);
    output.writeByte(this.quoteStyle);
    output.writeFieldEnd();
  }
  if (this.doubleQuote !== null && this.doubleQuote !== undefined) {
    output.writeFieldBegin('doubleQuote', Thrift.Type.BOOL, 5);
    output.writeBool(this.doubleQuote);
    output.writeFieldEnd();
  }
  if (this.escapeChar !== null && this.escapeChar !== undefined) {
    output.writeFieldBegin('escapeChar', Thrift.Type.STRING, 6);
    output.writeString(this.escapeChar);
    output.writeFieldEnd();
  }
  if (this.maxFieldSize !== null && this.maxFieldSize !== undefined) {
    output.writeFieldBegin('maxFieldSize', Thrift.Type.I32, 7);
    output.writeI32(this.maxFieldSize);
    output.writeFieldEnd();
  }
  if (this.encoding !== null && this.encoding !== undefined) {
    output.writeFieldBegin('encoding', Thrift.Type.STRING, 8);
    output.writeString(this.encoding);
    output.writeFieldEnd();
  }
  if (this.skipInitialSpace !== null && this.skipInitialSpace !== undefined) {
    output.writeFieldBegin('skipInitialSpace', Thrift.Type.BOOL, 9);
    output.writeBool(this.skipInitialSpace);
    output.writeFieldEnd();
  }
  if (this.hasHeader !== null && this.hasHeader !== undefined) {
    output.writeFieldBegin('hasHeader', Thrift.Type.BOOL, 10);
    output.writeBool(this.hasHeader);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var FileFormatParameters = module.exports.FileFormatParameters = function(args) {
  this.fileformat = null;
  this.setBy = null;
  if (args) {
    if (args.fileformat !== undefined && args.fileformat !== null) {
      this.fileformat = new ttypes.FileFormat(args.fileformat);
    }
    if (args.setBy !== undefined && args.setBy !== null) {
      this.setBy = args.setBy;
    }
  }
};
FileFormatParameters.prototype = {};
FileFormatParameters.prototype.read = function(input) {
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
        this.fileformat = new ttypes.FileFormat();
        this.fileformat.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.BYTE) {
        this.setBy = input.readByte();
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

FileFormatParameters.prototype.write = function(output) {
  output.writeStructBegin('FileFormatParameters');
  if (this.fileformat !== null && this.fileformat !== undefined) {
    output.writeFieldBegin('fileformat', Thrift.Type.STRUCT, 1);
    this.fileformat.write(output);
    output.writeFieldEnd();
  }
  if (this.setBy !== null && this.setBy !== undefined) {
    output.writeFieldBegin('setBy', Thrift.Type.BYTE, 2);
    output.writeByte(this.setBy);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CSVTaskPayload = module.exports.CSVTaskPayload = function(args) {
  this.fileID = null;
  this.fileFormat = null;
  if (args) {
    if (args.fileID !== undefined && args.fileID !== null) {
      this.fileID = args.fileID;
    }
    if (args.fileFormat !== undefined && args.fileFormat !== null) {
      this.fileFormat = new ttypes.FileFormat(args.fileFormat);
    }
  }
};
CSVTaskPayload.prototype = {};
CSVTaskPayload.prototype.read = function(input) {
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
        this.fileID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.fileFormat = new ttypes.FileFormat();
        this.fileFormat.read(input);
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

CSVTaskPayload.prototype.write = function(output) {
  output.writeStructBegin('CSVTaskPayload');
  if (this.fileID !== null && this.fileID !== undefined) {
    output.writeFieldBegin('fileID', Thrift.Type.STRING, 1);
    output.writeString(this.fileID);
    output.writeFieldEnd();
  }
  if (this.fileFormat !== null && this.fileFormat !== undefined) {
    output.writeFieldBegin('fileFormat', Thrift.Type.STRUCT, 2);
    this.fileFormat.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CSVAnalyzeTaskPayload = module.exports.CSVAnalyzeTaskPayload = function(args) {
  this.target = null;
  this.columnIndices = null;
  this.stats = null;
  if (args) {
    if (args.target !== undefined && args.target !== null) {
      this.target = new ttypes.CSVTaskPayload(args.target);
    }
    if (args.columnIndices !== undefined && args.columnIndices !== null) {
      this.columnIndices = Thrift.copyList(args.columnIndices, [null]);
    }
    if (args.stats !== undefined && args.stats !== null) {
      this.stats = Thrift.copyList(args.stats, [null]);
    }
  }
};
CSVAnalyzeTaskPayload.prototype = {};
CSVAnalyzeTaskPayload.prototype.read = function(input) {
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
        this.target = new ttypes.CSVTaskPayload();
        this.target.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.columnIndices = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readI16();
          this.columnIndices.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size7 = 0;
        var _rtmp311;
        this.stats = [];
        var _etype10 = 0;
        _rtmp311 = input.readListBegin();
        _etype10 = _rtmp311.etype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          var elem13 = null;
          elem13 = input.readByte();
          this.stats.push(elem13);
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

CSVAnalyzeTaskPayload.prototype.write = function(output) {
  output.writeStructBegin('CSVAnalyzeTaskPayload');
  if (this.target !== null && this.target !== undefined) {
    output.writeFieldBegin('target', Thrift.Type.STRUCT, 1);
    this.target.write(output);
    output.writeFieldEnd();
  }
  if (this.columnIndices !== null && this.columnIndices !== undefined) {
    output.writeFieldBegin('columnIndices', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.I16, this.columnIndices.length);
    for (var iter14 in this.columnIndices)
    {
      if (this.columnIndices.hasOwnProperty(iter14))
      {
        iter14 = this.columnIndices[iter14];
        output.writeI16(iter14);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.stats !== null && this.stats !== undefined) {
    output.writeFieldBegin('stats', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.BYTE, this.stats.length);
    for (var iter15 in this.stats)
    {
      if (this.stats.hasOwnProperty(iter15))
      {
        iter15 = this.stats[iter15];
        output.writeByte(iter15);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CSVConvertPayload = module.exports.CSVConvertPayload = function(args) {
  this.source = null;
  this.targetFormat = null;
  this.targetFileLineTerminator = null;
  this.targetFileName = null;
  this.targetFileParentID = null;
  if (args) {
    if (args.source !== undefined && args.source !== null) {
      this.source = new ttypes.CSVTaskPayload(args.source);
    }
    if (args.targetFormat !== undefined && args.targetFormat !== null) {
      this.targetFormat = new ttypes.FileFormat(args.targetFormat);
    }
    if (args.targetFileLineTerminator !== undefined && args.targetFileLineTerminator !== null) {
      this.targetFileLineTerminator = args.targetFileLineTerminator;
    }
    if (args.targetFileName !== undefined && args.targetFileName !== null) {
      this.targetFileName = args.targetFileName;
    }
    if (args.targetFileParentID !== undefined && args.targetFileParentID !== null) {
      this.targetFileParentID = args.targetFileParentID;
    }
  }
};
CSVConvertPayload.prototype = {};
CSVConvertPayload.prototype.read = function(input) {
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
        this.source = new ttypes.CSVTaskPayload();
        this.source.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.targetFormat = new ttypes.FileFormat();
        this.targetFormat.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BYTE) {
        this.targetFileLineTerminator = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.targetFileName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.targetFileParentID = input.readString();
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

CSVConvertPayload.prototype.write = function(output) {
  output.writeStructBegin('CSVConvertPayload');
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin('source', Thrift.Type.STRUCT, 1);
    this.source.write(output);
    output.writeFieldEnd();
  }
  if (this.targetFormat !== null && this.targetFormat !== undefined) {
    output.writeFieldBegin('targetFormat', Thrift.Type.STRUCT, 2);
    this.targetFormat.write(output);
    output.writeFieldEnd();
  }
  if (this.targetFileLineTerminator !== null && this.targetFileLineTerminator !== undefined) {
    output.writeFieldBegin('targetFileLineTerminator', Thrift.Type.BYTE, 3);
    output.writeByte(this.targetFileLineTerminator);
    output.writeFieldEnd();
  }
  if (this.targetFileName !== null && this.targetFileName !== undefined) {
    output.writeFieldBegin('targetFileName', Thrift.Type.STRING, 4);
    output.writeString(this.targetFileName);
    output.writeFieldEnd();
  }
  if (this.targetFileParentID !== null && this.targetFileParentID !== undefined) {
    output.writeFieldBegin('targetFileParentID', Thrift.Type.STRING, 5);
    output.writeString(this.targetFileParentID);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.VERSION = '0.4.0';
ttypes.ERR_CODE = 41;
ttypes.SERVICE_NAME = 'dmp-processor-csv';
ttypes.AMQP_ROUTING_KEY = 'dmp.events.csv';
ttypes.TASK_CSV_VALIDATE = 'task-csv-validate';
ttypes.TASK_CSV_ANALYZE = 'task-csv-analyze';
ttypes.TASK_CSV_CONVERT = 'task-csv-convert';
ttypes.TASK_CSV_GETFIRSTROW = 'task-csv-getfirstrow';
ttypes.TASK_CSV_DETECTFORMATPARAMS = 'task-csv-detectformatparams';
ttypes.STAT_TYPE_UNIQUE = 0;
ttypes.STAT_TYPE_MIN = 1;
ttypes.STAT_TYPE_MAX = 2;
ttypes.STAT_TYPE_SUM = 3;
ttypes.STAT_TYPE_MEAN = 4;
ttypes.STAT_TYPE_STDDEV = 5;
ttypes.STAT_TYPE_MEDIAN = 6;
ttypes.STAT_TYPE_TOP_FREQUENT = 7;
ttypes.LF = 0;
ttypes.CRLF = 1;
ttypes.QUOTE_STYLE_MINIMAL = 0;
ttypes.QUOTE_STYLE_ALL = 1;
ttypes.QUOTE_STYLE_NONNUMERIC = 2;
ttypes.QUOTE_STYLE_NONE = 3;
ttypes.DEFAULT = 0;
ttypes.DETECTED = 1;
ttypes.SAVED = 2;
ttypes.DELIMITER_CHAR_KEY = 'delimeterChar';
ttypes.DELIMITER_TAB_KEY = 'delimiterTab';
ttypes.QUOTE_CHAR_KEY = 'quoteChar';
ttypes.QUOTE_STYLE_KEY = 'quoteStyle';
ttypes.DOUBLE_QUOTE_KEY = 'doubleQuote';
ttypes.ESCAPE_CHAR_KEY = 'excapeChar';
ttypes.MAX_FIELD_SIZE_KEY = 'maxFieldSize';
ttypes.ENCODING_KEY = 'encoding';
ttypes.SKIP_INITIAL_SPACE_KEY = 'skipInitialSpace';
ttypes.HAS_HEADER_KEY = 'hasHeader';
ttypes.DEFAULT_DELIMITER_CHAR = ',';
ttypes.DEFAULT_DELIMITER_TAB = false;
ttypes.DEFAULT_QUOTE_CHAR = ',';
ttypes.DEFAULT_DOUBLE_QUOTE = true;
ttypes.DEFAULT_ESCAPE_CHAR = '/';
ttypes.DEFAULT_MAX_FIELD_SIZE = 1000;
ttypes.DEFAULT_ENCODING = 'UTF-8';
ttypes.DEFAULT_SKIP_INITIAL_SPACE = true;
ttypes.DEFAULT_HAS_HEADER = true;
