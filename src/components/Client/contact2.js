import React, {useState} from 'react';
import '../../App.css';
import logo from '../../assets/images/resources/icono-reloj.png';
import background from '../../assets/images/design/bg-erosapp-clientes.png';

import StateContext from '../../helpers/contextState'
import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";
import { func } from 'prop-types';

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {
  const context               =   React.useContext(StateContext);

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  function gotoSubContact(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2sub1';
  }

  return (
    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-LogoCenter App-splash" style={divBackground}>
        
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
  
              <div className="row justify-content-center mt-4 px-4">
                <div className="col-sm-12  background-gray rounded d-flex">
                  <i className="far fa-clock fs-xl text-morado my-auto"></i>
                  <div className="text-gray pl-2 fs-n">
                    El prestador de servicio tendrá un limite de <span className="text-fucsia cursor" onClick={gotoSubContact}>10 minutos&nbsp;</span> 
                    para aceptar o rechazar tu solicitud. Te notificaremos su respuesta
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-5 text-center mt-4">
                    <img className="img-fluid" src={logo} alt="ErosApp"/>
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center mt-4 ">
                <div className="col-11 col-sm-8  ">
                  <div className=" text-center p-2 text-white fs-xxl ">
                    10:00
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center mt-4 ">
                <div className="col-12 col-sm-8  ">
                  <div className=" text-center p-2 text-fuchsia ">
                    Esperando la confirmación del servicio
                  </div>
                </div>
              </div>
            
              <div className="row justify-content-center mt-5">
                <div className="col-sm-12">
                  <ProgressBar curPoint={1}></ProgressBar>
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
