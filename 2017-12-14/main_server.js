//Post+get请求处理
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function (req, res) {
    //处理GET请求
    var obj = urlLib.parse(req.url, true);
    var url = obj.pathname;
    const getDatas = obj.query;

    //处理POST请求
    var str = ' ';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        const postDatas = querystring.parse(str);

    // console.log(url, getDatas, postDatas);
    //文件请求处理
    var file_name = 'serverData' + url; 
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write("It's not found!!");
        }else{
            res.write(data);
        }
        res.end();
    });
    });
});
server.listen(8080);