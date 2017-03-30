var restify = require('restify');
var jamdb = require('./docdbfunctions');
console.log('documentdb variable defined ' + jamdb);


var server = restify.createServer(); 

server.listen(process.env.port || 3978, function () {

    console.log('%s listening to %s', server.name, server.url); 

});



jamdb.getDatabase()
.then(() => jamdb.getCollection())
.then(() => jamdb.queryCollection())
.then(() => { jamdb.exit(`Completed successfully`); })
.catch((error) => { jamdb.exit(`Completed with error ${JSON.stringify(error)}`) });



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