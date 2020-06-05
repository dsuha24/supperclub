import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import './AccessibleTable.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function AcccessibleTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        {/* <caption>A basic table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell>{props.firstColumn}</TableCell>
            <TableCell align="right">{props.secondColumn}</TableCell>
            <TableCell align="right">{props.thirdColumn}</TableCell>
            <TableCell align="right">{props.fourthColumn}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.ingredient}
              </TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.units}</TableCell>
              <TableCell align="right">{row.subs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
