// Basic Setup
var http     = require('http'),
	express  = require('express'),
	mysql    = require('mysql')
	parser   = require('body-parser');

// Database Connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'knownproject'
});
try {
	connection.connect();

} catch(e) {
	console.log('Database Connetion failed:' + e);
}


// Setup express
var app = express();
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 5000);

// Set default route
app.get('/', function (req, res) {
	res.send('<html><body><p>Welcome to The Known Project</p></body></html>');
});

// Create server
http.createServer(app).listen(app.get('port'), function(){
	console.log('Server listening on port ' + app.get('port'));
});
