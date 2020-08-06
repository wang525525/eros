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

import Carousel from "../common/Carousel/Carousel";
import { LazyImageProvider } from "../common/LazyImage/LazyImageContext";
import LazyImage from "../common/LazyImage/LazyImage";
import Topbar from './topbar';
import IconSlideUp from '../common/IconSlideUp';
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";


const images = [
  man1Img,
  man2Img,
  man3Img,
  man4Img
];

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

  const [tempLeft, setTempLeft] = useState('$50,000');
  const [tempRight, setTempRight] = useState('$50,000');

  const [activeButton, setActiveButton] = useState(1);
  
  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  function showNotificationModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoNotification(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/notification';
  }

  function setLower(e) {
    e.preventDefault();
    setTempLeft('$40,000');
    setTempRight('$40,000');
    setActiveButton(0);
  }

  function setMiddle(e) {
    e.preventDefault();
    setTempLeft('$50,000');
    setTempRight('$50,000');
    setActiveButton(1);
  }

  function setHigher(e) {
    e.preventDefault();
    setTempLeft('$60,000');
    setTempRight('$60,000');
    setActiveButton(2);
  }

  return (
    <div>
      <Topbar showNotificationModal={showNotificationModal}></Topbar>
      <div className="App-LogoCenter App-splash" style={divBackground}>

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
                  <button className="btn btn-primary fs-xl">
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
        <ModalBody className="background-text3 rounded p-0">
          <div className="container">
            <div className="row justify-content-center set_width_container mt-3 m-0">
              <div className="col-12 p-0">
                <LazyImageProvider>
                  <Carousel>
                    {images.map((image, i) => (
                      <LazyImage aspectRatio={[10, 7]} src={image} key={i} />
                    ))}
                  </Carousel>
                </LazyImageProvider>
              </div>
            </div>

            <div className="row justify-content-center m-0">
              <div className="col-12 px-0 background-gray">
                <div className="row mt-n-1">
                  <div className="col-3 text-center">
                    <img className="img-fluid img-icon-62 rounded" src={man1Img} alt="ErosApp"/>
                  </div>
                  <div className="col-5 mt-auto">
                    <div className="App-Question font-weight-bolder fs-xl text-center">Lucho$</div>
                  </div>
                  <div className="col-4 text-center mt-auto">
                    <Rating 
                        name="read-only" 
                        value={4} 
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        classes={{iconEmpty: classes.iconEmpty}}
                        readOnly />
                  </div>
                </div>
              
                <div className="row justify-content-center mt-4">
                  <div className="col-6 ">
                    <div className="App-Question--x2 d-flex justify-content-center">
                      <i className="fas fa-moon fs-xl text-pink pr-2 my-auto"></i>
                      <div className="">
                        <span className="d-flex text-morado">Costo por hora</span>
                        <span className="text-white">{tempLeft}</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="App-Question--x2 d-flex justify-content-center">
                      <i className="far fa-clock fs-xl text-pink pr-2 my-auto"></i>
                      <div className="">
                        <span className="d-flex text-morado">Costo por noche</span>
                        <span className="text-white">{tempRight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              
                <div className="d-flex mt-4 justify-content-center">
                  <button className={(activeButton == 0)?"btn btn-primary mr-2":"btn btn-secondary mr-2"} onClick={setLower}>Sencilla</button>
                  <button className={(activeButton == 1)?"btn btn-primary mr-2":"btn btn-secondary mr-2"} onClick={setMiddle}>Junior</button>
                  <button className={(activeButton == 2)?"btn btn-primary mr-2":"btn btn-secondary mr-2"} onClick={setHigher}>Presidencial</button>
                </div>
              
                <button className="btn btn-primary w-100 py-3 mt-4 mb-4" onClick={gotoNotification}>Reservar</button>
              </div>
            </div>

            <div className="row justify-content-center set_width_container m-0">
              <div className="col-12 p-0 background-text4 fs-l text-white">
                <Tabs>
                  <Tab active={true} value="contact" header="Contacto">
                    <div className="row">
                      <div className="col-7">
                        <i className="fas fa-phone-alt text-pink pr-3"></i>
                        <span className="text-morado">teléfono</span>
                      </div>
                      <div className="col-5 text-right">
                        <span>300,000,000</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-7">
                        <i className="fas fa-parking text-pink pr-3"></i>
                        <span className="text-morado">¿Tiene parqueadero?</span>
                      </div>
                      <div className="col-5 text-right">
                        <span>Si</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-7">
                        <i className="fas fa-bath text-pink pr-3"></i>
                        <span className="text-morado">¿Tiene baño?</span>
                      </div>
                      <div className="col-5 text-right">
                        <span>Si</span>
                      </div>
                    </div>

                  </Tab>
                  <Tab value="description" header="Descripción">
                    Description
                  </Tab>
                </Tabs>
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
