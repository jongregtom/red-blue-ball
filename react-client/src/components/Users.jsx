import React from 'react';
import User from './User.jsx';

const Users = (props) => (
  <div>
    <h1> Users </h1>
    There are { props.users.length } users.
    { props.users.map(user => <User user={user}/>)}
  </div>
)

export default Users;