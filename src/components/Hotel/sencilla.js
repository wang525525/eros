import React, { useState } from 'react';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import ItemsDinamics from "./ItemsDinamics";

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
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Sencilla'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 ">
                  <div className="App-Question">Nombre de la habitación</div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 ">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-door-open"></i>
                      </span>
                    </div>
                    <input autoComplete="off" type="text" name="name" className="form-control" placeholder="Nombre del Hotel / Motel" required/>
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 ">
                  <div className="App-Question separator-right">Tarifas</div>
                </div>
              </div>
              <div className="row justify-content-center mt-2">
                <div className="col-6 ">
                  <div className="App-Question--x2">
                    <i className="fas fa-moon text-pink pr-2"></i>
                    Por noche
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="App-Question--x2">
                    <i className="far fa-clock text-pink pr-2"></i>
                    Por hora
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-6 ">
                  <div className="input-group mb-3">
                    <select className="form-control" name="type_identity_document">
                      <option value="100,000">$100,000</option>
                      <option value="200,000">$200,000</option>
                      <option value="300,000">$300,000</option>
                      <option value="400,000">$400,000</option>
                      <option value="500,000">$500,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="input-group mb-3">
                    <select className="form-control" name="type_identity_document">
                      <option value="100,000">$100,000</option>
                      <option value="200,000">$200,000</option>
                      <option value="300,000">$300,000</option>
                      <option value="400,000">$400,000</option>
                      <option value="500,000">$500,000</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 ">
                  <ItemsDinamics
                    name="cirugias"
                    inputs={inputs}
                    setInputs={setInputs}
                    title="Agregar más cirugías"
                    itemsDefault={inputsDefault.cirugias}/>
                </div>
              </div>

              <div className="row justify-content-center ">
                <div className="col-6 text-center mt-3">
                  <button className="btn btn-secondary w-100 py-3">
                    Cancelar
                  </button>
                </div>
                <div className="col-6 text-center mt-3">
                  <button className="btn btn-primary w-100 py-3">
                    Guardar
                  </button>
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
