var express = require('express');
var router = express.Router();

var server = express();


server.get('/', function (req, res) { 
    res.send('SoundCloud Jammers Running ') 
    }); 