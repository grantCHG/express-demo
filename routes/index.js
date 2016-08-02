var express = require('express');
var router = express.Router();
var titleController = require('../controllers/subscribeTemplate/titleController');

router.get('/', function (req, res, next) {
	res.send('hello world');
});
/*router.get('/subscribeTemplate', function (req, res, next) {
	res.render('subscribeTemplate/views/index', {title:1,body:2});
});*/

router.get('/subscribeTemplate', titleController.setTitle);
module.exports = router;
