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
  const [reviewModal, setReviewModal] = useState(false);
  const toggleReview = () => setReviewModal(!reviewModal);

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
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  function gotoReview(e) {
    e.preventDefault();
    setModal(false);
    setReviewModal(true)
  }

  function gotoAddTime(e) {
    e.preventDefault();
    setModal(false);
    window.location.href = Config.ConfigAppUrl + 'client/serviceadd';
  }
  return (

    <div>
      <TopbarSimple clickHandler={gotoEscort} name={'Duración del servicio'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
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
                <button className="btn btn-primary w-100 fs-xl py-3" onClick={showModal}>
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

              <div className="pb-2 text-center">
                <span className="text-morado fs-xxl font-weight-bolder">
                  ¿Quieres Adicionar tiempo?
                </span>
              </div>
              
              <div className="d-flex pt-3">
                <button className="btn btn-secondary w-50 py-3 mr-2 fs-l" onClick={gotoReview}>No, terminar</button>
                <button className="btn btn-primary w-50 py-3 ml-2 fs-l" onClick={gotoAddTime}>Si</button>
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
                <img src={girlImg} alt="P" className="img-icon-80 rounded-circle p-0" />
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
                <span className="text-white fs-n">Las calificaciones son anonimas</span>
              </div>

              {(() => {
                if (ratingValue > 0) {
                  return (
                    <div className="pb-2 text-center">
                      <div onClick={setPuntalityValue} className={(puntality)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Puntualidad</div>
                      <div onClick={setHigeneValue} className={(higene)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Higiene</div>
                      <div onClick={setAttitudeValue} className={(attitude)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Actitud</div>
                      <div onClick={setPresentationValue} className={(presentation)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Presentacion personal</div>
                      <div onClick={setTreatValue} className={(treat)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Trato</div>
                      <div onClick={setServiceValue} className={(service)?"fs-l btn btn-primary mr-1 mt-1":"fs-l btn btn-secondary mr-1 mt-1"}>Servicio</div>
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
