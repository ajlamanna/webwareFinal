var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var cookie = require('cookie');
var app = express();
var port = process.env.PORT || 3000;

app.use(require('express-uncapitalize')());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  extended: true
}));

// ---- LEVEL 1,2 ---- //

app.get('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  console.log("level");
});

app.post('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.get('/index', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  console.log(req.cookie.password);
});

// ----- LEVEL 3 ----- //

var level3 = "level3.html";

app.get('/level3', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  var cookies = parseCookies(req);
  console.log(cookies.password);
  if(cookies.password != null && (cookies.password.toLowerCase() === "level4" || cookies.password.toLowerCase() === "level 4")) {
    //res.clearCookie('password');
	console.log(__dirname + '/public/color.html');
    level3 = "color.html";
	res.end(JSON.stringify(level3));
  } else {
	level3 = "level3.html";
	res.end(JSON.stringify(level3));
  }
});

// ----- LEVEL 4 ----- //

var level4 = "Cobalt Blue";

app.get('/color', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(JSON.stringify(level4));
});

// ---- ERROR 404 ---- //

app.get('*', function(req, res) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.use(function(req, res) {
  res.status(404);
  res.render('404.html', {title: 'Clearly not the right page'});
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
  
});

// --- SUBROUTINES --- //

function sendFile(res, filename) {
  res.writeHead(200, {'Content-type': 'text/html'});

  var stream = fs.createReadStream(filename);

  stream.on('data', function(data) {
    res.write(data);
  });

  stream.on('end', function(data) {
    res.end();
    return;
  });
}

function parseCookies (request) {
  var list = {},
      rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  console.log(list);
  return list;
}
