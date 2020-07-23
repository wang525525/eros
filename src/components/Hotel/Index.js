import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Setting from "./setting";
import Hist from "./history";
import EditProfile from "./editProfile";
import Configuration from "./configuration";
import Bonus from "./bonus";
import Chat from "./chat";
import About from "./about";
import Exit from "./exit";
import Sencilla from "./sencilla";

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
          <Route exact path="/hotel/hist" render={()=><Hist/>}/>
          <Route exact path="/hotel/edit" render={()=><EditProfile/>}/>
          <Route exact path="/hotel/config" render={()=><Configuration/>}/>
          <Route exact path="/hotel/bonus" render={()=><Bonus/>}/>
          <Route exact path="/hotel/chat" render={()=><Chat/>}/>
          <Route exact path="/hotel/about" render={()=><About/>}/>
          <Route exact path="/hotel/exit" render={()=><Exit/>}/>
          <Route exact path="/hotel/sencilla" render={()=><Sencilla/>}/>

          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
