var data = require('../data.json');
/*
 * GET home page.
 */
exports.delete = function(req, res) {
	res.render('delete', data);
}