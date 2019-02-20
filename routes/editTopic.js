var data = require('../data.json');
/*
 * GET home page.
 */
exports.editTopic = function(req, res) { 
	console.log("Edit for: " + req.params.topic);
  var oldTopic = req.params.topic;
  var topic = req.query.topic;
  var time = req.query.time;

  var i, j, h, k;



  for(i = 0; i < data.groups.length; i++){
    for(j = 0; j < data.groups[i].topics.length; j++){
      if(data.groups[i].topics[j].topic == oldTopic){
        h = i;
        k = j;  
        break;
      }   
    }
  }
  
  if(topic == '' || time == '') {
    res.render('editTopics', data.groups[h].topics[k]);
  }
  else {
    console.log(topic);
    console.log(time);

    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time
    };
    
    data.groups[h].topics[k] = newTopic;  
    res.render('topics', data.groups[h]); 
  }
};
