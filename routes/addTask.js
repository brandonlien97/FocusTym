var data = require("../data.json");

/*
 * GET home page.
 */
exports.addTask = function(req, res) {
	res.render('addTask', data);
};