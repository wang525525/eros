import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../../App.css';
import radarImg from '../../assets/images/resources/radar.png';
import background from '../../assets/images/design/bg-erosapp-clientes.png';
import confirmImg from '../../assets/images/resources/confirm-icon.png';

import Config from "../../helpers/config";

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
    window.location.href = Config.ConfigAppUrl + 'client/contact';
  }

  function gotoSubContact(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2sub2';
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  return (
    <div>
      <TopbarSimple clickHandler={gotoPrev} name={'Contratar'}></TopbarSimple>
      <div className="App-LogoCenter App-splash" style={divBackground}>
        
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
  
              <div className="row justify-content-center mt-4 px-4">
                <div className="col-sm-12  background-gray rounded d-flex">
                  <i className="far fa-clock fs-xxl text-morado my-auto"></i>
                  <div className="text-gray pl-2 fs-l">
                    El prestador de servicio tendrá un limite de <span className="text-fucsia cursor" onClick={showModal}>10 minutos&nbsp;</span> 
                    para aceptar o rechazar tu solicitud. Te notificaremos su respuesta
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-12 text-center mt-4">
                    <img className="img-fluid" src={radarImg} alt="ErosApp"/>
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center mt-4 ">
                <div className="col-12 col-sm-8  ">
                  <div className=" text-center p-2 text-fuchsia ">
                    Buscando service
                  </div>
                </div>
              </div>
            
              <div className="row justify-content-center mt-5">
                <div className="col-sm-12">
                  <ProgressBar curPoint={1}></ProgressBar>
                </div>
              </div>

            </div>
          </div>
        </div>
  
      </div>

      {/* Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-center" >
        <ModalBody className="bg-white rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={confirmImg} alt="confirm" className="w-100" />
                </div>
              </div>

              <div className="pb-2 text-center">
                <span className="text-black fs-xxl font-weight-bolder">
                  ¡Tu solicitud no fue confirmada!
                </span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-grey fs-xl">Te invitamos a que realices unanueva busqueda</span>
              </div>

              <div className="d-flex">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={gotoSubContact}>Continuar</button>
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
