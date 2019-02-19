
var data = require('../data.json');
var users = require('../users.json');
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
	var groups = addUser(u);
	res.render('index', data);
}

function addUser(name){
	if(users.name != undefined){
		return users.groups;
	}else{
		var newUser = "name"{
			groups:[]
		};
		users.push(newUser);
		console.log(users);
	}
}