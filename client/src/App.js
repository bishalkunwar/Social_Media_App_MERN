import React, {useState, useEffect}from 'react';
import {Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import ppp from "./images/ppp.jpeg";
import useStyles from './styles';
import {getPosts} from "./actions/posts";


// useDispatch() ​: This hook returns a reference to the dispatch function from the Redux store
// useEffect() : By using this Hook, you tell React that your component needs to do something after render.
// use apply dispatch always inside useeffect.
// useState(): allows you to add state to a functional component
const App = () => {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading}> MEMORIES </Typography>
          <img className={classes.image} src={ppp} alt="memoryphoto" height="60"/>
        
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/> 
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>  
      </Grow>
    </Container>
  );
};

export default App;


// Grow Component adds a Grow animation to a child element or component
// The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.