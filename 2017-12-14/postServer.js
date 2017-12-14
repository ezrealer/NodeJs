const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
    var str = ' ';
    var i = 0;
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function() {
        var post = querystring.parse(str);
        console.log(post);
    });

    res.write('post datas successful');
    res.end();
}).listen(8080);