const http = require('http');
const urlLib = require('url');

http.createServer(function (req, res) {
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    var getData = obj.query;

    console.log(url, getData);
    res.write("data submit successful!!");
    res.end();
}).listen('8888');