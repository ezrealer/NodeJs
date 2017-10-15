# 基于nodejs爬虫的信息采集展示的桌面APP

[TOC]

### 序、项目介绍

```
1.Request
2.Cheerio
3.Requirejs
4.NW.js
```

### 一、项目开始

#### 1 创建项目
```
$ mkdir jokeReader
$ cd jokeReader
$ git init
```
然后就会出现类似下面的界面：

![](img/001.png)

根据自己的喜好填写即可，不会影响项目的正常运行。

### 二、安装并测试各个模块

1.安装需要的三个模块：
```
$ npm install request --save
$ npm install cheerio --save
$ npm install requirejs --save
```
*模块安装成功:*

![](img/002.png)

![](img/004.png)

![](img/005.png)

2.测试模块
在刚才创建的项目文件夹下新建`app.js`文件
```JavaScript
var request = require('request');
var cheerio = require('cheerio');
var requirejs = require('requirejs');
request('http://www.yikedou.com/fuqixiaohua/201704/76455.html', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```
然后运行项目：
```
$ node app.js
```
*运行结果:*

![](img/003.png)

我们可以看到`error： null`表示没有错误；`statusCode：200`表示请求成功；`<body>`是我们测试数据是否正常返回。一切正常。

*测试`Cheerio`模块*
```JavaScript
var request = require('request');
var cheerio = require('cheerio');
var requirejs = require('requirejs');
var fs = require('fs');

var url = 'http://www.yikedou.com/fuqixiaohua/201704/76455.html'
request(url, function (error, response, body) {
  // console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile('test.txt', body, function (err) {
      // body...
      if (err) {
        console.log(err);
      }
      else{
            console.log("写入成功");
      }
  });
  const $ = cheerio.load(body) ;
  console.log($);
});
```

运行结果：

![](img/006.png)

爬取结果：

![](img/007.png)






