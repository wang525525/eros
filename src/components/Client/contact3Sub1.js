import React, { useState } from 'react';

import '../../App.css';

import background from '../../assets/images/design/bg-escort.jpeg';
import clientImg from '../../assets/images/design/image-default.jpg';
import logo from '../../assets/images/resources/icon-eroscoin.png';
import moneda from '../../assets/images/resources/eroscoin.png';

import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState'

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {
  const context               =   React.useContext(StateContext);
  
  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  function gotoNext(e) {
    e.preventDefault();
    let modal = {
      status:true,
      title:"¡Tu solicitud ha sido exitosa!",
      message:"Tu billetera ha sido cargada con EC $1000",
      ico:{
            contentColor:"modal-ico-bg-primary",
            ico:'fas fa-check pl-1',
          },
      customButtom:{
        link:Config.ConfigAppUrl+"client/home",
      }
    }

    context.setState({dialog:modal})
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

              <div className="row justify-content-center">
                <div className="col-4 text-center mt-5">
                  <img className="img-fluid" src={logo} alt="ErosApp"/>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-12 mt-4">
                  <div className="background-text rounded">
                    <div className="d-flex border-b p-2">
                      <img src={clientImg} alt="P" className="img-icon-54 rounded" />
                      <div className="pl-3 my-auto">
                        <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                          Lucho$, 38
                        </div>
                      </div>
                    </div>
                    
                    <div className="d-flex p-2">
                      <img src={moneda} alt="P" className="img-icon-54" />
                      <div className="pl-3 my-auto">
                        <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                          Mi saldo
                        </div>
                      </div>
                      <div className="ml-auto mt-auto mb-auto">
                        <div className="text-left App-Question--x2 tamano-texto-interno2 text-right">
                          $100
                        </div>
                        <div className="App-Question--x2 tamano-texto-interno text-fucsia text-right">
                          COP $50.000
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="text-center py-2">
                <span className="fs-xl text-morado">¿Cuánto deseas recargar?</span>
              </div>

              <div className="d-flex border-b py-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100 Eroscoin
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <button className="btn btn-primary text-white text-decoration-none" onClick={gotoNext}>
                    Retirar
                  </button>
                </div>
              </div>

              <div className="d-flex border-b py-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100 Eroscoin
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <button className="btn btn-primary text-white text-decoration-none" onClick={gotoNext}>
                    Retirar
                  </button>
                </div>
              </div>

              <div className="d-flex border-b py-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100 Eroscoin
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <button className="btn btn-primary text-white text-decoration-none" onClick={gotoNext}>
                    Retirar
                  </button>
                </div>
              </div>

              <div className="d-flex py-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100 Eroscoin
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <button className="btn btn-primary text-white text-decoration-none" onClick={gotoNext}>
                    Retirar
                  </button>
                </div>
              </div>
              
              <div className="row justify-content-center mt-4">
                <div className="col-sm-12">
                  <ProgressBar curPoint={2}></ProgressBar>
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
