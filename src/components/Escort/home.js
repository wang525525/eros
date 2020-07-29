import React, {useState} from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import logo from '../../assets/images/design/logo-vertical.png';
import background from '../../assets/images/design/background.jpg';
import moneda from '../../assets/images/resources/eroscoin.png';
import clockIcon  from '../../assets/images/resources/icon-clock.png';
import clientImg from '../../assets/images/design/image-default.jpg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import serviceImg from '../../assets/images/resources/icono-services.png';



import Config from "../../helpers/config";

import Topbar from './topbar';

import IconSlideUp from '../common/IconSlideUp';
import SwitchButton from '../common/Switch';

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};
const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});

function App() {

  const [modal, setModal] = useState(false);
  const [serviceModal, setServiceModal] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleService = () => setServiceModal(!serviceModal);

  const classes = useStyles();

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'escort/setting';
  }

  function showNotificationModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function showNextModal(e) {
    e.preventDefault();
    setModal(!modal);
    setServiceModal(true);
  }

  function gotoServiceDetail(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/serviceduration';
  }

  return (
    <div>

      <Topbar showNotificationModal={showNotificationModal}></Topbar>

      <div className="App-LogoCenter App-splash" style={divBackground}>

        <div className="container mt-auto">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row justify-content-center">
                <div className="col-7 col-sm-4 text-center">
                  <img className="img-fluid" src={logo} alt="ErosApp"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-auto pb-5">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="d-flex border-b pb-2">
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

              <div className="d-flex pt-3">
                <i className="fas fa-briefcase fs-xxl text-white ml-2"></i>
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    Disponible
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <SwitchButton 
                    outerClass = "cus-switch"  
                    switchButtonID = "demoID" 
                    inputClass = ""
                    helperClass = ""
                  />
                </div>
              </div>
              <div className="text-gray">
                Si esta desactivado, tu perfil no estará disponible para prestar servicios.
              </div>
            </div>
          </div> 
        </div>
      

      </div>
      
      <IconSlideUp clickHandler={clickHandler}></IconSlideUp>

      {/* Notifcation Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="mt-5" >
        <ModalBody className="background-text3 rounded p-0">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 text-center p-2">
              <span className="text-morado fs-l">¡Quiere contigo!</span>
              <div className="text-white">
                <span className="fs-n">Tiempo para limite para aceptar <span className="text-morado">08:45</span></span>
              </div>
            </div>
          </div>

          <div className="row m-0 bg-gray rounded-bottom">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={clientImg} alt="P" className="img-icon-54 rounded" />
                <div className="pl-3">
                  <div className="text-left text-morado fs-l">
                    Luicho$
                  </div>
                  <div className="d-flex">
                    <Rating 
                      name="read-only" 
                      value={4} 
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      classes={{iconEmpty: classes.iconEmpty}}
                      readOnly />
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto fs-xl">
                  <i className="fas fa-user-friends text-pink pr-2"></i>
                  <span className="text-white">Escort</span>
                </div>
              </div>

              <div className="d-flex pb-2 fs-n">
                <i className="far fa-calendar text-pink pr-2 my-auto"></i>
                <span className="text-white">3/20/2020</span>
              </div>

              <div className="d-flex pb-2 fs-n">
                <i className="far fa-clock text-pink pr-2 my-auto"></i>
                <span className="text-white">10:00pm ~ 11:00pm</span>
              </div>

              <div className="d-flex pb-2 fs-n">
                <i className="fas fa-map-marker-alt text-pink pr-2 my-auto"></i>
                <span className="text-white">Cra 5N # 103-92, lbague</span>
              </div>

              <div className="d-flex pb-2">
                <button className="btn btn-secondary w-50 mx-2 py-3 fs-l" onClick={toggle}>Rechazar</button>
                <button className="btn btn-primary w-50 mx-2 py-3 fs-l" onClick={showNextModal}>Aceptar</button>
              </div>

            </div>
          </div>

        </ModalBody>
      </Modal>
      {/* Notifcation Modal  END */}

      {/* service Modal START */}
      <Modal isOpen={serviceModal} toggle={toggleService} className="mt-5" >
        <ModalBody className="background-text3 rounded p-0">
        
          <div className="row m-0 bg-gray rounded-top">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={girlImg} alt="P" className="img-icon-80 rounded" />
                <div className="pl-3">
                  <div className="d-flex">
                    <Rating 
                      name="read-only" 
                      value={4} 
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      classes={{iconEmpty: classes.iconEmpty}}
                      readOnly />
                  </div>
                  <div className="text-left text-morado fs-xl font-weight-bold">
                    Sexy20
                  </div>
                  <div className="text-left text-white fs-n">
                    26 anos
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3 fs-l">
              <div className="d-flex pb-2">
                <img src={serviceImg} alt="P" className="img-icon-20 rounded my-auto" />
                <span className="text-morado font-weight-bold">Servicio</span>
                <span className="text-white ml-auto">Escort</span>
              </div>
              <div className="d-flex pb-2">
                <i className="fas fa-map-marker-alt text-pink pr-2 my-auto"></i>
                <span className="text-morado font-weight-bold">Lugar de encuentro</span>
                <span className="text-white ml-auto">Hotel Los Rios</span>
              </div>
              <div className="d-flex pb-2">
                <i className="far fa-calendar text-pink pr-2 my-auto"></i>
                <span className="text-morado font-weight-bold">Fecha</span>
                <span className="text-white ml-auto">01/03/2020</span>
              </div>
              <div className="d-flex pb-2">
                <i className="far fa-clock text-pink pr-2 my-auto"></i>
                <span className="text-morado font-weight-bold">Hora</span>
                <span className="text-white ml-auto">9:00pm - 10:00pm</span>
              </div>
            </div>
          </div>

          <div className="row m-0 bg-gray rounded-bottom">
            <div className="col-sm-12 text-center p-3 fs-l">
              <div className="row">
                <div className="col-4 text-center fs-l">
                  <div><i className="fas fa-comment-alt text-morado"></i></div>
                  <span className="text-white">Chat</span>
                </div>
                <div className="col-4 text-center fs-l">
                  <div><i className="fas fa-phone-alt text-morado"></i></div>
                  <span className="text-white">Llamar</span>
                </div>
                <div className="col-4 text-center fs-l">
                  <div><i className="fas fa-map text-morado"></i></div>
                  <span className="text-white">Navegacion</span>
                </div>
              </div>
              <div className="d-flex pt-4 pb-2">
                <button className="btn btn-primary w-100 fs-xl py-3" onClick={gotoServiceDetail}>
                  <i className="fas fa-play text-white pr-2"></i>
                  Iniciar servicio
                </button>
              </div>
              <div className="d-flex pb-2">
                <button className="btn btn-secondary w-100 fs-xl py-3" onClick={toggleService}>
                  <i className="fas fa-times-circle text-morado pr-2"></i>
                  Cancelar servicio
                </button>
              </div>
            </div>
          </div>

        </ModalBody>
      </Modal>
      {/* service Modal END */}
    </div>
    
  );
}

export default App;
