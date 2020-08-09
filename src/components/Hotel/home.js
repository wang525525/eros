import React, {useState,useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Config from "../../helpers/config";

import '../../App.css';
import hotelImg from '../../assets/images/resources/hotel-icon.png';
import background from '../../assets/images/design/bg-motel.png';
import moneda from '../../assets/images/resources/eroscoin.png';
import clockIcon  from '../../assets/images/resources/icon-clock.png';
import man1Img from '../../assets/images/design/man1.jpg';
import man2Img from '../../assets/images/design/man2.jpg';
import man3Img from '../../assets/images/design/man3.jpg';
import man4Img from '../../assets/images/design/man4.jpg';

import SwitchButton from '../common/Switch';

import Topbar from './topbar';
import IconSlideUp from '../common/IconSlideUp';

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
  
  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  function showNotificationModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoHistory(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/hist';
  }

  return (
    <div>
      
      <div className="App-LogoCenter App-splash" style={divBackground}>
        <Topbar showNotificationModal={showNotificationModal}></Topbar>
        <div className="container mt-auto">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-12 text-center mt-4">
                    <img className="img-fluid rounded" src={hotelImg} alt="ErosApp"/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-12 col-sm-6 text-center">
                  <Rating 
                    name="read-only" 
                    value={4} 
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    classes={{iconEmpty: classes.iconEmpty}}
                    readOnly />
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-12 col-sm-6 text-center">
                  <div className="App-Question text-center">Hotel Los Rios</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-auto pb-5">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="d-flex border-b pb-2 fs-xl">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left text-morado ">
                    $100
                  </div>
                  <div className="App-Question--x2 text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <button className="btn btn-primary">
                    Retirar
                  </button>
                </div>
              </div>

              <div className="d-flex pt-3">
                <img src={clockIcon} alt="P" className="img-icon-54" />
                <div className="pl-3 my-auto">
                  <div className="text-morado fs-xl">
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
              <div className="text-gray fs-xl">
                Si esta desactivado, tu perfil no estará disponible para prestar servicios.
              </div>
            </div>
          </div> 
        </div>
      
      </div>
      <IconSlideUp clickHandler={clickHandler}></IconSlideUp>

      {/* Notifcation Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="mt-5" >
        <ModalBody className="background-gray rounded p-0">

          <div className="row m-0 bg-gray rounded">
            <div className="col-sm-12 text-center p-3">
              <div className="d-flex pb-2">
                <img src={man1Img} alt="P" className="img-icon-54 rounded" />
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
                <i className="fas fa-phone-alt text-pink pr-2 my-auto"></i>
                <span className="text-white">123-456-7890</span>
              </div>

              <div className="d-flex pb-2">
                <button className="btn btn-primary w-100 py-3" onClick={gotoHistory}>Aceptar</button>
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
