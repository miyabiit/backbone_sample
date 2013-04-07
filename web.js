
var express = require('express');
var app = express();
app.configure(function(){
	app.use(express.static(__dirname + '/'));
	//app.use(express.static(__dirname + '/hackernews/'));
});
app.listen(3000);
