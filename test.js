#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  ["2014-05-07T01:10:45.000Z", new Date("2014-05-07T01:10:45.000Z")]
])
