import React, {useState} from 'react';
import '../../App.css';
import logo from '../../assets/images/resources/icono-reloj.png';
import background from '../../assets/images/design/bg-erosapp-clientes.png';
import girlImg from '../../assets/images/design/image-girl.jpg';

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
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  return (
    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-LogoCenter App-splash" style={divBackground}>
        
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
  
              <div className="row justify-content-center background-gray m-2 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                    <span className="d-flex text-pink">Ver perfil</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-secondary w-50 mr-2">Rechazar</button>
                  <button className="btn btn-primary w-50 ml-2">Acceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                    <span className="d-flex text-pink">Ver perfil</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-secondary w-50 mr-2">Rechazar</button>
                  <button className="btn btn-primary w-50 ml-2">Acceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                    <span className="d-flex text-pink">Ver perfil</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-secondary w-50 mr-2">Rechazar</button>
                  <button className="btn btn-primary w-50 ml-2">Acceptar</button>
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
