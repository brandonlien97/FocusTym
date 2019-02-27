
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var topics = require('./routes/topics');
// Example route
// var user = require('./routes/user');


var edit = require('./routes/edit');
var editForm = require('./routes/editTopic');

var deleteGroup = require('./routes/delete');
var deleteTask = require('./routes/deleteTask');
var settings = require('./routes/settings');
var addNew = require('./routes/addNew');

var addTask = require('./routes/addTask');
var addTask_B = require('./routes/addTask');

var submitNew = require('./routes/submit');

var submitTask = require('./routes/topics');
var submitTask_B = require('./routes/topics');

var endTopic = require('./routes/endTopic');
var login = require('./routes/login');
var join = require('./routes/join');
var sort = require('./routes/topics');
var help = require('./routes/index');

var sanitizeHtml = require('sanitize-html');
var dirty = 'some bad input';

// where sanitation goes


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/', login.view);
app.get('/login', login.login);
app.get('/index', index.view);
app.get('/topics/:name', topics.viewTopics);
// Example route
// app.get('/users', user.list);

app.get('/joinGroup',join.joinGroup);
app.get('/join',join.join);
app.get('/join/:group',join.join);
app.get('/editTask/:topic', edit.edit);
app.get('/edited/:topic', editForm.editTopic);
app.get('/delete/:name', deleteGroup.deleteGroup);
app.get('/deleteTask/:topic', deleteTask.deleteTask);
app.get('/deleteTask/', deleteTask.deleteTask);
app.get('/settings', settings.settings);
app.get('/add', addNew.addNew);

app.get('/addTask/:name', addTask.addTask);
app.get('/addTask_B/:name', addTask_B.addTask_B);

app.get('/submit', submitNew.submit);

app.get('/submitTask/:name', submitTask.submitTask);
app.get('/submitTask_B/:name', submitTask_B.submitTask_B);

app.get('/endTopic', endTopic.endTopic);
app.get('/help', help.displayHelp);

app.get('/sort/:topic', sort.sort);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
