
const path = require('path');
const publicPath = path.join(__dirname,'../public');
var port = process.env.PORT || 3000;
var express = require("express");
var socket = require('socket.io');
var http = require('http');
var app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendfile('index.html');
});

var server = http.createServer(app);
var io = socket(server);
io.on('connection', (socket) => {
    console.log('conncted to network');
    socket.on('disconnect', function(){
        console.log('------user disconnected----');
    });
    socket.emit('newMessage',{
        msg: 'I am good',
        cretedAt: '1233',
        from:'prateek'

    });
    socket.on('createMessage', function(message){
        console.log(message.from);

    });
})

console.log(__dirname+'/../public');
console.log('------publicPath----'+publicPath);

server.listen(port, function(){
    console.log('-------'+port);
});