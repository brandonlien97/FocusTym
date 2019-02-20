var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewTopics = function(req, res) { 
	var name = req.params.name; 
  	console.log("The project name is: " + name);
  	
  	var i, j;
  	for(i = 0; i < data.groups.length; i++){
  		if(data.groups[i].name == name){
  			j = i;
  		}
  	}
  	console.log(data.groups[j].name);

    res.render('topics', data.groups[j]);
};

exports.submitTask = function(req, res) {
  var name = req.params.name;
  var topic = req.query.topic;
  var time = req.query.time;
  
  console.log(name);
  console.log(newTopic);
  var i, j;
  for(i = 0; i < data.groups.length; i++){
    if(data.groups[i].name == name) {      
        j=i;
    }
  }

  if(topic == '' || time == '') {
    res.render('addTask', data.groups[j]);
  }
  else {
    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time
    };
    
    data.groups[j].topics.push(newTopic);

    res.render('topics', data.groups[j]);
  }
  
};

exports.sort = function(req, res) {
  
  var topic = req.params.topic;

  
  console.log(topic);
  
  var i, j, h, k;
  for(i = 0; i < data.groups.length; i++){
    for(j=0; j < data.groups[i].topics.length; j++) {
      if(data.groups[i].topics[j].topic == topic) {      
          h=i;
          k=j;
          break;
      }
    }
  }

  data.groups[h].topics[k].priority = data.groups[h].topics[k].priority + 1;
  data.groups[h].topics.sort(GetSortOrder('priority'));
  res.render('topics', data.groups[h]);
};

//Comparer Function  
function GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] < b[prop]) {  
            return 1;  
        } else if (a[prop] > b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
};
