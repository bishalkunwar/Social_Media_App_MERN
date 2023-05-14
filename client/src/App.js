import React from 'react';
import {Container} from "@material-ui/core";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "./components/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {

  return (

    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auth" exact component={Auth}/>

          </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;

{/* <Route path="/auth" exact component={auth}/> */}

// Grow Component adds a Grow animation to a child element or component
// The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.