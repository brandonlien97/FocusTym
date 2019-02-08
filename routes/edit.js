var data = require('../data.json');
/*
 * GET home page.
 */
exports.editTopic = function(req, res) {
	res.render('editTopics', data);
};