var data = require('../data.json');
/*
 * GET home page.
 */
exports.submit = function(req, res) {
	var name = req.query.name;
	var topic1 = req.query.topic1;
	var time1 = req.query.time1;
	var topic2 = req.query.topic2;
	var time2 = req.query.time2;
	var topic3 = req.query.topic3;
	var time3 = req.query.time3;
	var topic4 = req.query.topic4;
	var time4 = req.query.time4;


	var newSubject = {
		"name": name,
		"topics": [
			{
				"topic": topic1,
				"time": time1,
				"timeLeft": time1
			}		
		]
	};

	if(topic2 != undefined || topic2 == "") {
		
		newSubject["topics"].push({"topic":topic2, "time": time2, "timeLeft":time2});
		
	}
	
	if(topic3 != undefined|| topic3 == "") {
		
		newSubject["topics"].push({"topic":topic3, "time": time3, "timeLeft":time3});
		
	}
	if(topic4 != undefined|| topic4 == "") {
		
		newSubject["topics"].push({"topic":topic4, "time": time4, "timeLeft":time4});
		
	}


	console.log(newSubject);

	data.groups.push(newSubject);
	res.render('index', data);
}