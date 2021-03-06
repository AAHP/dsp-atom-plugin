//
// Autogenerated by Thrift Compiler (0.10.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;

var csv_ttypes = require('./csv_types');


var ttypes = module.exports = {};
var SqlColumnInfo = module.exports.SqlColumnInfo = function(args) {
  this.columnName = null;
  this.columnType = null;
  this.notNull = null;
  this.primaryKey = null;
  if (args) {
    if (args.columnName !== undefined && args.columnName !== null) {
      this.columnName = args.columnName;
    }
    if (args.columnType !== undefined && args.columnType !== null) {
      this.columnType = args.columnType;
    }
    if (args.notNull !== undefined && args.notNull !== null) {
      this.notNull = args.notNull;
    }
    if (args.primaryKey !== undefined && args.primaryKey !== null) {
      this.primaryKey = args.primaryKey;
    }
  }
};
SqlColumnInfo.prototype = {};
SqlColumnInfo.prototype.read = function(input) {
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
        this.columnName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.columnType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.BOOL) {
        this.notNull = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.primaryKey = input.readBool();
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

SqlColumnInfo.prototype.write = function(output) {
  output.writeStructBegin('SqlColumnInfo');
  if (this.columnName !== null && this.columnName !== undefined) {
    output.writeFieldBegin('columnName', Thrift.Type.STRING, 1);
    output.writeString(this.columnName);
    output.writeFieldEnd();
  }
  if (this.columnType !== null && this.columnType !== undefined) {
    output.writeFieldBegin('columnType', Thrift.Type.STRING, 2);
    output.writeString(this.columnType);
    output.writeFieldEnd();
  }
  if (this.notNull !== null && this.notNull !== undefined) {
    output.writeFieldBegin('notNull', Thrift.Type.BOOL, 3);
    output.writeBool(this.notNull);
    output.writeFieldEnd();
  }
  if (this.primaryKey !== null && this.primaryKey !== undefined) {
    output.writeFieldBegin('primaryKey', Thrift.Type.BOOL, 4);
    output.writeBool(this.primaryKey);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SqlTableInfo = module.exports.SqlTableInfo = function(args) {
  this.tableName = null;
  this.columns = null;
  this.schemaName = 'default';
  if (args) {
    if (args.tableName !== undefined && args.tableName !== null) {
      this.tableName = args.tableName;
    }
    if (args.columns !== undefined && args.columns !== null) {
      this.columns = Thrift.copyList(args.columns, [ttypes.SqlColumnInfo]);
    }
    if (args.schemaName !== undefined && args.schemaName !== null) {
      this.schemaName = args.schemaName;
    }
  }
};
SqlTableInfo.prototype = {};
SqlTableInfo.prototype.read = function(input) {
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
        this.tableName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        var _size0 = 0;
        var _rtmp34;
        this.columns = [];
        var _etype3 = 0;
        _rtmp34 = input.readListBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = new ttypes.SqlColumnInfo();
          elem6.read(input);
          this.columns.push(elem6);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.schemaName = input.readString();
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

SqlTableInfo.prototype.write = function(output) {
  output.writeStructBegin('SqlTableInfo');
  if (this.tableName !== null && this.tableName !== undefined) {
    output.writeFieldBegin('tableName', Thrift.Type.STRING, 1);
    output.writeString(this.tableName);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.columns.length);
    for (var iter7 in this.columns)
    {
      if (this.columns.hasOwnProperty(iter7))
      {
        iter7 = this.columns[iter7];
        iter7.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.schemaName !== null && this.schemaName !== undefined) {
    output.writeFieldBegin('schemaName', Thrift.Type.STRING, 3);
    output.writeString(this.schemaName);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ImportRange = module.exports.ImportRange = function(args) {
  this.start = null;
  this.last = -1;
  if (args) {
    if (args.start !== undefined && args.start !== null) {
      this.start = args.start;
    }
    if (args.last !== undefined && args.last !== null) {
      this.last = args.last;
    }
  }
};
ImportRange.prototype = {};
ImportRange.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.start = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.last = input.readI32();
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

ImportRange.prototype.write = function(output) {
  output.writeStructBegin('ImportRange');
  if (this.start !== null && this.start !== undefined) {
    output.writeFieldBegin('start', Thrift.Type.I32, 1);
    output.writeI32(this.start);
    output.writeFieldEnd();
  }
  if (this.last !== null && this.last !== undefined) {
    output.writeFieldBegin('last', Thrift.Type.I32, 2);
    output.writeI32(this.last);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CSV2SQLTaskPayload = module.exports.CSV2SQLTaskPayload = function(args) {
  this.vfsID = null;
  this.range = null;
  this.destination = null;
  this.fileFormat = null;
  this.dsnID = null;
  this.password = null;
  if (args) {
    if (args.vfsID !== undefined && args.vfsID !== null) {
      this.vfsID = args.vfsID;
    }
    if (args.range !== undefined && args.range !== null) {
      this.range = new ttypes.ImportRange(args.range);
    }
    if (args.destination !== undefined && args.destination !== null) {
      this.destination = new ttypes.SqlTableInfo(args.destination);
    }
    if (args.fileFormat !== undefined && args.fileFormat !== null) {
      this.fileFormat = new csv_ttypes.FileFormat(args.fileFormat);
    }
    if (args.dsnID !== undefined && args.dsnID !== null) {
      this.dsnID = args.dsnID;
    }
    if (args.password !== undefined && args.password !== null) {
      this.password = args.password;
    }
  }
};
CSV2SQLTaskPayload.prototype = {};
CSV2SQLTaskPayload.prototype.read = function(input) {
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
        this.vfsID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.range = new ttypes.ImportRange();
        this.range.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.destination = new ttypes.SqlTableInfo();
        this.destination.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.fileFormat = new csv_ttypes.FileFormat();
        this.fileFormat.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.dsnID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
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

CSV2SQLTaskPayload.prototype.write = function(output) {
  output.writeStructBegin('CSV2SQLTaskPayload');
  if (this.vfsID !== null && this.vfsID !== undefined) {
    output.writeFieldBegin('vfsID', Thrift.Type.STRING, 1);
    output.writeString(this.vfsID);
    output.writeFieldEnd();
  }
  if (this.range !== null && this.range !== undefined) {
    output.writeFieldBegin('range', Thrift.Type.STRUCT, 2);
    this.range.write(output);
    output.writeFieldEnd();
  }
  if (this.destination !== null && this.destination !== undefined) {
    output.writeFieldBegin('destination', Thrift.Type.STRUCT, 3);
    this.destination.write(output);
    output.writeFieldEnd();
  }
  if (this.fileFormat !== null && this.fileFormat !== undefined) {
    output.writeFieldBegin('fileFormat', Thrift.Type.STRUCT, 4);
    this.fileFormat.write(output);
    output.writeFieldEnd();
  }
  if (this.dsnID !== null && this.dsnID !== undefined) {
    output.writeFieldBegin('dsnID', Thrift.Type.STRING, 5);
    output.writeString(this.dsnID);
    output.writeFieldEnd();
  }
  if (this.password !== null && this.password !== undefined) {
    output.writeFieldBegin('password', Thrift.Type.STRING, 6);
    output.writeString(this.password);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SQL2CSVTaskPayload = module.exports.SQL2CSVTaskPayload = function(args) {
  this.sourceTable = null;
  this.fileName = null;
  this.vfsParentID = null;
  this.fileFormat = null;
  if (args) {
    if (args.sourceTable !== undefined && args.sourceTable !== null) {
      this.sourceTable = new ttypes.SqlTableInfo(args.sourceTable);
    }
    if (args.fileName !== undefined && args.fileName !== null) {
      this.fileName = args.fileName;
    }
    if (args.vfsParentID !== undefined && args.vfsParentID !== null) {
      this.vfsParentID = args.vfsParentID;
    }
    if (args.fileFormat !== undefined && args.fileFormat !== null) {
      this.fileFormat = new csv_ttypes.FileFormat(args.fileFormat);
    }
  }
};
SQL2CSVTaskPayload.prototype = {};
SQL2CSVTaskPayload.prototype.read = function(input) {
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
        this.sourceTable = new ttypes.SqlTableInfo();
        this.sourceTable.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.fileName = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.vfsParentID = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRUCT) {
        this.fileFormat = new csv_ttypes.FileFormat();
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

SQL2CSVTaskPayload.prototype.write = function(output) {
  output.writeStructBegin('SQL2CSVTaskPayload');
  if (this.sourceTable !== null && this.sourceTable !== undefined) {
    output.writeFieldBegin('sourceTable', Thrift.Type.STRUCT, 1);
    this.sourceTable.write(output);
    output.writeFieldEnd();
  }
  if (this.fileName !== null && this.fileName !== undefined) {
    output.writeFieldBegin('fileName', Thrift.Type.STRING, 2);
    output.writeString(this.fileName);
    output.writeFieldEnd();
  }
  if (this.vfsParentID !== null && this.vfsParentID !== undefined) {
    output.writeFieldBegin('vfsParentID', Thrift.Type.STRING, 3);
    output.writeString(this.vfsParentID);
    output.writeFieldEnd();
  }
  if (this.fileFormat !== null && this.fileFormat !== undefined) {
    output.writeFieldBegin('fileFormat', Thrift.Type.STRUCT, 4);
    this.fileFormat.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ttypes.RANGE_LAST_LINE = -1;
