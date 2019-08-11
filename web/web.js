const express = require('express');
const path = require('path');
const template = require('art-template');
const request = require('request');
const app = express();

app.use(express.static(path.join(__dirname, 'views')));

// 当渲染后缀为art的模板时 所使用的模板引擎是什么
app.engine('art', require('express-art-template'));
// 告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
// 告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

app.get('/index', (req, res) => {
    // request('http://localhost:3001/index', (err, response, body) => {
    //     // console.log(body);
    //     res.send(body);
    // });

    res.render('index');

});

app.get('/category', (req, res) => {
    res.render('category', {
        msg: 'message'
    });
});

app.listen(3000);
console.log('3000服务器启动成功');