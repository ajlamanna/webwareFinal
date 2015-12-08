var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var cookie = require('cookie');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  extended: true
}));

function parseCookies (request) {
  var list = {},
      rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
    var parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}

app.get('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.post('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.get('/index', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
  console.log(req.cookie.password);
});

app.post('/index', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.post('/cookie', function(req, res) {
  //res.writeHead(200, {"Content-Type": "text/html"});
  var cookies = parseCookies(req);
  if(cookies.password.toLowerCase() === "level4" || cookies.password.toLowerCase() === "level 4") {
    res.clearCookie('password');
    res.redirect('littlegame.herokuapp.com/color.html');
  }
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
  
});

// subroutines

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
