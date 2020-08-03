import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import moneda from '../../assets/images/resources/eroscoin.png';
import checkImg from '../../assets/images/resources/icono-exitoso.png';
import confirmImg from '../../assets/images/resources/confirm-alert.png';


import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [confirmModal, setConfirmModal] = useState(false);
  const toggleConfirm = () => setConfirmModal(!confirmModal);

  function gotoPrev(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/servicepay';
  }

  function payService(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoConfirm(e) {
    e.preventDefault();
    setModal(false);
    setConfirmModal(true);
  }

  function gotoServiceDuration(e) {
    e.preventDefault();
    setConfirmModal(false);
    window.location.href = Config.ConfigAppUrl + 'client/serviceduration';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoPrev} name={'Pagar'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row justify-content-center set_width_container">
                <div className="col-12 mt-5 text-center">
                  <span className="text-morado fs-xl">
                    ¿Cómo quieres pagar?
                  </span>
                </div>
              </div>


              <div className="App-form-register row justify-content-center">
                <div className="col-12 col-sm-12 text-left mt-3 border-b">
                  <div className="input-group mb-3 border-active rounded">
                    <div className="col-6 label label-group pt-2 d-flex" >
                      <img src={moneda} className="img-icon-32 mr-2 my-auto" />
                      <div className="my-auto">
                        <span className="text-morado fs-n">Eroscoin</span>
                      </div>
                    </div>
                    <input  autoComplete="off"
                      type="text"
                      name="eroscoin"
                      className="form-control text-right"
                      />
                  </div>

                  <div className="input-group my-3 border-grey rounded">
                    <div className="col-6 label label-group pt-2 d-flex" >
                      <i className="fas fa-money-bill-alt text-gray mr-2 my-auto fs-xl"></i>
                      <div className="my-auto">
                        <span className="text-morado fs-n">Efectivo</span>
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
                <button className="btn btn-secondary fs-l w-50 mr-2 py-3">Cancelar</button>
                <button className="btn btn-primary fs-l w-50 ml-2 py-3" onClick={payService}>Pagar</button>
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
                <span className="text-morado fs-xxl font-weight-bolder">
                  ¡El pago ha sido exitoso!
                </span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  Puedes continuar con el servicio.
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={gotoConfirm}>Continuar</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

      {/* Notifcation Modal START */}
      <Modal isOpen={confirmModal} toggle={toggleConfirm} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={confirmImg} alt="P" className="img-icon-80 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">
                  ¡El pago no ha sido confirmado!
                </span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  ¿Deseas intentarlo nuevamente?
                </span>
              </div>

              <div className="d-flex">
                <button className="btn btn-secondary w-50 py-3 mr-2 fs-l" onClick={toggleConfirm}>No, terminar</button>
                <button className="btn btn-primary w-50 py-3 ml-2 fs-l" onClick={gotoServiceDuration}>Si</button>
              </div>

            </div>
          </div>

          

        </ModalBody>
      </Modal>
      {/* Notifcation Modal  END */}

    </div>

  )
}

export default App;
