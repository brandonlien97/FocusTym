var data = require('../data.json');
/*
 * GET home page.
 */
exports.endTopic = function(req, res) {
	res.render('endTopic', data);
}