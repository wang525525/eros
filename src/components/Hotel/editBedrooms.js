import React, { useState } from 'react';
import logo from '../../assets/images/resources/erosapp-hotel-pictures.png';

import '../../App.css';

import SwitchButton from '../common/Switch';
import Config from "../../helpers/config";

function App() {

  function gotoSencilla(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/sencilla';
  }
  return (

          <div className="App-form-register container">
            <div className="row justify-content-center">
              <div className="col-sm-12 text-center mt-4">
                <div className="row justify-content-center">
                  <div className="col-6 text-center mt-5">
                    <img className="img-fluid" src={logo} alt="ErosApp"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-sm-12 text-center mt-3">
                <div className="App-Question text-center">Gestionar habitaciones</div>
              </div>
            </div>

            <div className="row justify-content-center ">
              <div className="col-6 text-center mt-3">
                <button className="btn btn-secondary px-4 py-2">
                  <i className="fas fa-trash pr-2 text-pink"></i>
                  Borrar
                </button>
              </div>
              <div className="col-6 text-center mt-3">
                <button className="btn btn-primary px-4 py-2">
                  <i className="fas fa-plus pr-2"></i>
                  Agregar
                </button>
              </div>
            </div>

            <div className="row justify-content-center pt-3">
              <div className="col-sm-12 background-gray py-3 border-b">
                <div className="d-flex pt-3">
                  <i className="far fa-circle my-auto"></i>
                  <div className="pl-3 my-auto">
                    <div className="text-left App-Question--x2 tamano-texto-interno2 cursor" onClick={gotoSencilla}>
                      Sencilla
                    </div>
                  </div>
                  <div className="ml-auto my-auto">
                    <SwitchButton 
                      outerClass = "cus-switch"  
                      switchButtonID = "demoID0" 
                      inputClass = ""
                      helperClass = ""
                    />  
                  </div>
                </div>
              </div>
            
              <div className="col-sm-12 background-gray py-3 border-b">
                <div className="d-flex pt-3">
                  <i className="far fa-circle my-auto"></i>
                  <div className="pl-3 my-auto">
                    <div className="text-left App-Question--x2 tamano-texto-interno2 cursor" onClick={gotoSencilla}>
                      Sencilla
                    </div>
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
              </div>
            
              <div className="col-sm-12 background-gray py-3 border-b">
                <div className="d-flex pt-3">
                  <i className="far fa-circle my-auto"></i>
                  <div className="pl-3 my-auto">
                    <div className="text-left App-Question--x2 tamano-texto-interno2 cursor" onClick={gotoSencilla}>
                      Sencilla
                    </div>
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
              </div>
            
            </div>
          </div>
  
  )
}

export default App;
