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
      color: 'blue'
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/Users', 
    //   success: (data) => {
    //     this.setState({
    //       users: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      <Ball color={this.state.color}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));