import React, { useState } from 'react';
import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import moneda from '../../assets/images/resources/eroscoin.png';
import clientImg from '../../assets/images/design/image-default.jpg';

import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState'
import Functions from "../../helpers/functions";
import store from "../../helpers/store";

import IconSlideDown from '../common/IconSlideDown';
import SettingsContent from "./settingsContent";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

let url_continue = false;

function App() {
  const [gender, setGender] = useState(false)
  const [inputs, setInputs] = useState({
    nationality: "",
    gender: "",
  });

  const context = React.useContext(StateContext);

  function handleClick(e) {
    e.preventDefault()
    if (store.get("escort").nationality !== undefined && store.get("escort").nationality !== '' && inputs.gender !== '') {
      /*PUSH DATA STORE*/
      let Motel = store.get("motel");
      Object.entries(inputs).map((v, k) => {
        if (Motel[v[0]] === undefined) {
          Motel[v[0]] = "";
        }
        Motel[v[0]] = v[1];
      })
      store.set("motel", Motel);
      /*END PUSH DATA STORE*/

      url_continue = e.target.href;
      inputs.user_id = store.get("user").user_id;
      Functions.PostAsync("User", "setEscort", inputs, context, { name: "callbackContinue", funct: callbackContinue })
      e.preventDefault();
    } else {
      let modal = {
        status: true,
        title: "Campos incompletos",
        message: "Para completar el proceso de registro debes sumistrar la nationality y el género",
        ico: {
          contentColor: "modal-ico-bg-primary",
          ico: 'fas fa-exclamation pl-3',
        },
      }
      context.setState({ dialog: modal })
      e.preventDefault();
    }
  }

  function callbackContinue() {
    document.location.href = url_continue;
  }

  function _setGender(gender, url) {
    let _inputs = inputs;
    _inputs.gender = gender;
    setGender(gender);
    setInputs(_inputs);
    if (url) {
      window.location.href = Config.ConfigAppUrl + url;
    }
  }

  function KeyUp(e) {
    let name = e.target.name;
    let _inputs = inputs;
    _inputs[name] = e.target.value;
    setInputs(_inputs)
  }

  function clickHandler(e) {
    e.preventDefault()
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">

              <div className="d-flex background-text p-2">
                <img src={clientImg} alt="P" className="img-icon-54" />
                <div className="pl-3 my-auto">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    Lucho$, 38
                  </div>
                </div>
              </div>
              
              <div className="d-flex background-text p-2">
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
            </div>
          </div>

          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
              <SettingsContent gender={gender} setGender={_setGender} />
            </div>
          </div>

          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
              <button className="btn btn-primary w-100 py-2 fs-xl">
                <i className="fas fa-user-friends"></i>
                Cambiar a rol trabajador
              </button>
            </div>
          </div>
            
        </div>
      </form>
      <IconSlideDown clickHandler={clickHandler}></IconSlideDown>
    </div>
  )
}

export default App;