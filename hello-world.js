var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  req.end('Hello Worldn');
}).listen(8124);
console.log('Server running at http://localhost:8124/');