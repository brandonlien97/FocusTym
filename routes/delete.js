var data = require("../data.json");
var users = require('../users.json');
/*
 * GET home page.
 */

var index = require('./index');
exports.deleteGroup = function(req, res) {

	var name = req.params.name;
	console.log("Deleting " + name);
	var i;
  	for(i = 0; i < data.groups.length; i++){
  		if(data.groups[i].name == name){
  			//data.groups.splice(i, 1); 	
  			break;		
  		}else if(data.groups[i].name == ""){
  					data.groups.splice(i, 1); 	
  			  			break;	
  		}
  }
  console.log(i,users.users[getUser()].groups)
  var j;
  for(j = 0; j < users.users[getUser()].groups.length;j++){
  	if (users.users[getUser()].groups[j] == i){
        users.users[getUser()].groups.splice(j, 1);
        rend(req, res);
    }
  }

};

function getUser(){
  var i,j;
  for(i = 0; i < users.users.length; i++){
    if(!users.users[i].name.localeCompare( global.globalUser)) {
      j=i;
      break;
    }else{
      j=0;
    }
  }
  return j;
}

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

function addUser(usr,j){
  var i,j;
  for(i = 0; i < users.users.length; i++){

    if(!users.users[i].name.localeCompare( usr)) {

    console.log(users.users[i],usr);
      j=i;
      break;
    }else{
      j=0;
    }
  }

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