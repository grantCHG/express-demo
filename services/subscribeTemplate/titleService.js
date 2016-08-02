var getData = require("../../request/http/httpRequest").httpRequest;

//获取演唱会数据
function getTitle() {
	var url = "http://rap.taobao.org/mockjs/6112/setTitle";
	return getData(url);
}
exports.getTitle = getTitle;