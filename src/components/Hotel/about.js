import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import iconMail from '../../assets/images/resources/icon-mail.png';
import background from '../../assets/images/design/bg-escort.jpeg';
import defaultMan from '../../assets/images/design/image-default.jpg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";

import Accordion from './accordion';

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoSetting(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoSetting} name={'Sobre Eroscort'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <iframe className="mt-3" width="100%" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>

              <div className="d-flex pt-3">
                <Accordion></Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default App;
