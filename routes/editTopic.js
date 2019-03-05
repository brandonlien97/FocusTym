var data = require('../data.json');
/*
 * GET home page.
 */
exports.editTopic = function(req, res) { 
	console.log("Edit for: " + req.params.topic);
  var oldTopic = req.params.topic;
  var topic = req.query.topic;
  var time = req.query.time;
  

  var i, j, h, k, priority;



  for(i = 0; i < data.groups.length; i++){
    for(j = 0; j < data.groups[i].topics.length; j++){
      if(data.groups[i].topics[j].topic == oldTopic){
        h = i;
        k = j;  
        priority = data.groups[i].topics[j].priority;
        break;
      }   
    }
  }
  
  if(topic == '' || time == ''||isNaN(time) || time < 1) {
    res.render('editTopics', data.groups[h].topics[k]);
  }
  else {
    console.log(topic);
    console.log(time);

    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time,
      "priority": priority
    };
    
    data.groups[h].topics[k] = newTopic;
    data.groups[h].topics.sort(GetSortOrder('priority'));
	  data.groups["add_B"] = false;
    res.render('topics', data.groups[h]); 
  }
};

exports.editTopic_B = function(req, res) { 
  console.log("Edit for: " + req.params.topic);
  var oldTopic = req.params.topic;
  var topic = req.query.topic;
  var min = parseInt(req.query.minute);
  var sec = parseInt(req.query.second);
  var time = min + sec;
  

  var i, j, h, k, priority;



  for(i = 0; i < data.groups.length; i++){
    for(j = 0; j < data.groups[i].topics.length; j++){
      if(data.groups[i].topics[j].topic == oldTopic){
        h = i;
        k = j;  
        priority = data.groups[i].topics[j].priority;
        break;
      }   
    }
  }
  
  if(topic == '' || time < 0 ||isNaN(time)) {
    res.render('editTopics_B', data.groups[h].topics[k]);
  }
  else {
    console.log(topic);
    console.log(time);

    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time,
      "priority": priority
    };
    
    data.groups[h].topics[k] = newTopic;
    data.groups[h].topics.sort(GetSortOrder('priority'));
	  data.groups["add_B"] = false;
    res.render('topics', data.groups[h]); 
  }
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
