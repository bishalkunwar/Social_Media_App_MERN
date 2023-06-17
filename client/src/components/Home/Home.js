import React, {useState, useEffect}from 'react';
import {Container, Grow, Grid, Paper } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
// import useStyles from './styles';
import {getPosts} from "../../actions/posts";
import Pagination from '../Pagination';

// useDispatch() ​: This hook returns a reference to the dispatch function from the Redux store
// useEffect() : By using this Hook, you tell React that your component needs to do something after render.
// use apply dispatch always inside useeffect.
// useState(): allows you to add state to a functional component

const Home = () => {

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/> 
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
                <Paper elevation={6}>
                  <Pagination />
                </Paper>
            </Grid>
          </Grid>
        </Container>  
      </Grow>
    </Container>
  );
};

export default Home;


// Grow Component adds a Grow animation to a child element or component
// The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.