var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('test/a/aa', {title: 'title', body: '预约膜拜测试'});
});

module.exports = router;
