import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Users from './components/Users.jsx';
import Ball from './components/Ball.jsx';
import Header from './components/Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      color: '',
      ip: '',
      users: [],
      clicked: false
    }
    this.getRandomColor = this.getRandomColor.bind(this);
    this.addColorCookie = this.addColorCookie.bind(this);
    this.getIp = this.getIp.bind(this);
    this.getUsers = this.getUsers.bind(this);
    this.addBallCount = this.addBallCount.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

    //if a cookie color was already sent, set the color state to that color
    if (document.cookie) {
      this.setState({color: document.cookie})
      //get the ip address
      this.getIp((ip) => {
        this.setState({ip: ip});
        //add the ball count to the user
        this.addBallCount(this.state.ip, this.state.color)
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
          this.addBallCount(this.state.ip, this.state.color)
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

  handleClick() {
    this.getUsers((users) => {
      this.setState({users: users})
      this.setState({clicked: true})
    })
  }

  render () {
    if (this.state.clicked === true) {
      return (<div>
        <Users users={this.state.users}/>
        </div>
        )
    }
    return (<div>
      <Header handleClick={this.handleClick} color={this.state.color}/>
      <Ball color={this.state.color}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));