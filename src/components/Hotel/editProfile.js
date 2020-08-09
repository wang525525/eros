import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

import EditDescription from "./editDescription";
import EditPhotos from "./editPhotos";
import EditBedrooms from "./editBedrooms";

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
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoHotel} name={'Editar información'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <Tabs>
                <Tab active={true} value="bedroom" header="Habitaciones">

                  <EditBedrooms></EditBedrooms>

                </Tab>

                <Tab value="photos" header="Fotos">

                  <EditPhotos></EditPhotos>

                </Tab>

                <Tab value="description" header="Descripción">

                  <EditDescription></EditDescription>

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
