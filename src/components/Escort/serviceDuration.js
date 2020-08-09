import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import clockImg from '../../assets/images/resources/clock.png';
import clientImg from '../../assets/images/design/image-default.jpg';
import minsBadgeImg from '../../assets/images/resources/mins-badge.png';


import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});

function App() {

  const [puntality, setPuntality] = useState(false);
  const [higene, setHigene] = useState(false);
  const [attitude, setAttitude] = useState(false);
  const [presentation, setPresentation] = useState(false);
  const [treat, setTreat] = useState(false);
  const [service, setService] = useState(false);

  const classes = useStyles();
  const [ratingValue, setRatingValue] = React.useState(0);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [step1Modal, setStep1Modal] = useState(false);
  const toggleStep1 = () => setStep1Modal(!step1Modal);
  const [reviewModal, setReviewModal] = useState(false);
  const toggleReview = () => setReviewModal(!reviewModal);
  const [payModal, setPayModal] = useState(false);
  const togglePay = () => setPayModal(!payModal);

  function gotoEscort(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/home';
  }

  function addServiceTime(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/serviceadd';
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function setPuntalityValue(e) {
    e.preventDefault();
    setPuntality(!puntality);
  }
  function setHigeneValue(e) {
    e.preventDefault();
    setHigene(!higene);
  }
  function setAttitudeValue(e) {
    e.preventDefault();
    setAttitude(!attitude);
  }
  function setPresentationValue(e) {
    e.preventDefault();
    setPresentation(!presentation);
  }
  function setTreatValue(e) {
    e.preventDefault();
    setTreat(!treat);
  }
  function setServiceValue(e) {
    e.preventDefault();
    setService(!service);
  }

  function gotoHome(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/home';
  }

  function gotoNextStep1(e) {
    e.preventDefault();
    setModal(false);
    setStep1Modal(true);
  }

  function gotoReview(e) {
    e.preventDefault();
    setStep1Modal(false);
    setReviewModal(true)
  }

  function gotoPay(e) {
    e.preventDefault();
    setStep1Modal(false);
    setPayModal(true);
  }

  function gotoService(e) {
    e.preventDefault();
    setPayModal(false);
  }
  return (

    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoEscort} name={'Duración del servicio'}></TopbarSimple>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center set_width_container">
                <div className="col-8 mt-5">
                  <CircularProgressbarWithChildren 
                    value={66}
                    strokeWidth={4}
                    styles={buildStyles({
                      // Colors
                      pathColor: `#FE2D66`,
                      trailColor: '#353535',
                      backgroundColor: '#353535',
                    })}
                  >
                    <div className="text-center">
                      <div className="d-flex text-center">
                        <span className="text-white fs-xxxl font-wieght-bolder">60:00</span>
                      </div>
                      <div className="">
                        <span className="text-morado fs-l">Restante</span>
                      </div>
                    </div>
                  </CircularProgressbarWithChildren >
                </div>
              </div>
              
              {/* <div className="d-flex pt-5 pb-2">
                <button className="btn btn-secondary w-100 fs-xl py-3" onClick={addServiceTime}>
                  <i className="fas fa-stopwatch text-pink pr-2"></i>
                  Agregar tiempo
                </button>
              </div> */}

              <div className="d-flex pt-4 pb-2">
                <button className="btn btn-primary w-100 py-3" onClick={showModal}>
                  <i className="fas fa-play text-white pr-2"></i>
                  Empezar servicio
                </button>
              </div>

              <div className="row pt-4">
                <div className="col-6 text-center fs-l">
                  <div>
                    <i className="fas fa-sun text-pink fs-xl icon-round-border"></i>
                  </div>
                  <span className="text-white">¡Llamar al 1 2 3!</span>
                </div>
                <div className="col-6 text-center fs-l">
                  <div>
                    <i className="fas fa-question-circle text-pink fs-xl icon-round-border"></i>
                  </div>
                  <span className="text-white">Chat y soporte</span>
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
              <div className="d-flex pb-2">
                <img src={clockImg} alt="P" className="img-icon-100 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-gray fs-xl">
                  ¡El servicio ha finalizado!
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-primary w-100 py-3" onClick={gotoNextStep1}>OK</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

      {/* Notifcation Modal START */}
      <Modal isOpen={step1Modal} toggle={toggleStep1} className="modal-dialog-center" >
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
            <button className="btn btn-secondary w-50 py-3" onClick={gotoReview}>Rechazar</button>
            <button className="btn btn-primary w-50 py-3" onClick={gotoPay}>Aceptar</button>
          </div>

        </ModalBody>
      </Modal>
      {/* Notifcation Modal  END */}

      {/* Modal START pay modal */}
      <Modal isOpen={payModal} toggle={togglePay} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={clientImg} alt="P" className="img-icon-80 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">Lucho$</span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-white fs-xl">30 anos</span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-white fs-xl">¿Confirmas que has recibido el pago en efectivo?</span>
              </div>

              <div className="App-form-register pb-2 text-center">
                <div className="input-group p-3 rounded">
                  <i className="fas fa-money-bill-alt text-gray mr-2 my-auto fs-xl"></i>
                  <span className="ml-auto text-morado fs-l">COP $75,000</span>
                </div>
              </div>

              <div className="d-flex">
                <button className="btn btn-secondary w-50 py-3 mr-2" onClick={togglePay}>No</button>
                <button className="btn btn-primary w-50 py-3 ml-2" onClick={gotoService}>Si</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

      {/* Modal START Review modal */}
      <Modal isOpen={reviewModal} toggle={toggleReview} className="modal-dialog-center" >
        <ModalBody className="bg-gray rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={clientImg} alt="P" className="img-icon-80 rounded-circle p-0" />
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">Lucho$</span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-white fs-xl">26 anos</span>
              </div>

              <div className="pb-2 text-center">
                <span className="text-morado fs-xl">¿Que tal estuvo?</span>
              </div>

              <div className="pb-2 text-center">
                <Rating 
                  name="simple-controlled"
                  value={ratingValue} 
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  classes={{iconEmpty: classes.iconEmpty}}
                  onChange={(event, newValue) => {
                    setRatingValue(newValue);
                  }} />
              </div>

              <div className="pb-2 text-center">
                { ratingValue === 5 && <span className="text-morado fs-xxl font-weight-bolder">¡Perfecto!</span> }
                { ratingValue === 4 && <span className="text-morado fs-xxl font-weight-bolder">¡Bueno!</span> }
                { ratingValue === 3 && <span className="text-morado fs-xxl font-weight-bolder">¡Regular!</span> }
                { ratingValue === 2 && <span className="text-morado fs-xxl font-weight-bolder">¡No fue bueno!</span> }
                { ratingValue === 1 && <span className="text-morado fs-xxl font-weight-bolder">¡Pésimo!</span> }
              </div>

              <div className="pb-2 text-center">
                <span className="text-white fs-n">Las calificaciones son anonimas</span>
              </div>

              {(() => {
                if (ratingValue > 0) {
                  return (
                    <div className="pb-2 text-center">
                      <div onClick={setPuntalityValue} className={(puntality)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Puntualidad</div>
                      <div onClick={setHigeneValue} className={(higene)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Higiene</div>
                      <div onClick={setAttitudeValue} className={(attitude)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Actitud</div>
                      <div onClick={setPresentationValue} className={(presentation)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Presentacion personal</div>
                      <div onClick={setTreatValue} className={(treat)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Trato</div>
                      <div onClick={setServiceValue} className={(service)?"btn btn-primary mr-1 mt-1":"btn btn-secondary mr-1 mt-1"}>Servicio</div>
                    </div>
                  )
                } else {
                  return null
                }
              })()}
              
              <div className="d-flex pt-3">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={gotoHome}>Calificar</button>
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
