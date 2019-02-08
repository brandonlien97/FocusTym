var data = require('../data.json');
/*
 * GET home page.
 */
exports.add = function(req, res) {
	res.render('add', data);
}