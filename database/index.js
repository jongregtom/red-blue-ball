var mongoose = require('mongoose');
const config = require('../config.js');
mongoose.connect(`mongodb://jongregtom:${config.DB_PASSWORD}@red-and-blue-shard-00-00-qndoc.mongodb.net:27017,red-and-blue-shard-00-01-qndoc.mongodb.net:27017,red-and-blue-shard-00-02-qndoc.mongodb.net:27017/test?ssl=true&replicaSet=red-and-blue-shard-0&authSource=admin&retryWrites=true`);
//mongoose.connect('mongodb://localhost/test')
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var userSchema = new mongoose.Schema({
  id: String,
  red_count: Number,
  blue_count: Number
});

var User = mongoose.model('User', userSchema);

var selectAll = function(callback) {
  User.find(function(err, users) {
    if(err) {
      callback(err, null);
    } else {
      callback(users);
    }
  });
};

var addBallCount = function(id, color, callback) {
  //check if user exists
  User.find({'id': id}, function(err, result) {
    if(err) {
      callback(err, null);
    } else {
      //if user doesn't exist, create user and add color count
      if (result.length === 0) {
        if (color === 'blue') {
          const user = new User({
            'id': id,
            'blue_count': 1,
            'red_count': 0
           })
        } else if (color === 'red') {
          const user = new User({
            'id': id,
            'blue_count': 0,
            'red_count': 1
           })
        }
        user.save();
      //add count to user if they exist
      } else {
        if (color === 'blue') {
          User.findOneAndUpdate({'id': id}, {$inc: {blue_count: 1}}, function(err, data) {
            if(err) {
              callback(err, null);
            } else {
              callback(null, users);
            }
          })
        } else if (color === 'red') {
          User.findOneAndUpdate({'id': id}, {$inc: {red_count: 1}}, function(err, data) {
            if(err) {
               callback(err, null);
             } else {
               callback(null, users);
             }
           })
        }
      }
    }
  })
}

module.exports = {
  selectAll: selectAll,
  addBallCount: addBallCount
};