var data = require('../data.json');
/*
 * GET home page.
 */
exports.submit = function(req, res) {
	var name = req.query.name;
	var topic1 = req.query.topic1;
	var time1 = req.query.time1;

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

	data.subjects.push(newSubject);
	res.render('index', data);
}