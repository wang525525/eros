import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';

import background from '../../assets/images/design/bg-escort.jpeg';
import defaultMan from '../../assets/images/design/image-default.jpg';
import moneda from '../../assets/images/resources/eroscoin.png';

import Config from "../../helpers/config";

import IconSlideDown from '../common/IconSlideDown';

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
    window.location.href = Config.ConfigAppUrl + 'escort/hist';
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>

      <div className="container">
        <div className="row justify-content-center set_width_container">
          <div className="col-sm-12 col-md-8 col-lg-6">

            <div className="d-flex background-text p-2">
              <img src={defaultMan} alt="P" className="img-icon-48 rounded mr-2 my-auto" />
              <div className="">
                <div className="text-left text-gray fs-n">
                  CLIENTE
                </div>
                <div className="text-morado fs-l">
                  Lucho$
                </div>
              </div>
              <div className="ml-auto my-auto">
                <Rating 
                  name="read-only" 
                  value={4} 
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  classes={{iconEmpty: classes.iconEmpty}}
                  readOnly />
              </div>
              
            </div>
          </div>
        </div>

        <div className="row justify-content-center set_width_container">
          <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
            <div className="d-flex">
              <h4 className="text-morado">Detalles del servicio</h4>
            </div>

            <div className="d-flex custom-table">
              <table className="w-100 fs-n">
                <tbody>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-shopping-bag text-pink mr-2 my-auto"></i>
                        Estado
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        <i className="fas fa-circle fs-xs text-light-green mr-2 my-auto"></i>
                        Pagado
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-female text-pink mr-2 my-auto"></i>
                        Servicio
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        Escort
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-clock text-pink mr-2 my-auto"></i>
                        Fecha
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        03/03/2020
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-calendar text-pink mr-2 my-auto"></i>
                        Hora
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        10:00pm - 11:00pm
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-directions text-pink mr-2 my-auto"></i>
                        Lugar
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        Cra 40 # 10-10
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-wallet text-pink mr-2 my-auto"></i>
                        Pago
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        Servicio: $150<br/>
                        Domicilio: $30<br/>
                        Tiempo adicional: $50
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40">
                      <div className="d-flex p-2 text-morado font-weight-bold">
                        <i className="fas fa-dollar-sign text-pink mr-2 my-auto"></i>
                        Total
                      </div>
                    </td>
                    <td>
                      <div className="d-flex p-2">
                        $230
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
          
      </div>
      
    </div>
  )
}

export default App;
