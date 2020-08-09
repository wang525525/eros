import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import winImg from '../../assets/images/resources/win.png';
import chatImg from '../../assets/images/resources/chat.png';
import smsImg from '../../assets/images/resources/sms.png';
import instagramImg from '../../assets/images/resources/instagram.png';
import facebookImg from '../../assets/images/resources/facebook.png';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoHome(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/home';
  }

  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoHome} name={'Refiere y gana'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7 fs-xl">

              <div className="row justify-content-center">
                <div className="col-6 col-sm-6 text-center mt-5">
                  <img className="img-fluid" src={winImg} alt="ErosApp"/>
                </div>
              </div>
              
              <div className="row justify-content-center mt-5">
                <div className="col-12 col-sm-12 text-center">
                  <div className="App-Question text-center">
                    Vaya, aún no tienes bonos.
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-12 col-sm-12 text-center">
                  <div className="fs-xl text-center">
                    ¡Gana el 10% del primer servicio que preste o tome tu referido!
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-3">
                <div className="col-3 text-center">
                  <div className="fs-n text-center">
                    <img className="img-icon-100 rounded" src={chatImg} alt="ErosApp"/>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="fs-n text-center">
                    <img className="img-icon-100 rounded" src={smsImg} alt="ErosApp"/>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="fs-n text-center">
                    <img className="img-icon-100 rounded" src={instagramImg} alt="ErosApp"/>
                  </div>
                </div>
                <div className="col-3 text-center">
                  <div className="fs-n text-center">
                    <img className="img-icon-100 rounded" src={facebookImg} alt="ErosApp"/>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
