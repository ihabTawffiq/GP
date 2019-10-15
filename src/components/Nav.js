import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import red from '@material-ui/core/colors/red';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const primary = red[500]; // #F44336


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          
         <Link to="/login"><Button >Login</Button> </Link>
         <Link to="/signup"> <Button>Sigup</Button> </Link>
          <Link to="/home"> <Button >Home</Button> </Link>
          <Link to="/addteacher"> <Button >Addteacher</Button> </Link>
          <Link to="/addstudentaffairs"> <Button >Addstd</Button> </Link>
          <Link to="/addcontrolemp"> <Button >Addcontrolemp</Button> </Link>
          <Link to="/addworkersaffair"> <Button >Addworkersaffair</Button> </Link>

        
        </Toolbar>
      </AppBar>
    </div>
  );
}