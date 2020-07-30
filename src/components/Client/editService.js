import React, { useState } from 'react';

import '../../App.css';

import prepago  from '../../assets/images/resources/icono-prepago.png';
import escort  from '../../assets/images/resources/icono-escort.png';
import show_strip  from '../../assets/images/resources/icono-show-striptease.png';
import amanecida  from '../../assets/images/resources/icono-amanecida.png';
import videollamada  from '../../assets/images/resources/icono-videochat.png';

import SwitchButton from '../common/Switch';


function App() {

  return (

      <div>
        <div className="d-flex border-b w-100 py-3">
          <div className="">
            <div className="App-Question--x2 font-weight-bold">Atiendo a</div>
          </div>
          <div className="ml-auto my-auto">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        <div className="d-flex border-b w-100 py-3">
          <div className="">
            <div className="App-Question--x2 font-weight-bold">¿Qué días trabajo?</div>
          </div>
          <div className="ml-auto my-auto">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        <div className="d-flex border-b w-100 py-3">
          <div className="">
            <div className="App-Question--x2 font-weight-bold">¿Qué días trabajo?</div>
          </div>
          <div className="ml-auto my-auto">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        <div className="d-flex border-b w-100 py-3">
          <div className="">
            <div className="App-Question--x2 font-weight-bold">¿Dónde atenderé?</div>
          </div>
          <div className="ml-auto my-auto">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        <div className="d-flex w-100 py-3">
          <img src={prepago} className="img-icon-48 mr-2" />
          <div className="">
            <div className="App-Question--x2 font-weight-bold">¿Dónde atenderé?</div>
          </div>
          <div className="ml-auto my-auto">
            <SwitchButton 
              outerClass = "cus-switch"  
              switchButtonID = "demoID" 
              inputClass = ""
              helperClass = ""
            />
          </div>
        </div>

        <div className="bg-trans-black w-100 py-3 rounded">
          <div className="d-flex border-b py-2 mx-3">
            <div className="text-gray">30 Minutos</div>
            <div className="ml-auto my-auto">
              <span className="text-pink mr-3">$95,000</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="d-flex py-2 mx-3">
            <div className="text-gray">1 Hora</div>
            <div className="ml-auto my-auto">
              <span className="text-pink mr-3">$150,000</span>
              <i className="fas fa-chevron-right"></i>
            </div>
          </div>
        </div>

        <div className="d-flex w-100 py-3">
          <img src={escort} className="img-icon-48 mr-2" />
          <div className="">
            <div className="App-Question--x2 font-weight-bold">Escort</div>
          </div>
          <div className="ml-auto my-auto">
            <SwitchButton 
              outerClass = "cus-switch"  
              switchButtonID = "demoID1" 
              inputClass = ""
              helperClass = ""
            />
          </div>
        </div>

        <div className="d-flex w-100 py-3">
          <img src={show_strip} className="img-icon-48 mr-2" />
          <div className="">
            <div className="App-Question--x2 font-weight-bold">Show Striptease</div>
          </div>
          <div className="ml-auto my-auto">
            <SwitchButton 
              outerClass = "cus-switch"  
              switchButtonID = "demoID2" 
              inputClass = ""
              helperClass = ""
            />
          </div>
        </div>

        <div className="d-flex w-100 py-3">
          <img src={amanecida} className="img-icon-48 mr-2" />
          <div className="">
            <div className="App-Question--x2 font-weight-bold">Amanecida</div>
          </div>
          <div className="ml-auto my-auto">
            <SwitchButton 
              outerClass = "cus-switch"  
              switchButtonID = "demoID3" 
              inputClass = ""
              helperClass = ""
            />
          </div>
        </div>

        <div className="d-flex w-100 py-3">
          <img src={videollamada} className="img-icon-48 mr-2" />
          <div className="">
            <div className="App-Question--x2 font-weight-bold">Videollamada</div>
          </div>
          <div className="ml-auto my-auto">
            <SwitchButton 
              outerClass = "cus-switch"  
              switchButtonID = "demoID4" 
              inputClass = ""
              helperClass = ""
            />
          </div>
        </div>

      </div>
  
  )
}

export default App;
