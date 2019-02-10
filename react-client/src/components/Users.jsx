// import React from 'react';
// import User from './User.jsx';

// const Users = (props) => (
//   <div>
//     <h1> Users </h1>
//     There are { props.users.length } users.
//     { props.users.map(user => <User user={user}/>)}
//   </div>
// )

// export default Users;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import User from './User.jsx';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// function Users(props) {
//   const { classes } = props;
//   return (

//     <List className={classes.root}>
//     	<ListItem>
//       		<ListItemText primary="IP             " />
//       		<ListItemText primary="Red Count" />
//         	<ListItemText primary="Blue Count" />
//       	</ListItem>
//     	{props.users.map(user => <User user={user}/>)}
//     </List>
//   );
// }

// Users.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Users);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(ip, red, blue) {
  id += 1;
  return { id, ip, red, blue };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


function SimpleTable(props) {
  const { classes } = props;
  const rows = props.users.map(function(user) {return createData(user.id, user.red_count, user.blue_count)})
  console.log(rows)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>IP Address</TableCell>
            <TableCell align="right">Red Count</TableCell>
            <TableCell align="right">Blue Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.ip}
              </TableCell>
              <TableCell align="right">{row.red}</TableCell>
              <TableCell align="right">{row.blue}</TableCell>\
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);