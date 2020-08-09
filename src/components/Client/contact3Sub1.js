import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';

import background from '../../assets/images/design/bg-escort.jpeg';
import clientImg from '../../assets/images/design/image-default.jpg';
import logo from '../../assets/images/resources/icon-eroscoin.png';
import moneda from '../../assets/images/resources/eroscoin.png';
import payImg from '../../assets/images/resources/icono-tarjeta-credito.png';

import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState'

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function gotoPrev(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact3';
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoClient(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoPrev} name={'Contratar'}></TopbarSimple>
        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7 pt-3">

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
                  <button className="btn btn-primary text-white text-decoration-none" onClick={showModal}>
                    Recargar
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
                  <button className="btn btn-primary text-white text-decoration-none" onClick={showModal}>
                    Recargar
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
                  <button className="btn btn-primary text-white text-decoration-none" onClick={showModal}>
                    Recargar
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
                  <button className="btn btn-primary text-white text-decoration-none" onClick={showModal}>
                    Recargar
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

      {/* Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bold">
                  ¡Tu recarga ha sido exitosa!
                </span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-white fs-l font-weight-bold">
                  Tu billetera ha sido cargada con <span className="text-pink">EC $1000</span>
                </span>
              </div>
              
              <div className="d-flex">
                <button className="btn btn-primary w-100 py-3" onClick={gotoClient}>Acceptar</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

    </div>

  )
}

export default App;
