var data = require("../data.json");

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
	res.render('addTask', data.groups[j]);
};