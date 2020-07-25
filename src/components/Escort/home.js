import React from 'react';
import '../../App.css';
import logo from '../../assets/images/design/logo-vertical.png';
import background from '../../assets/images/design/background.jpg';
import moneda from '../../assets/images/resources/eroscoin.png';
import clockIcon  from '../../assets/images/resources/icon-clock.png';

import Config from "../../helpers/config";

import Topbar from './topbar';
import IconSlideUp from '../common/IconSlideUp';
import SwitchButton from '../common/Switch';

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'escort/setting';
  }

  return (
    <div>

      <Topbar></Topbar>

      <div className="App-LogoCenter App-splash" style={divBackground}>

        <div className="container mt-auto">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row justify-content-center">
                <div className="col-7 col-sm-4 text-center">
                  <img className="img-fluid" src={logo} alt="ErosApp"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-auto pb-5">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="d-flex border-b pb-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <div className="btn btn-primary text-white text-decoration-none">
                    Retirar
                  </div>
                </div>
              </div>

              <div className="d-flex pt-3">
                <i className="fas fa-briefcase fs-xxl text-white ml-2"></i>
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    Disponible
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <SwitchButton 
                    outerClass = "cus-switch"  
                    switchButtonID = "demoID" 
                    inputClass = ""
                    helperClass = ""
                  />
                </div>
              </div>
              <div className="text-gray">
                Si esta desactivado, tu perfil no estará disponible para prestar servicios.
              </div>
            </div>
          </div> 
        </div>
      

      </div>
      
      <IconSlideUp clickHandler={clickHandler}></IconSlideUp>

    </div>
    
  );
}

export default App;
