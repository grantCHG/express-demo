/*创建thrift链接*/
'use strict';
var thrift = require("thrift");

function thriftClient(service,ttypes,options){
	var options = options;

	var connection = thrift.createHttpConnection(options.hostname, options.port,options);
	var client = thrift.createHttpClient(service, connection);

	connection.on('error', function(err) {
	    console.log(err);
	    new Error(e.message);
	});

	return client;
};

exports.thriftClient = thriftClient;