var data = require("../data.json");

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
  		}
  	}
 
	
	res.render('index', data);
};