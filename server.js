var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require("fs");
var cookie = require('cookieParser');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json({
  extended: true
}));

app.get('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.post('/', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.get('/index', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.post('/index', function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
});

app.get('/cookie', function(req, res) {
  if(req.cookie.password.toLowerCase() === "level4" || req.cookie.password.toLowerCase() === "level 4"){
    res.redirect('littlegame.herokuapp.com/color.html');
    res.clearCookie('password');
  }
});

app.listen(port, function() {
  console.log('App is listening on port ' + port);
  
});

// subroutines

function sendFile(res, filename) {
  res.writeHead(200, {'Content-type': 'text/html'})

  var stream = fs.createReadStream(filename)

  stream.on('data', function(data) {
    res.write(data);
  })

  stream.on('end', function(data) {
    res.end();
    return;
  })
}
