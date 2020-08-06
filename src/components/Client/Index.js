import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Setting from "./setting";
import Seeker from "./seeker";
import Contact from "./contact";
import Contact2 from "./contact2";
import Contact2Sub1 from "./contact2Sub1";
import Contact2Sub2 from "./contact2Sub2";
import Contact2Sub3 from "./contact2Sub3";
import Contact3 from "./contact3";
import Contact3Sub1 from "./contact3Sub1";
import Hist from "./history";
import EditProfile from "./edit";
import Configuration from "./config";
import Bonus from "./bonus";
import BonusFull from "./bonusFull";
import Chat from "./chat";
import About from "./about";
import Exit from "./exit";
import Notification from "./notification";
import Search from "./search";
import Details from "./details";
import Refer from "./refer";
import ServiceDuration from "./serviceDuration";
import ServiceAddTime from "./serviceAddTime";
import ServicePay from "./servicePay";
import ServicePay2 from "./servicePay2";


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
          <Route exact path="/client/contact2sub3" render={()=><Contact2Sub3/>}/>
          <Route exact path="/client/contact3" render={()=><Contact3/>}/>
          <Route exact path="/client/contact3sub1" render={()=><Contact3Sub1/>}/>
          <Route exact path="/client/hist" render={()=><Hist/>}/>
          <Route exact path="/client/details" render={()=><Details/>}/>
          <Route exact path="/client/edit" render={()=><EditProfile/>}/>
          <Route exact path="/client/config" render={()=><Configuration/>}/>
          <Route exact path="/client/bonus" render={()=><Bonus/>}/>
          <Route exact path="/client/bonusfull" render={()=><BonusFull/>}/>
          <Route exact path="/client/chat" render={()=><Chat/>}/>
          <Route exact path="/client/about" render={()=><About/>}/>
          <Route exact path="/client/exit" render={()=><Exit/>}/>
          <Route exact path="/client/notification" render={()=><Notification/>}/>
          <Route exact path="/client/search" render={()=><Search/>}/>
          <Route exact path="/client/refer" render={()=><Refer/>}/>
          <Route exact path="/client/serviceduration" render={()=><ServiceDuration/>}/>
          <Route exact path="/client/serviceadd" render={()=><ServiceAddTime/>}/>
          <Route exact path="/client/servicepay" render={()=><ServicePay/>}/>
          <Route exact path="/client/servicepay2" render={()=><ServicePay2/>}/>

          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
