import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HotelRegister0 from './hotel/Register0';
import HotelRegister1 from './hotel/Register1';
import HotelRegister2 from './hotel/Register2';
import HotelRegister3 from './hotel/Register3';
import HotelRegister4 from './hotel/Register4';
import HotelRegister5 from './hotel/Register5';
import HotelRegister6 from './hotel/Register6';

import ClientRegister0 from './client/Register0';
import ClientRegister1 from './client/Register1';
import ClientRegister2 from './client/Register2';
import ClientRegister3 from './client/Register3';
import ClientRegister4 from './client/Register4';
import ClientRegister5 from './client/Register5';
import ClientRegister6 from './client/Register6';

import Escort from "../InSession/Escort";
import Cliente from "../InSession/Cliente";
import Hotel from "../InSession/Hotel";

class App extends React.Component {

  componentDidMount() {
    this.lastPage()
  }

  componentWillUnmount() {
    this.lastPage()
  }

  lastPage=()=>{

  }

  callbackRedirect=(data)=>{
    //console.log(data);
    //document.location.href  =   Config.ConfigAppUrl+store.get("lastPage");
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/register/hotel0" render={()=><HotelRegister0/>}/>
          <Route exact path="/register/hotel1" render={()=><HotelRegister1/>}/>
          <Route exact path="/register/hotel2" render={()=><HotelRegister2/>}/>
          <Route exact path="/register/hotel3" render={()=><HotelRegister3/>}/>
          <Route exact path="/register/hotel4" render={()=><HotelRegister4/>}/>
          <Route exact path="/register/hotel5" render={()=><HotelRegister5/>}/>
          <Route exact path="/register/hotel6" render={()=><HotelRegister6/>}/>
          
          <Route exact path="/register/client0" render={()=><ClientRegister0/>}/>
          <Route exact path="/register/client1" render={()=><ClientRegister1/>}/>
          <Route exact path="/register/client2" render={()=><ClientRegister2/>}/>
          <Route exact path="/register/client3" render={()=><ClientRegister3/>}/>
          <Route exact path="/register/client4" render={()=><ClientRegister4/>}/>
          <Route exact path="/register/client5" render={()=><ClientRegister5/>}/>
          <Route exact path="/register/client6" render={()=><ClientRegister6/>}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
