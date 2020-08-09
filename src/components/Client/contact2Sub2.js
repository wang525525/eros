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

  function gotoPayHome(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2sub3';
  }

  function gotoSubContact(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  function gotoNext(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact3';
  }
  return (
    <div>
      
      <div className="App-LogoCenter App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoSubContact} name={'Contratar'}></TopbarSimple>
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
  
              <div className="row justify-content-center background-gray m-2 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="fs-l mt-1">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-primary w-50 mr-2" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-50 ml-2" onClick={gotoNext}>Acceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 mt-5 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="fs-l mt-1">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-primary w-50 mr-2" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-50 ml-2" onClick={gotoNext}>Acceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 mt-5 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="fs-l mt-1">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-primary w-50 mr-2" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-50 ml-2" onClick={gotoNext}>Acceptar</button>
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
