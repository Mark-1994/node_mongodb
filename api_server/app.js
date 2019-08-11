const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('/index', async(req, res) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'get, post');

    let courses = await Course.find();
    res.send(courses);
});

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

const courseSchema = new mongoose.Schema({
    name: String,
    img: String,
    price: String,
    count: String
});

const Course = mongoose.model('Course', courseSchema);

app.listen(3001);
console.log('3001服务器启动成功');