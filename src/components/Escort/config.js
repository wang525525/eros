import React, { useState } from 'react';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import clientImg from '../../assets/images/design/image-default.jpg';
import logo from '../../assets/images/design/logo-vertical.png';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {

  function gotoEscort(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoEscort} name={'Configuración'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

              <div className="row justify-content-center mt-5 ">
                <div className="col-12">
                  <div className="leter text-morado p-2">Ajustes</div>
                </div>
              </div>

              <div className="row justify-content-center mt-3 bg-trans-black">
                <div className="col-12 py-2">
                  <div className="d-flex border-b w-100 py-2">
                    <i className="fas fa-user text-pink fs-xl my-auto mr-4"></i>
                    <div className="">
                      <div className="App-Question--x2 ">Usuario</div>
                      <div className="text-gray ">
                        Lucho Quezada
                      </div>
                    </div>
                    <div className="ml-auto my-auto">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="d-flex border-b w-100 py-2">
                    <i className="fas fa-phone-alt text-pink fs-xl my-auto mr-4"></i>
                    <div className="">
                      <div className="App-Question--x2 ">Teléfono</div>
                      <div className="text-gray ">
                        300 000 0000
                      </div>
                    </div>
                    <div className="ml-auto my-auto">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="d-flex border-b w-100 py-2">
                    <i className="far fa-envelope text-pink fs-xl my-auto mr-4"></i>
                    <div className="">
                      <div className="App-Question--x2 ">Correo electronico</div>
                      <div className="text-gray ">
                       info@erosapp.com
                      </div>
                    </div>
                    <div className="ml-auto my-auto">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  <div className="d-flex border-b w-100 py-2">
                    <i className="fas fa-user text-pink fs-xl my-auto mr-4"></i>
                    <div className="">
                      <div className="App-Question--x2 ">Fecha de nacimiento</div>
                      <div className="text-gray ">
                        2020/20/02
                      </div>
                    </div>
                    <div className="ml-auto my-auto">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="row justify-content-center mt-5 ">
                <div className="col-12">
                  <div className="leter text-morado p-2">Contraseña</div>
                </div>
              </div>
              <div className="row justify-content-center mt-3 bg-trans-black">
                <div className="col-12 py-2">
                  <div className="d-flex w-100 py-2">
                    <div className="App-Question--x2 ">Cambiar contraseña</div>
                    <div className="text-gray ml-auto">
                      ........
                    </div>
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
