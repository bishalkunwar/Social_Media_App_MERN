import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import decode from "jwt-decode";

// import * as actionTypes from "../../constants/actionTypes";
import ppp from "../../images/ppp.jpeg";
import useStyles from "./styles";

const Navbar = () => {

    const classes = useStyles();
    const user = null;

    const logout=()=>{
      
    };

    return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
            <Typography  component={Link} to="/" className={classes.heading} > MEMORIES </Typography>
            <img className={classes.image} src={ppp} alt="memoryphoto" height="60"/>
        </div>

        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant='h6'>{user?.result.name}</Typography>
              <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>LogOut</Button>

            </div>
          ) : (
            <Button component={Link} to="/auth"  variant="contained" color="primary" > SignIn</Button>
            ) }
        </Toolbar>
    </AppBar>
  )
};

export default Navbar;


// component={Link} to="/auth"