// import React from 'react';

// const User = (props) => (
//   <div>
//     IP Address: { props.user.id }<br/>
//     Red Balls: {props.user.red_count}<br/>
//     Blue Balls: {props.user.blue_count}<br/><br/>
//   </div>
// )

// export default User;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

function User(props) {
  const { classes } = props;
  return (
      <ListItem>
      	<ListItemText secondary={props.user.id} />
      	<ListItemText secondary={props.user.red_count} />
        <ListItemText secondary={props.user.blue_count} />
      </ListItem>
  );
}

User.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);