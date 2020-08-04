import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import iconMail from '../../assets/images/resources/icon-mail.png';
import background from '../../assets/images/design/bg-escort.jpeg';
import defaultMan from '../../assets/images/design/image-default.jpg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Historial de reservas'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              Exit page
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
