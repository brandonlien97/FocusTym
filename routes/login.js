
var data = require('../data.json');
var users = require('../users.json');
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('login',data);
};

function rend(req, res){
	var u = global.globalUser;
	var p = req.query.password;
		var i,j;
	for(i = 0; i < data.groups.length; i++){
		if(data.groups[i].name == u) {
			j=i;
			break;
		}
	}
	var groups = addUser(u,j);
	var k;
	var dat ={"groups":[]};
	for(i = 0; i < groups.length; i++){
		dat.groups[i] = data.groups[groups[i]];
	}
	console.log(dat);
	res.render('index', dat);
}

exports.login = function(req, res){
	global.globalUser = req.query.username;
	rend(req, res);
}

function addUser(usr,j){
	var i,j;
	for(i = 0; i < users.users.length; i++){
		console.log(users);
		if(!users.users[i].name){
			users.users[i].name = "k";
		}
		if(!users.users[i].name.localeCompare(usr)) {

		console.log(users.users[i],usr);
			j=i;
			break;
		}else{
			j=0;
		}
	}
	if(!users.users[j].name){
		users.users[j].name = "k";
	}
	console.log(users.users[j].name.localeCompare( usr),usr,users.users[j]);
	if(!users.users[j].name.localeCompare( usr)){
		return users.users[j].groups;
	}else{
		var newUser = {
			"name": usr,
			"groups":[]
		};
		users.users.push(newUser);
		console.log(users);
		return [];
	}
}