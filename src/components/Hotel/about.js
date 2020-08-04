import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import hotelImg from '../../assets/images/design/hotel.jpg';
import logo from '../../assets/images/resources/icono-bancolombia.png';

import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";

import Carousel from "../common/Carousel/Carousel";
import { LazyImageProvider } from "../common/LazyImage/LazyImageContext";
import LazyImage from "../common/LazyImage/LazyImage";
import man1Img from '../../assets/images/design/man1.jpg';
import man2Img from '../../assets/images/design/man2.jpg';
import man3Img from '../../assets/images/design/man3.jpg';
import man4Img from '../../assets/images/design/man4.jpg';

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const images = [
  man1Img,
  man2Img,
  man3Img,
  man4Img
];


const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});

function App() {

  const classes = useStyles();

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Escoge un hotel'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container mt-3 m-0">
            <div className="col-sm-12 col-md-8 col-lg-7 p-0">
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
            <div className="col-sm-12 col-md-8 col-lg-7 px-0 background-gray">
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
                      <span className="d-flex text-morado">Costo po hora</span>
                      <span className="text-white">$40,000</span>
                    </div>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="App-Question--x2 d-flex justify-content-center">
                    <i className="far fa-clock fs-xl text-pink pr-2 my-auto"></i>
                    <div className="">
                      <span className="d-flex text-morado">Costo po noche</span>
                      <span className="text-white">$40,000</span>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="d-flex mt-4 justify-content-center">
                <button className="btn btn-secondary mr-2">Sencilla</button>
                <button className="btn btn-primary mr-2">Junior</button>
                <button className="btn btn-secondary mr-2">Presidencial</button>
              </div>
            
              <button className="btn btn-primary w-100 py-3 mt-4 mb-4">Reservar</button>
            </div>
          </div>

          <div className="row justify-content-center set_width_container m-0">
            <div className="col-sm-12 col-md-8 col-lg-7 p-0 background-text4 fs-l">
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
      </div>
    </div>

  )
}

export default App;
