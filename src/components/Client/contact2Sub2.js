import React, {useState} from 'react';
import '../../App.css';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/images/resources/icono-reloj.png';
import background from '../../assets/images/design/bg-erosapp-clientes.png';
import girlImg from '../../assets/images/design/image-girl.jpg';

import StateContext from '../../helpers/contextState'
import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";
import { func } from 'prop-types';

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
  const context               =   React.useContext(StateContext);

  function gotoPayHome(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2sub3';
  }

  function gotoSubContact(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  function gotoNext(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact3';
  }
  return (
    <div>
      
      <div className="App-Logo App-splash" style={divBackground}>
        <TopbarSimple clickHandler={gotoSubContact} name={'Contratar'}></TopbarSimple>
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
  
              <div className="row justify-content-center background-gray m-2 mt-3 p-3 rounded">
                <div className="col-6">
                  <div className="d-flex">
                    <img src={girlImg} className="img-icon-80 rounded" />
                    <span className="text-morado fs-xl pl-3">Sexy 20, 29</span>
                  </div>
                  <div className="d-flex pt-2">
                    <Rating 
                      name="read-only" 
                      value={4} 
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      classes={{iconEmpty: classes.iconEmpty}}
                      readOnly />
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-100 mt-3" onClick={gotoNext}>Aceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 mt-4 p-3 rounded">
                <div className="col-6">
                  <div className="d-flex">
                    <img src={girlImg} className="img-icon-80 rounded" />
                    <span className="text-morado fs-xl pl-3">Sexy 20, 29</span>
                  </div>
                  <div className="d-flex pt-2">
                    <Rating 
                      name="read-only" 
                      value={4} 
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      classes={{iconEmpty: classes.iconEmpty}}
                      readOnly />
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-100 mt-3" onClick={gotoNext}>Aceptar</button>
                </div>
              </div>

              <div className="row justify-content-center background-gray m-2 mt-4 p-3 rounded">
                <div className="col-6">
                  <div className="d-flex">
                    <img src={girlImg} className="img-icon-80 rounded" />
                    <span className="text-morado fs-xl pl-3">Sexy 20, 29</span>
                  </div>
                  <div className="d-flex pt-2">
                    <Rating 
                      name="read-only" 
                      value={4} 
                      emptyIcon={<StarBorderIcon fontSize="inherit" />}
                      classes={{iconEmpty: classes.iconEmpty}}
                      readOnly />
                  </div>
                </div>
                <div className="col-6">
                  <button className="btn btn-primary w-100" onClick={gotoPayHome}>Ver perfil</button>
                  <button className="btn btn-primary w-100 mt-3" onClick={gotoNext}>Aceptar</button>
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
    </div>
    
  )
}

export default App;
