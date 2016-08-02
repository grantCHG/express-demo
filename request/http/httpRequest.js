/*页面生成服务向其他服务发起http请求公共模块*/
'use strict';
var rp = require('request-promise');

function httpRequest(url, args) {
	var qs = args || {};
	var promise = new Promise(function(resolve, reject) {
		var options = {
			uri: url,
			qs: qs,
			headers: {
				'User-Agent': 'Request-Promise'
			},
			json: true
		};
		rp(options).then(function(json) {
			resolve(json);
		}).catch(function(e) {
			resolve({});
		});
	});

	return promise;
}

exports.httpRequest = httpRequest;