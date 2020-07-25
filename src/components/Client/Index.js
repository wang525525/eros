import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Setting from "./setting";
import Seeker from "./seeker";
import Contact from "./contact";
import Contact2 from "./contact2";
import Contact2Sub1 from "./contact2Sub1";
import Contact2Sub2 from "./contact2Sub2";
import Contact3 from "./contact3";
import Contact3Sub1 from "./contact3Sub1";

class App extends React.Component {

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/client/home" render={()=><Home/>}/>
          <Route exact path="/client/setting" render={()=><Setting/>}/>
          <Route exact path="/client/seeker" render={()=><Seeker/>}/>
          <Route exact path="/client/contact" render={()=><Contact/>}/>
          <Route exact path="/client/contact2" render={()=><Contact2/>}/>
          <Route exact path="/client/contact2sub1" render={()=><Contact2Sub1/>}/>
          <Route exact path="/client/contact2sub2" render={()=><Contact2Sub2/>}/>
          <Route exact path="/client/contact3" render={()=><Contact3/>}/>
          <Route exact path="/client/contact3sub1" render={()=><Contact3Sub1/>}/>

          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
