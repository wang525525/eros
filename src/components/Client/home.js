import React, {useState,useEffect} from 'react';
import '../../App.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import background from '../../assets/images/design/bg-motel.png';
import girl1Img from '../../assets/images/design/girl1.jpeg';
import girl2Img from '../../assets/images/design/girl2.jpg';
import girl3Img from '../../assets/images/design/girl3.jpg';
import girl4Img from '../../assets/images/design/girl4.jpg';
import serviceImg from '../../assets/images/resources/icoon-service.png';
import cameraImg from '../../assets/images/resources/icono-camera.png';
import clientImg from '../../assets/images/resources/icono-cliente.png';
import girlImg from '../../assets/images/design/image-girl.jpg';
import iconServiceImg from '../../assets/images/resources/icono-services.png';
import kissImg from '../../assets/images/resources/icono-kiss.png';
import menImg from '../../assets/images/resources/icon-men.png';
import womenImg from '../../assets/images/resources/icon-woman-new.png';
import coupleImg from '../../assets/images/resources/icon-couple.png';
import bedImg from '../../assets/images/resources/icon-bed.png';
import carImg from '../../assets/images/resources/icon-car.png';
import bellImg from '../../assets/images/resources/icon-bell.png';

import Config from "../../helpers/config";

import Carousel from "../common/Carousel/Carousel";
import { LazyImageProvider } from "../common/LazyImage/LazyImageContext";
import LazyImage from "../common/LazyImage/LazyImage";

import Topbar from "./topbar";
import IconSlideUp from "../common/IconSlideUp";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";
import ItemsDinamics from "./ItemsDinamics";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const images = [
  girl1Img,
  girl2Img,
  girl3Img,
  girl4Img
];

const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});

const  inputsDefault  = {
  cirugias:{
    "Bailar":true,
    "Cine":true,
    "Gimnasio":false,
    "Viajar":false,
    "Surf":false,
    "Videojuegos":true,
    "Concierto":true,
    "Paracaidismo":true,
    "Perforaciones":true,
  }
}

