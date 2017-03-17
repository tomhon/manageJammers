var restify = require('restify');


var server = restify.createServer(); 

server.listen(process.env.port || 3978, function () {

    console.log('%s listening to %s', server.name, server.url); 

});


server.get('/', restify.serveStatic({
 directory: './build',
 default: 'index.html'
}));

// server.get('/build', function (req, res) { 

//     res.json({connected: 'to build'} )


// }); 

server.get('/build', restify.serveStatic({
 directory: __dirname,
 default: 'index.html'
}));