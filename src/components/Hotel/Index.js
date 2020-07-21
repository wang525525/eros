import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Setting from "./setting";

class App extends React.Component {

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/hotel/home" render={()=><Home/>}/>
          <Route exact path="/hotel/setting" render={()=><Setting/>}/>
          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
