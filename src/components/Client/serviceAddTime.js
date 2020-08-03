import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import mins15Img from '../../assets/images/resources/15-mins.png';
import mins30Img from '../../assets/images/resources/30-mins.png';
import mins45Img from '../../assets/images/resources/45-mins.png';
import mins60Img from '../../assets/images/resources/60-mins.png';
import minsBadgeImg from '../../assets/images/resources/mins-badge.png';
import moneda from '../../assets/images/resources/eroscoin.png';
import clockImg from '../../assets/images/resources/clock.png';
import checkImg from '../../assets/images/resources/icono-exitoso.png';


import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [checkModal, setCheckModal] = useState(false);
  const toggleCheck = () => setCheckModal(!checkModal);

  function gotoServiceAddTime(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/serviceadd';
  }
  
  function acceptService(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoCheck(e) {
    e.preventDefault();
    setModal(false);
    setCheckModal(true);
  }

  function gotoPay(e) {
    e.preventDefault();
    setCheckModal(false);
    window.location.href = Config.ConfigAppUrl + 'client/servicepay';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoServiceAddTime} name={'Agregar tiempo'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row justify-content-center set_width_container">
                <div className="col-12 mt-5 text-center">
                  <span className="text-morado fs-xl">
                    ¿Cuanto tiempo quieres agregar?
                  </span>
                </div>
              </div>
              
              <div className="row">

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins15Img} alt="mins-15-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-48" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 fs-n">
                        $50
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left fs-n">
                        COP $25.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins30Img} alt="mins-30-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-48" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 fs-n">
                        $100
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left fs-n">
                        COP $50.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins45Img} alt="mins-45-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-48" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 fs-n">
                        $150
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left fs-n">
                        COP $75.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins60Img} alt="mins-60-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-48" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 fs-n">
                        $200
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left fs-n">
                        COP $100.000
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="d-flex pt-4 pb-2">
                <button className="btn btn-primary w-100 fs-xl py-3" onClick={acceptService}>
                  <i className="fas fa-stop text-white pr-2"></i>
                  Terminar servicio
                </button>
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
              <div className="d-flex pb-2">
                <img src={clockImg} alt="P" className="img-icon-100 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">
                  ¡Paciencia!
                </span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  <span className="text-morado">Sexy20</span> esta confirmando tu solicitud.
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={gotoCheck}>OK</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

      {/* Modal START */}
      <Modal isOpen={checkModal} toggle={toggleCheck} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={checkImg} alt="P" className="img-icon-100 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">
                  ¡Paciencia!
                </span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  <span className="text-morado">Sexy20</span> esta confirmando tu solicitud.
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-secondary w-50 py-3 mr-2 fs-l" onClick={toggleCheck}>Cancelar</button>
                <button className="btn btn-primary w-50 py-3 ml-2 fs-l" onClick={gotoPay}>Pagar</button>
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
