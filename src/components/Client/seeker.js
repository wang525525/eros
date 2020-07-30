import React, { useState } from 'react';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import serviceImg from '../../assets/images/resources/icono-services.png';
import moneyImg from '../../assets/images/resources/icono-money.png';
import settingImg from '../../assets/images/resources/icon-setting.png';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const  inputsDefault  = {
  cirugias:{
    "Senos":false,
    "Cola":false,
    "Lipoescultura":false,
    "Bichectomia":false,
  }
}

function App() {

  const [inputs, setInputs] =   useState(inputsDefault);

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  function gotoSearch(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/search';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Buscador'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 ">
                  <div className="input-group mb-3">
                    
                    <input autoComplete="off" type="text" name="name" className="form-control" placeholder="¿Que deseas buscar?" required/>
                    <div className="input-group-append bg-primary" onClick={gotoSearch}>
                      <div className="my-auto px-2">
                        <i className="fas fa-search"></i>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <img src={serviceImg} className="img-icon-32 mr-2" />
                    Por servicio:
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="input-group mb-3">
                    <select className="form-control" name="type_identity_document">
                      <option value="Prepago">Prepago</option>
                      <option value="Escort">Escort</option>
                      <option value="ShowStriptease">Show Striptease</option>
                      <option value="Amanecida">Amanecida</option>
                      <option value="Videochat">Videochat</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <img src={moneyImg} className="img-icon-32 mr-2" />
                    Por precio:
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="input-group mb-3">
                    <select className="form-control" name="price">
                      <option value="100">$100,000 - $200,000</option>
                      <option value="200">$200,000 - $300,000</option>
                      <option value="300">$300,000 - $400,000</option>
                      <option value="400">$400,000 - $500,000</option>
                      <option value="500">$500,000 - $600,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <img src={settingImg} className="img-icon-32 mr-2" />
                    Busqueda avanzada
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col-6">
                  <div className="App-Question--x2">
                    Edad:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="age">
                      <option value="18">18 - 25</option>
                      <option value="25">25 - 30</option>
                      <option value="30">30 - 35</option>
                      <option value="35">Mayores de 35</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="App-Question--x2">
                    Nacionalidad:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="nationality">
                      <option value="Venezuela">Venezuela</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Chile">Chile</option>
                      <option value="Peru">Peru</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-6">
                  <div className="App-Question--x2">
                    Género:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="gender">
                      <option value="Mujeres">Mujeres</option>
                      <option value="Hombre">Hombre</option>
                      <option value="Lesbiana">Lesbiana</option>
                      <option value="Gay">Gay</option>
                      <option value="Trans">Trans</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="App-Question--x2">
                    Contextura:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="contexture">
                      <option value="Claro">Claro</option>
                      <option value="Mestizo">Mestizo</option>
                      <option value="Oscuro">Oscuro</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-6">
                  <div className="App-Question--x2">
                    Tono de piel:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="skintone">
                      <option value="Claro">Claro</option>
                      <option value="Mestizo">Mestizo</option>
                      <option value="Oscuro">Oscuro</option>
                    </select>
                  </div>
                </div>
                <div className="col-6">
                  <div className="App-Question--x2">
                    Cabello:
                  </div>
                  <div className="input-group mb-3">
                    <select className="form-control" name="hair">
                      <option value="Negro">Negro</option>
                      <option value="Castaño">Castaño</option>
                      <option value="Rubio">Rubio</option>
                      <option value="Rojizo">Rojizo</option>
                    </select>
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
