var data = require("../data.json");

/*
 * GET home page.
 */
exports.deleteTask = function(req, res) {

	var topic = req.params.topic;


	var i, j, h;
  	for(i = 0; i < data.groups.length; i++){
      for(j = 0; j < data.groups[i].topics.length; j++){
  		  if(data.groups[i].topics[j].topic == topic){
          data.groups[i].topics.splice(j, 1); 	
  			  h = i;
        }
  	  }
  	}
 
	
	res.render('topics', data.groups[h]);
};