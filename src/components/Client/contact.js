import React, { useState } from 'react';

import '../../App.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import background from '../../assets/images/design/bg-escort.jpeg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import serviceImg from '../../assets/images/resources/icono-services.png';

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
  const context = React.useContext(StateContext);

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  function gotoNextStep(e) {
    let modal = {
      status:true,
      title:"¡Registro con éxito!",
      message:"¡ya puedes usar tu cuenta!",
      ico:{
            contentColor:"modal-ico-bg-primary",
            ico:'fas fa-check pl-1',
          },
      customButtom:{
        link:Config.ConfigAppUrl+"client/contact2",
      }
    }

    context.setState({dialog:modal})
  }
  return (

    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

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
                    <img src={serviceImg} className="img-icon-32 mr-2" />
                    Escoge el lugar de encuentro
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
                    <i className="far fa-calendar text-pink mr-2"></i>
                    Define la fecha
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
                    <i className="far fa-clock text-pink mr-2"></i>
                    Define el tiempo
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-2 m-0">
                <div className="col-sm-12 p-0 border-b">
                  <div className="row">
                    <div className="col-6">
                      <span className="fs-n text-morado">Hora de inicio</span>
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
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-clock"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <span className="fs-n text-morado">Hora final</span>
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
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <i className="fas fa-clock"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row justify-content-center mt-4">
                <div className="col-sm-12">
                  <button onClick={gotoNextStep} className="btn btn-primary w-100 py-2 fs-l">Solicitar servicio</button>
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
    </div>

  )
}

export default App;
