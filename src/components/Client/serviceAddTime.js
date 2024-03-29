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

  function gotoServiceAddTime(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/serviceadd';
  }
  
  function acceptService(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoPay(e) {
    e.preventDefault();
    setModal(false);
    window.location.href = Config.ConfigAppUrl + 'client/servicepay2';
  }

  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoServiceAddTime} name={'Agregar tiempo'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center set_width_container">
                <div className="col-12 mt-5 text-center">
                  <span className="text-morado fs-xxl">
                    ¿Cuanto tiempo quieres agregar?
                  </span>
                </div>
              </div>
              
              <div className="row">

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins15Img} alt="mins-15-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-54 my-auto" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 fs-xl">
                        $50
                      </div>
                      <div className="App-Question--x2 text-fucsia text-left fs-xl">
                        COP $25.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins30Img} alt="mins-30-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-54 my-auto" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 fs-xl">
                        $100
                      </div>
                      <div className="App-Question--x2 text-fucsia text-left fs-xl">
                        COP $50.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins45Img} alt="mins-45-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-54 my-auto" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 fs-xl">
                        $150
                      </div>
                      <div className="App-Question--x2 text-fucsia text-left fs-xl">
                        COP $75.000
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <img className="img-fluid img-round-border" src={mins60Img} alt="mins-60-img" />
                  <div className="d-flex pt-3 pb-2">
                    <img src={moneda} alt="P" className="img-icon-54 my-auto" />
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 fs-xl">
                        $200
                      </div>
                      <div className="App-Question--x2 text-fucsia text-left fs-xl">
                        COP $100.000
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="d-flex pt-4 pb-2">
                <button className="btn btn-primary w-100 py-3" onClick={acceptService}>
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
                <img src={checkImg} alt="P" className="img-icon-100 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  <span className="text-morado">Sexy20</span> ha confirmado tu solicitud.
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-secondary w-50 py-3 mr-2" onClick={toggle}>Cancelar</button>
                <button className="btn btn-primary w-50 py-3 ml-2" onClick={gotoPay}>Pagar</button>
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
