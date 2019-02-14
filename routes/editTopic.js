var data = require('../data.json');
/*
 * GET home page.
 */
exports.editTopic = function(req, res) { 
	console.log("Edit for: " + req.params.topic);

  var topic = req.params.topic;
  var time = req.params.time;
  console.log(topic);
  console.log(time);
  var i, j, h;
    for(i = 0; i < data.groups.length; i++){
      for(j = 0; j < data.groups[i].topics.length; j++){
        if(data.groups[i].topics[j].topic == topic){
          h = i;
          var newTopic = {
            "topic": topic,
            "time": time,
            "timeLeft": time
          };
          data.groups[i].topics[j] = newTopic;
        }   
      }
    }
  console.log(data.groups[h]);
  res.render('topics', data.groups[h]);
};
