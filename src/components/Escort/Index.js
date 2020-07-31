import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Setting from "./setting";
import Notification from "./notification";
import Configuration from "./config";
import Edit from "./edit";
import History from "./history";
import ServiceDetails from "./serviceDetails";
import Bonus from "./bonus";
import About from "./about";
import Exit from "./exit";
import Chat from "./chat";
import ServiceDuration from "./serviceDuration";
import ServiceAddTime from "./serviceAddTime";
import ServicePay from "./servicePay";
import Refer from "./refer";

class App extends React.Component {

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/escort/home" render={()=><Home/>}/>
          <Route exact path="/escort/setting" render={()=><Setting/>}/>
          <Route exact path="/escort/notification" render={()=><Notification/>}/>
          <Route exact path="/escort/config" render={()=><Configuration/>}/>
          <Route exact path="/escort/edit" render={()=><Edit/>}/>
          <Route exact path="/escort/hist" render={()=><History/>}/>
          <Route exact path="/escort/details" render={()=><ServiceDetails/>}/>
          <Route exact path="/escort/bonus" render={()=><Bonus/>}/>
          <Route exact path="/escort/about" render={()=><About/>}/>
          <Route exact path="/escort/exit" render={()=><Exit/>}/>
          <Route exact path="/escort/chat" render={()=><Chat/>}/>
          <Route exact path="/escort/serviceduration" render={()=><ServiceDuration/>}/>
          <Route exact path="/escort/serviceadd" render={()=><ServiceAddTime/>}/>
          <Route exact path="/escort/servicepay" render={()=><ServicePay/>}/>
          <Route exact path="/escort/refer" render={()=><Refer/>}/>

          <Redirect to="/error" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
