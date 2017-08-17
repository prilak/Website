var express = require('express');
var mysql = require('mysql');
//create connection
var db = mysql.createConnection({
	host : 'localhost',
	user : 'michael',
	password : 'password',
	database : 'game_map' 
});
var app = express();


//connect
db.connect(function(err){
	if (err) throw err;
	console.log("connected");
});
app.get('/', function(req, resp){
	db.query("SELECT * FROM map_features", function(error, rows, fields){
		if(error){
			console.log("error in query");
		} else {
			console.log("successful query!!");
			console.log(rows);
			console.log(fields);
		}
	});
});
app.listen(1337);

//testing how to load a html
var http = require('http');
var fs = require('fs');
eval(fs.readFileSync('./characters.js').toString());
eval(fs.readFileSync('./game.js').toString());
eval(fs.readFileSync('./map.js').toString());

//var characters = require('./characters');
const PORT=8080; 

fs.readFile('./game.html', function (err, html) {

    if (err) throw err;    

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});
//create db
/*app.get('/createdb', (req) => {
	var sql = 'CREATE DATABASE game';
	db.query(sql, (err, result) => {
		if(err){
			throw err;
		}
		console.log(result);
		res.send('Database created');

	})
});


app.listen('3000', () => {
	console.log('Server has started');
});

*/