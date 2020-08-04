import React, { useState } from 'react';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import logo from '../../assets/images/design/logo-vertical.png';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {

  function gotoClient(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/home';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoClient} name={'Notification'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7 pt-3">

              <div className="row justify-content-center mt-5 ">
                <div className="col-12">
                  <div className="leter text-left  text-fucsia background-text3 p-2 ">Hoy</div>
                </div>
              </div>

              <div className="row justify-content-center mt-3 m-0">
                <div className="col-12 d-flex p-0 border-b">
                  <img src={girlImg} alt="P" className="img-icon-54 rounded mr-2 mt-2" />
                  <div className="">
                    <div className="App-Question--x2 ">Luis$</div>
                    <div className="text-gray ">Solicito el servicio escort para
                    la fecha 10/2/20 desde las 10:00pm hasta las 11:00pm.
                    </div>
                    <div className="App-Question--x2  text-fucsia mt-2 mb-3">Eliminar</div>
                  </div>
                </div>

                <div className="col-12 d-flex p-0">
                  <img src={girlImg} alt="P" className="img-icon-54 rounded mr-2 mt-2" />
                  <div className="">
                    <div className="App-Question--x2 ">Luis$</div>
                    <div className="text-gray ">Solicito el servicio escort para
                    la fecha 10/2/20 desde las 10:00pm hasta las 11:00pm.
                    </div>
                    <div className="App-Question--x2  text-fucsia mt-2 mb-3">Eliminar</div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-5 ">
                <div className="col-12">
                  <div className="leter text-left  text-fucsia background-text3 p-2 ">Hoy</div>
                </div>
              </div>

              <div className="row justify-content-center mt-3 m-0">
                <div className="col-12 d-flex p-0 border-b">
                  <img src={logo} alt="P" className="img-icon-54 rounded mr-2 mt-2" />
                  <div className="">
                    <div className="App-Question--x2 ">Administrador</div>
                    <div className="text-gray ">
                      Hola Sexy20, bienvenida a la plataforma Erosapp! Ya puedes empezar a ofrecer tus servicios.
                    </div>
                    <div className="App-Question--x2  text-fucsia mt-2 mb-3">Eliminar</div>
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
