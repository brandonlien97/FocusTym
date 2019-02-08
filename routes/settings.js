var data = require('../data.json');
/*
 * GET home page.
 */
exports.settings = function(req, res) {
	res.render('settings', data);
}