var data = require('../data.json');
/*
 * GET home page.
 */
exports.groups = function(req, res) {
	res.render('groups', data);
}