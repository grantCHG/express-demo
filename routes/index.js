var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send('hello world');
});
router.get('/subscribeTemplate', function (req, res, next) {
	res.render('subscribeTemplate/views/index', {title: 'title', body: '预约膜拜测试'});
});

module.exports = router;
