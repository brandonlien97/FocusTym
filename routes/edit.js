var data = require('../data.json');
/*
 * GET home page.
 */
exports.edit = function(req, res) {
  console.log("Edit for: " + req.params.topic);

  var topic = req.params.topic;

  var i, j, h, k;
    for(i = 0; i < data.groups.length; i++){
      for(j = 0; j < data.groups[i].topics.length; j++){
        if(data.groups[i].topics[j].topic == topic){
         h = i;
         k = j;
        }   
      }
    }
 
  res.render('editTopics', data.groups[h].topics[k]);
	
};