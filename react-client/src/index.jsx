import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import Users from './components/Users.jsx';
import Ball from './components/Ball.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      //users: [{'jon': {'red': 1, 'blue': 0}}],
      color: '',
      ip: ''
    }
    this.getRandomColor = this.getRandomColor.bind(this);
    this.addColorCookie = this.addColorCookie.bind(this);
    this.getIp = this.getIp.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.addBallCount = this.addBallCount.bind(this);
  }

  componentDidMount() {

    //if a cookie color was already sent, set the color state to that color
    if (document.cookie) {
      this.setState({color: document.cookie})
      //get the ip address
      this.getIp((ip) => {
        this.setState({ip: ip});
        //add the ball count to the user
        //this.addBallCount(this.state.ip, this.state.color)
      })

    //else set state to random color and send cookie with color
    } else {
      this.getRandomColor((result) => {
        this.setState({color: result});
        this.addColorCookie(result)
        //get the ip address
        this.getIp((ip) => {
          this.setState({ip: ip});
          //add the ball count to the user
          //this.addBallCount(this.state.ip, this.state.color)
        })
      });
    }
  }

  getRandomColor(callback) {
    let number = Math.floor(Math.random() * Math.floor(2));
    if (number === 0) {
      callback('blue');
    } if (number === 1) {
      callback('red')
    }
  }

  addColorCookie(color) {
    document.cookie = color;
  }

  getIp(cb) {
    $.get(`https://api.ipify.org`, function(data){
        cb(data);
    });
  }

  getUsers(cb) {
    $.get('/users', function(users) {
      cb(users)
    })
  }

  addBallCount(id, color) {
    $.get(`/user?id=${id}&color=${color}`)

  }

  render () {
    return (<div>
      Welcome!  Below you will see a {this.state.color} ball which color was generated randomly.  It will remain that color every time you visit this site unless you use a different browser or delete your cookies.
      <Ball color={this.state.color}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));