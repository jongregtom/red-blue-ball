var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/users', function(req, res) {
	db.selectAll((users) => {
		res.send(users)
	})
})

app.get('/user', function(req, res) {
	db.addBallCount(req.query.id, req.query.color, () => {
	  res.end();
	})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});