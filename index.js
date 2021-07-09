const express = require("express");
const path = require('path');
const {reqTime, loger} = require('./mdlwr.js');
const router = require('./routes/servers.js');

const PORT = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(reqTime);
app.use(loger);
app.use(router);

app.get('/', function (req,res) {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});
app.get('/data' , function (req,res) {
    console.log("data");
   res.render('data',{title: ' Data page'});
});
app.get('/dow', function (req,res) {
    console.log(req.requestTime);
    res.download(path.resolve(__dirname, 'static', 'index.html'));
});
app.listen(PORT, function () {
    console.log(`${PORT} server has been started`);
});

