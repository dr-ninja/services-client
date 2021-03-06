var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5001));

app.use(express.static(__dirname + '/export'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/export/index.html');
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});


