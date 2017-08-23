
const path = require('path');
const publicPath = path.join(__dirname,'../public');
var port = process.env.PORT || 3000;
var express = require("express");
var app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

console.log(__dirname+'/../public');
console.log('------publicPath----'+publicPath);

app.listen(port, function(){
    console.log('-------'+port);
});