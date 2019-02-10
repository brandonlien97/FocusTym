var data = require('../data.json');
/*
 * GET home page.
 */
exports.addNew = function(req, res) {
	res.render('add', data);
}