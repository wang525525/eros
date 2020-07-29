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
import clientImg from '../../assets/images/design/image-default.jpg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function gotoServiceDuration(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/serviceduration';
  }
  
  function acceptService(e) {
    e.preventDefault();
    setModal(true);
  }

  function acceptPayment(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/servicepay';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoServiceDuration} name={'Agregar tiempo'}></TopbarSimple>
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

      {/* Notifcation Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={clientImg} alt="P" className="img-icon-80 rounded-circle p-0" />
                <div className="badge-img">
                  <img src={minsBadgeImg} alt="mins" className="rounded-circle" />
                </div>
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">Lucho$</span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-white fs-xl">30 anos</span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-white fs-xl">¡Quiere <span className="text-morado">45 minutos</span> mas contigo!</span>
              </div>

            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-secondary w-50 py-3 fs-l" onClick={toggle}>Rechazar</button>
            <button className="btn btn-primary w-50 py-3 fs-l" onClick={acceptPayment}>Aceptar</button>
          </div>

        </ModalBody>
      </Modal>
      {/* Notifcation Modal  END */}

    </div>

  )
}

export default App;
