var fs = require('fs');
var express = require("express");
var app = express();
app.use(express.logger());

function showMainPage(res) {
    var mainPage = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(mainPage);
}

app.get('/', function(request, response) {
	showMainPage(response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});


