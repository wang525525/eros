import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";

class App extends React.Component {

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/client/" to="/client/home" />

          <Route exact path="/client/home" render={()=><Home/>}/>
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
