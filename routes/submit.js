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
	
	if(name == ''){
		res.render('add', data);
	}

    else if ((topic2 == '' && time2 != '') || (topic2 != '' && time2 == '')) {
		res.render('add', data);
	}

	// Missing parameters
	else if((topic1 == '' && time1 != '') || (topic1 != '' && time1 == '')) {
		res.render('add', data);
	}
	
	else if(topic1 != '' &&  time1 != '' ) {
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
		if((topic2 != '' &&  time2 != '')) {
		
			newSubject["topics"].push({"topic":topic2, "time": time2, "timeLeft":time2});
            
		}
		console.log(newSubject);
		data.groups.push(newSubject);
		res.render('index', data);
	}
	else {
		res.render('add', data);
	}

}