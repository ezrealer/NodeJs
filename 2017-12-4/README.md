# JQurey学习

## 1 简介

jQuery是一个JavaScript函数库。
jQuery是一个轻量级的"写的少，做的多"的JavaScript库。
jQuery库包含以下功能：
* HTML 元素选取
* HTML 元素操作
* CSS 操作
* HTML 事件函数
* JavaScript 特效和动画
* HTML DOM 遍历和修改
* AJAX
* Utilities

<b>提示：</b> 除此之外，Jquery还提供了大量的插件。

## 2 安装

可以通过多种方法在网页中添加 jQuery。 您可以使用以下方法：
1. 从 jquery.com 下载 jQuery 库
2. 从 CDN 中载入 jQuery, 如从 Google 中加载 jQuery

### 下载 jQuery

有两个版本的 jQuery 可供下载：
* Production version - 用于实际的网站中，已被精简和压缩。
* Development version - 用于测试和开发（未压缩，是可读的代码）

以上两个版本都可以从 jquery.com 中下载。

jQuery 库是一个 JavaScript 文件，您可以使用HTML的`<script></script>`:
```JavaScript
<head>
 <script src="jquery-1.10.2.min.js"></script>
 </head> 
```

### 替代方案
如果不希望下载并存放 jQuery，那么也可以通过 CDN（内容分发网络） 引用它。

百度、又拍云、新浪、谷歌和微软的服务器都存有 jQuery 。

如果你的站点用户是国内的，建议使用百度、又拍云、新浪等国内CDN地址，如果你站点用户是国外的可以使用谷歌和微软。
Baidu CDN:
```javascript
<head>
<script src="http://libs.baidu.com/jquery/1.10.2/jquery.min.js">
</script>
</head>
```
又拍云 CDN:
```javascript
<head>
<script src="http://upcdn.b0.upaiyun.com/libs/jquery/jquery-2.0.2.min.js">
</script>
</head>
```
新浪 CDN:
```javascript
<head>
<script src="http://lib.sinaapp.com/js/jquery/2.0.2/jquery-2.0.2.min.js">
</script>
</head>
```

## 3 语法

通过 jQuery，您可以选取（查询，query） HTML 元素，并对它们执行"操作"（actions）。
jQuery 语法是通过选取 HTML 元素，并对选取的元素执行某些操作。
基础语法： `$(selector).action()`
* 美元符号定义 jQuery
* 选择符（selector）"查询"和"查找" HTML 元素
* jQuery 的 action() 执行对元素的操作。

```JavaScript
$(document).ready(function(){

   // 开始写 jQuery 代码...
 }); 
```