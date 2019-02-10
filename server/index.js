var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
const db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/users', function(req, res) {
	db.selectAll((users) => {
		res.send(users)
	})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});