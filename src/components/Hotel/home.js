import React, {useState,useEffect} from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import Config from "../../helpers/config";

import '../../App.css';
import logo from '../../assets/images/resources/icono-bancolombia.png';
import background from '../../assets/images/design/bg-motel.png';
import moneda from '../../assets/images/resources/eroscoin.png';
import clockIcon  from '../../assets/images/resources/icon-clock.png';

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

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'hotel/setting';
  }

  return (
    <div>
      <Topbar></Topbar>
      <div className="App-LogoCenter App-splash" style={divBackground}>

        <div className="container mt-auto">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-12 text-center mt-4">
                    <img className="img-fluid" src={logo} alt="ErosApp"/>
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
                <img src={clockIcon} alt="P" className="img-icon-54" />
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
    </div>
  )
}

export default App;
