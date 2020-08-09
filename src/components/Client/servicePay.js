import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import confirmImg from '../../assets/images/resources/modal-icon-ok.png';
import moneda from '../../assets/images/resources/eroscoin.png';
import clientImg from '../../assets/images/design/image-default.jpg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoServiceAdd(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/serviceadd';
  }

  function payService(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/servicepay2';
  }

  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoServiceAdd} name={'Pagar'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center set_width_container">
                <div className="col-12 mt-5 text-center">
                  <span className="text-morado fs-xxl">
                    ¿Cómo quieres pagar?
                  </span>
                </div>
              </div>


              <div className="App-form-register row justify-content-center">
                <div className="col-12 col-sm-12 text-left mt-3 border-b">
                  <div className="input-group mb-3 border-active rounded">
                    <div className="col-6 label label-group d-flex" >
                      <img src={moneda} className="img-icon-48 mr-2 my-auto" />
                      <div className="my-auto">
                        <span className="text-morado fs-xl">Eroscoin</span>
                      </div>
                    </div>
                    <input  autoComplete="off"
                      type="text"
                      name="eroscoin"
                      className="form-control text-right"
                      />
                  </div>

                  <div className="input-group my-3 border-grey rounded">
                    <div className="col-6 label label-group d-flex" >
                      <i className="fas fa-money-bill-alt text-gray mr-3 my-auto fs-xxl"></i>
                      <div className="my-auto">
                        <span className="text-morado fs-xl">Efectivo</span>
                      </div>
                    </div>
                    <input  autoComplete="off"
                      type="text"
                      name="efectivo"
                      className="form-control text-right"
                      />
                  </div>

                </div>
              </div>
              
              <div className="d-flex pt-3">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100 Eroscoin
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>

                <div className="my-auto ml-auto">
                  <button className="btn btn-primary text-white text-decoration-none">
                    Retirar
                  </button>
                </div>
              </div>

              <div className="d-flex pt-4 pb-4 border-b">
                <button className="btn btn-secondary w-100 text-pink fs-xl py-3">
                  Recarga tu saldo
                </button>
              </div>

              <div className="d-flex pt-3">
                <span className="text-morado fs-l font-weight-bold">Detalles del pago</span>
              </div>

              <div className="App-form-register row justify-content-center">
                <div className="col-12 col-sm-12 text-left mt-3">
                  <div className="input-group mb-3 rounded p-2">
                    <div className="col-6 label label-group" >
                      <span className="text-morado fs-l">45 minutos adicional</span>
                      <div className="d-flex">
                        <span className="text-white fs-n">Valor del servicio</span>
                      </div>
                    </div>
                    <div className="col-6 label label-group text-right" >
                      <span className="text-morado text-right fs-l">$150</span>
                      <div className="text-right">
                        <span className="text-pink fs-n">COP $75,000</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="d-flex pt-3">
                <button className="btn btn-secondary w-50 mr-2 py-3">Cancelar</button>
                <button className="btn btn-primary w-50 ml-2 py-3" onClick={payService}>Pagar</button>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>

  )
}

export default App;
