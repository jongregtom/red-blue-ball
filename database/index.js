var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = mongoose.Schema({
  id: Number,
  red_count: Number,
  blue_count: Number
});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, users);
    }
  });
};

module.exports.selectAll = selectAll;