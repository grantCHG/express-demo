var titleService = require('../../services/subscribeTemplate/titleService');
function setTitle(req, res, next) {
	titleService.getTitle().then(function(result) {
		res.render('subscribeTemplate/views/index', result);
	}).catch(function(error) {
		next(error);
	});
}
exports.setTitle = setTitle;