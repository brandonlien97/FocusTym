var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewTopics = function(req, res) { 
	var name = req.params.name; 
  	console.log("The project name is: " + name);
  	
  	var i, j;
  	for(i = 0; i < data.subjects.length; i++){
  		if(data.subjects[i].name == name){
  			j = i;
  		}
  	}
  	console.log(data.subjects[j].name);

    res.render('topics', data.subjects[j]);
};
