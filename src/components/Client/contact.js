import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextField from '@material-ui/core/TextField';

import '../../App.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import background from '../../assets/images/design/bg-escort.jpeg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import serviceImg from '../../assets/images/resources/icono-services.png';
import locationImg from '../../assets/images/resources/erosapp-hotel-location.png';


import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState'

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});
function App() {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  function gotoNextStep(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl+"client/contact2";
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7 pt-3">

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 text-center">
                  <img src={girlImg} className="img-icon-80 rounded" />
                </div>
                <div className="col-sm-12 text-center">
                  <span className="text-morado fs-xl">Sexy20, 29</span>
                </div>
                <div className="col-sm-12 text-center">
                  <Rating 
                    name="read-only" 
                    value={4} 
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    classes={{iconEmpty: classes.iconEmpty}}
                    readOnly />
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <img src={serviceImg} className="img-icon-32 mr-2" />
                    Escoge el servicio:
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="input-group mb-3">
                    <select className="form-control" name="type_identity_document">
                      <option value="Prepago">Prepago</option>
                      <option value="Escort">Escort</option>
                      <option value="ShowStriptease">Show Striptease</option>
                      <option value="Amanecida">Amanecida</option>
                      <option value="Videochat">Videochat</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <i className="fa fa-map-marker-alt text-pink mr-2"></i>
                    Escoge el lugar de encuentro
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="input-group mb-3">
                    <select className="form-control" name="type_identity_document">
                      <option value="hotel-motel">hotel-motel</option>
                      <option value="Domicilio">Domicilio</option>
                      <option value="Residencia_de_escort">Residencia de escort</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <i className="far fa-calendar text-pink mr-2"></i>
                    Define la fecha
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="input-group mb-3">
                    <input
                            autoComplete="off"
                            type="date"
                            name="check_out"
                            className="form-control text-left"
                            placeholder="" required/>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <div className="App-Question--x2">
                    <i className="far fa-clock text-pink mr-2"></i>
                    Define el tiempo
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="row">
                    <div className="col-6">
                      <span className="fs-l text-morado">Hora de inicio</span>
                    </div>
                    <div className="col-6">
                      <div className="input-group mb-3">
                        <input
                                autoComplete="off"
                                type="time"
                                min="07:00"
                                max="23:00"
                                name="check_out"
                                className="form-control text-left"
                                placeholder="09:00 pm" required/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <span className="fs-l text-morado">Hora final</span>
                    </div>
                    <div className="col-6">
                      <div className="input-group mb-3">
                        <input
                                autoComplete="off"
                                type="time"
                                min="07:00"
                                max="23:00"
                                name="check_out"
                                className="form-control text-left"
                                placeholder="09:00 pm" required/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row justify-content-center mt-4">
                <div className="col-sm-12">
                  <button onClick={showModal} className="btn btn-primary w-100 py-2 fs-l">Solicitar servicio</button>
                </div>
              </div>

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12">
                  <ProgressBar curPoint={0}></ProgressBar>
                </div>
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

              <div className="pb-2 text-center">
                <span className="text-morado fs-xl font-weight-bolder">
                  ¿Quieres tener más oportunidad de encontrar lo que buscas?
                </span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-white fs-xl">
                  ¡Podemos enviar tu solicitud a todos los perfiles que cumplan tus criterios de busqueda!
                </span>
              </div>

            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-secondary w-50 py-3 fs-l" onClick={gotoNextStep}>Rechazar</button>
            <button className="btn btn-primary w-50 py-3 fs-l" onClick={gotoNextStep}>Aceptar</button>
          </div>

        </ModalBody>
      </Modal>
      {/* Notifcation Modal  END */}
    </div>

  )
}

export default App;
