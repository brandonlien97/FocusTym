var data = require("../data.json");
var users = require('../users.json');
/*
 * GET home page.
 */
exports.deleteGroup = function(req, res) {

	var name = req.params.name;
	console.log("Deleting " + name);
	var i;
  	for(i = 0; i < data.groups.length; i++){
  		if(data.groups[i].name == name){
  			data.groups.splice(i, 1); 	
  			break;		
  		}else if(data.groups[i].name == ""){
  					data.groups.splice(i, 1); 	
  			  			break;	
  		}
  	}
 
	
  users.users[getUser()].groups.splice(i, 1);
	res.render('index', data);
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