var express = require('express');
var router = express.Router();

var server = express();

console.log('SoundCloud Jammers Running')

server.get('/', function (req, res) {
    console.log() 
    res.send('SoundCloud Jammers Running ');

}); 

server.listen(80)