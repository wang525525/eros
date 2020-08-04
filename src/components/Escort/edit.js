import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import serviceImg from '../../assets/images/resources/icoon-service.png';
import userImg from '../../assets/images/resources/icono-user.png'
import cameraImg from '../../assets/images/resources/icono-camera.png';
import currencyImg from '../../assets/images/resources/icono-money.png';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

import EditService from "./editService";
import EditUser from "./editUser";
import EditCamera from "./editCamera";
import EditCurrency from "./editCurrency";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoEscort(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoEscort} name={'Editar información'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <Tabs>
                <Tab active={true} value="service" header={
                    <img src={serviceImg} className="img-icon-32" />
                  }
                >

                  <EditService></EditService>

                </Tab>

                <Tab value="user" header={
                    <img src={userImg} className="img-icon-32" />
                  }
                >

                  <EditUser></EditUser>

                </Tab>

                <Tab value="camera" header={
                    <img src={cameraImg} className="img-icon-32" />
                  }
                >

                  <EditCamera></EditCamera>

                </Tab>

                <Tab value="currency" header={
                    <img src={currencyImg} className="img-icon-32" />
                  }
                >

                  <EditCurrency></EditCurrency>

                </Tab>

              </Tabs>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
