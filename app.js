var express = require('express');
var server = express();

console.log('SoundCloud Jammers Running')

server.get('/', function (req, res) {
    console.log() 
    res.send('SoundCloud Jammers Running ');

}); 

server.listen(80, function () {
    console.log('Server Listening on Port 80')
});