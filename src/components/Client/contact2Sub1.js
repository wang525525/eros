import React, {useState} from 'react';
import '../../App.css';
import logo from '../../assets/images/resources/icono-exitoso.png';
import background from '../../assets/images/design/bg-erosapp-clientes.png';

import StateContext from '../../helpers/contextState'
import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

function App() {
  const context               =   React.useContext(StateContext);

  function gotoHotel(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  function gotoNextStep(e) {
    let modal = {
      status:true,
      title:"¡confirmadacion!",
      message:"¡Tu solicitud ha sido confirmada!",
      ico:{
            contentColor:"modal-ico-bg-primary",
            ico:'fas fa-check pl-1',
          },
      customButtom:{
        link:Config.ConfigAppUrl+"client/contact2sub2",
      }
    }

    context.setState({dialog:modal})
  }

  return (
    <div>
      <TopbarSimple clickHandler={gotoHotel} name={'Contratar'}></TopbarSimple>
      <div className="App-LogoCenter App-splash" style={divBackground}>
        
        <div className="App-form-register container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
  
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-6 col-sm-5 text-center mt-4">
                    <img className="img-fluid" src={logo} alt="ErosApp"/>
                  </div>
                </div>
              </div>
  
              <div className="row justify-content-center mt-4 ">
                <div className="col-12 col-sm-8  ">
                  <div className=" text-center p-2 text-fuchsia">
                    ¡Tu solicitud ha sido confirmada!
                  </div>
                </div>
              </div>
            
              <div className="row justify-content-center mt-4">
                <div className="col-sm-12">
                  <button onClick={gotoNextStep} className="btn btn-primary w-100 py-2 fs-l">Confirmación</button>
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
