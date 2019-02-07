var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewTopics = function(req, res) { 
	var name = req.params.name; 
  	console.log("The project name is: " + name);
  	console.log(data.subjects.name);

    res.render('topics', data.subjects[0]);
};
