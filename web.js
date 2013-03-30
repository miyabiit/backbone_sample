
var express = require('express');
var app = express();
app.configure(function(){
	app.use(express.static(__dirname + '/sample_addressbook/'));
});
app.listen(3000);
