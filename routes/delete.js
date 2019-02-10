var data = require("../data.json");

/*
 * GET home page.
 */
exports.deleteSubject = function(req, res) {
	var name = req.params.name;
	console.log("Deleting " + name);
	var i;
  	for(i = 0; i < data.subjects.length; i++){
  		if(data.subjects[i].name == name){
  			data.subjects.splice(i, 1); 	
  			break;		
  		}
  	}
 
	
	res.render('index', data);
};