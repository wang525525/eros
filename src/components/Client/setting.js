import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import moneda from '../../assets/images/resources/eroscoin.png';
import clientImg from '../../assets/images/design/image-default.jpg';
import exitImg from '../../assets/images/resources/icon-exit.png';

import Config from "../../helpers/config";

import IconSlideDown from '../common/IconSlideDown';
import SettingsContent from "./settingsContent";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

let url_continue = false;

function App() {
  const [gender, setGender] = useState(false)
  const [inputs, setInputs] = useState({
    nationality: "",
    gender: "",
  });

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function _setGender(gender, url) {
    let _inputs = inputs;
    _inputs.gender = gender;
    setGender(gender);
    setInputs(_inputs);
    if (url) {
      if (url == 'exit') {
        setModal(true);
      } else {
        window.location.href = Config.ConfigAppUrl + url;
      }
    }
  }

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">

              <div className="d-flex background-text p-2">
                <img src={clientImg} alt="P" className="img-icon-54" />
                <div className="pl-3 my-auto">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    Lucho$, 38
                  </div>
                </div>
              </div>
              
              <div className="d-flex background-text p-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <div className="btn btn-primary text-white text-decoration-none">
                    Retirar
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
              <SettingsContent gender={gender} setGender={_setGender} />
            </div>
          </div>

          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
              <button className="btn btn-primary w-100 py-2 fs-xl">
                <i className="fas fa-user-friends"></i>
                Cambiar a rol trabajador
              </button>
            </div>
          </div>
            
        </div>
      </form>
      <IconSlideDown clickHandler={clickHandler}></IconSlideDown>

      {/* Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={exitImg} alt="confirm" className="w-100" />
                </div>
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bold">
                  ¿Quieres salir?
                </span>
              </div>
              
              <div className="d-flex">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={clickHandler}>Si</button>
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
