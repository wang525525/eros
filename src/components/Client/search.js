import React, {useState} from 'react';
import '../../App.css';

import background from '../../assets/images/design/bg-erosapp-clientes.png';
import girlImg from '../../assets/images/design/image-girl.jpg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {
  
  function gotoSeeker(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/seeker';
  }

  return (
    <div>
      
      <div className="App-LogoCenter App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoSeeker} name={'Search'}></TopbarSimple>
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
  
              <div className="row justify-content-center background-gray m-2 p-3 rounded">
                <div className="col-sm-12 rounded d-flex">
                  <div className="d-flex my-auto">
                    <img src={girlImg} className="img-icon-48 rounded mr-2" />
                  </div>
                  <div className="fs-l">
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
                  <div className="fs-l">
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
                  <div className="fs-l">
                    <span className="d-flex text-morado">¡Carla10 le interesa tu solicitud!</span>
                    <span className="d-flex text-pink">Ver perfil</span>
                  </div>
                </div>
                <div className="col-sm-12 rounded d-flex pt-2 fs-n">
                  <button className="btn btn-secondary w-50 mr-2">Rechazar</button>
                  <button className="btn btn-primary w-50 ml-2">Acceptar</button>
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
