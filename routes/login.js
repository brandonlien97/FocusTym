
var data = require('../data.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('login',data);
};

exports.login = function(req, res){
	var u = req.query.username;
	var p = req.query.password;
	console.log(u, p);
	res.render('index', data);
}