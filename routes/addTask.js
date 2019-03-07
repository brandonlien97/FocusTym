var data = require("../data.json");
var users = require('../users.json');
/*
 * GET home page.
 */

exports.addTask = function(req, res) {
	console.log("Add for: " + req.params.name+" ");

	var i,j;
	for(i = 0; i < data.groups.length; i++){
		if(data.groups[i].name == req.params.name) {
			j=i;
			break;
		}
	}
	data.groups["add_B"] = false;

	res.render('addTask', data.groups[j]);
};

exports.addTask_B = function(req, res) {
	console.log("Add for: " + req.params.name+" ");

	var i,j;
	for(i = 0; i < data.groups.length; i++){
		if(data.groups[i].name == req.params.name) {
			j=i;
			break;
		}
	}
	data.groups["add_B"] = true;
	res.render('addTask_B', data.groups[j]);
};
