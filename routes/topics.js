var data = require('../data.json');
"use strict";
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
 
  var i, j;
  for(i = 0; i < data.groups.length; i++){
    if(data.groups[i].name == name) {      
        j=i;
    }
  }
  var flag = 0;
  for(i = 0; i < data.groups[j].topics.length; i++){
    console.log(data.groups[j].topics[i].topic+" " +(topic));
    if(data.groups[j].topics[i].topic.includes(topic)){
      flag++;
    }
  }
  if(topic == '' || time == '' || isNaN(time) || time < 1) {  
    res.render('addTask', data.groups[j]);
  }
  else {
    if(flag > 0){
      topic = topic + " "+ flag;
    }
    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time,
      "priority": 0
    };
     console.log(newTopic);
    data.groups[j].topics.push(newTopic);

    res.render('topics', data.groups[j]);
  }
  
};

exports.submitTask_B = function(req, res) {
  var name = req.params.name;
  var topic = req.query.topic;
  

  var min = parseInt(req.query.minute);
  var sec = parseInt(req.query.second);
  var time = min + sec;

  console.log("Adding " + name);
  console.log(time);
  var i, j;
  for(i = 0; i < data.groups.length; i++){
    if(data.groups[i].name == name) {      
        j=i;
    }
  }
  var flag = 0;
  for(i = 0; i < data.groups[j].topics.length; i++){
    console.log(data.groups[j].topics[i].topic+" " +(topic));
    if(data.groups[j].topics[i].topic.includes(topic)){
      flag++;
    }
  }
  if(topic == '' || time < 1)  {
    res.render('addTask_B', data.groups[j]);
  }
  else {
    if(flag > 0){
      topic = topic + " "+ flag;
    }
    
    var newTopic = {
      "topic": topic,
      "time": time,
      "timeLeft": time,
      "priority": 0
    };
     console.log(newTopic);
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
