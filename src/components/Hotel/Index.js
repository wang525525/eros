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
          <Redirect exact from="/hotel" to="/hotel/home" />

          <Route exact path="/hotel/home" render={()=><Home/>}/>
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