function App() {
  const classes = useStyles();
  const [inputs, setInputs] =   useState(inputsDefault);

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'client/setting';
  }

  function gotoContact(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact';
  }

  return (
    <div>
      <Topbar></Topbar>
      <div className="App-Logo App-splash" style={divBackground}>
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7 pt-5">
              <div className="background-gray">
                
                <Tabs bottom={true}>
                  <Tab active={true} value="camera" 
                      header={
                        <img src={cameraImg} className="img-icon-40" />
                      }
                  >
                    <div className="client-home-panel">
                      <LazyImageProvider>
                        <Carousel>
                          {images.map((image, i) => (
                            <LazyImage aspectRatio={[5, 9]} src={image} key={i} />
                          ))}
                        </Carousel>
                      </LazyImageProvider>
                    </div>

                  </Tab>
                  <Tab value="service" 
                      header={
                        <img src={serviceImg} className="img-icon-40" />
                      }
                  >
                    <div className="client-home-panel fs-l">
                      <div className="d-flex">
                        <img src={iconServiceImg} className="img-icon-32" />
                        <span className="text-morado fs-xl pl-2">¿Qué quieres hacer conmigo?</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Pasar un rato</span>
                        <span className="ml-auto text-grey">$150,000/1h</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Compañía</span>
                        <span className="ml-auto text-grey">$150,000/1h</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Striptease</span>
                        <span className="ml-auto text-grey">$60,000/20m</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">¿Destape total?</span>
                        <span className="ml-auto text-grey">Si</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Amanecida</span>
                        <span className="ml-auto text-grey">$160,000/1h</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Desde ya hasta</span>
                        <span className="ml-auto text-grey">10:00pm - 6:00am</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Video llamada</span>
                        <span className="ml-auto text-grey">$5,000/min</span>
                      </div>

                      <div className="d-flex pt-2">
                        <img src={kissImg} className="img-icon-32" />
                        <span className="text-morado fs-xl pl-2">Mi servicio de prepago incluye:</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="ml-auto text-grey">Besos, Anal, Vaginal, Masaje, Ducha, Facial, Orgia, Oral con condon, Strap-on</span>
                      </div>

                      <div className="row justify-content-center pt-2 fs-l">
                        <div className="col-7 text-pink my-auto fs-xl">
                          <i className="fas fa-user-check"></i>
                          <span className="text-morado">Atiendo a:</span>
                        </div>
                        <div className="col-5">
                          <div className="d-flex">
                            <img src={menImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">Mujeres</span>
                          </div>
                          <div className="d-flex pt-2">
                            <img src={womenImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">Hombres</span>
                          </div>
                          <div className="d-flex pt-2">
                            <img src={coupleImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">Parejas</span>
                          </div>
                        </div>
                      </div>

                      <div className="row justify-content-center pt-3 fs-l">
                        <div className="col-7 text-pink my-auto fs-xl">
                          <i className="fas fa-bed"></i>
                          <span className="text-morado pl-2">Atiendo an:</span>
                        </div>
                        <div className="col-5">
                          <div className="d-flex">
                            <img src={bedImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">Mi domicilio</span>
                          </div>
                          <div className="d-flex pt-2">
                            <img src={carImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">A domicilio</span>
                          </div>
                          <div className="d-flex pt-2">
                            <img src={bellImg} className="img-icon-32 pr-2"></img>
                            <span className="my-auto">Hotel/Motel</span>
                          </div>
                        </div>
                      </div>

                    </div>
                    
                  </Tab>
                  <Tab value="client" 
                      header={
                        <img src={clientImg} className="img-icon-40" />
                      }
                  >
                    <div className="client-home-panel fs-l">
                      <div className="d-flex pt-2">
                        <i className="fas fa-info-circle text-pink fs-xl my-auto"></i>
                        <span className="text-morado fs-xl pl-2">¿Quién soy?</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="ml-auto text-grey">
                          Lorem ipsum dolor sit amet, consecteur adipiscing dlit. Fusce interdum nunc id dapibus volutpat.
                          Etiam id tindidunt lacus. Cras a neque enim Sucspendisse ultricies efficitur nisl. vel viverra leo tmepus at.
                        </span>
                      </div>

                      <div className="d-flex pt-2">
                        <i className="fas fa-list-ul text-pink fs-xl my-auto"></i>
                        <span className="text-morado fs-xl pl-2">Más detalles</span>
                      </div>

                      <div className="d-flex pt-2">
                        <span className="text-morado">Micio</span>
                        <span className="ml-auto text-grey">1,55cm</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Contextura</span>
                        <span className="ml-auto text-grey">Fitness</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Cabello</span>
                        <span className="ml-auto text-grey">Largo</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Color de cabello</span>
                        <span className="ml-auto text-grey">Rubio</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Color de ojos</span>
                        <span className="ml-auto text-grey">Café</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">¿Fumo?</span>
                        <span className="ml-auto text-grey">No</span>
                      </div>
                      <div className="d-flex pt-2">
                        <span className="text-morado">Bebo?</span>
                        <span className="ml-auto text-grey">Si</span>
                      </div>
                      <div className="row justify-content-center pt-2">
                        <div className="col-6">
                          <span className="text-morado">Cirugías estéticas</span>  
                        </div>
                        <div className="col-6 text-right">
                          <span className="text-grey">Senos, Cola, Bichectomia</span>  
                        </div>
                      </div>
                      <div className="row justify-content-center pt-3">
                        <div className="col-5">
                          <span className="text-morado">Hobbies & Gustos:</span>  
                        </div>
                        <div className="col-7 text-right">
                          <ItemsDinamics
                            name="cirugias"
                            inputs={inputs}
                            setInputs={setInputs}
                            boolTitle={false}
                            boolNew={false}
                            title="Agregar más cirugías"
                            itemsDefault={inputsDefault.cirugias}/>
                        </div>
                      </div>

                    </div>

                  </Tab>
                </Tabs>
              
                <div className="d-flex p-2 background-text3">
                  <div className="my-auto">
                    <div className="d-flex">
                      <img src={girlImg} className="img-icon-48 rounded" />
                      <span className="text-morado fs-xl pl-2">Sexy 20, 29</span>
                    </div>
                  </div>
                  <div className="m-auto">
                    <div className="d-flex">
                      <Rating 
                        name="read-only" 
                        value={4} 
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        classes={{iconEmpty: classes.iconEmpty}}
                        readOnly />
                    </div>
                  </div>
                  <div className="ml-auto my-auto">
                    <button className="btn btn-primary px-3 py-2" onClick={gotoContact}>CONTRATAR</button>
                  </div>

                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
      <IconSlideUp clickHandler={clickHandler}></IconSlideUp>
    </div>
    
  )
}

export default App;
