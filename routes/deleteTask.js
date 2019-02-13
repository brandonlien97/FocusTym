var data = require("../data.json");

/*
 * GET home page.
 */
exports.deleteTask = function(req, res) {

	var topic = req.params.topic;
	console.log("Deleting " + name);
	var i, j;
  	for(i = 0; i < data.groups.length; i++){
      for(j = 0; j < data.groups.topics.length; j++){
  		  if(data.groups.topics[j].topic == topic){
  			 data.groups.topics.splice(i, 1); 	
  			 break;
        }		
  		}
  	}
 
	
	res.render('topics', data);
};