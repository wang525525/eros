import React, { useState } from 'react';
import '../../App.css';
import logo from '../../assets/images/resources/erosapp-user-check.png';
import background from '../../assets/images/design/bg-escort.jpeg';
import Link from '@material-ui/core/Link';
import Config from "../../helpers/config";
import ContentBoxHomeEscort from "../../screens/ContentBoxHomeEscort";
import StateContext from '../../helpers/contextState'
import Functions from "../../helpers/functions";
import store from "../../helpers/store";
import Autocomplete from "../AutocompleteCountry";

import ficha from '../../assets/images/resources/eroscoin.png';
import IconSlideDown from '../common/IconSlideDown';

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

  function _setGender(gender) {
    let _inputs = inputs;
    _inputs.gender = gender;
    setGender(gender);
    setInputs(_inputs)
  }

  function KeyUp(e) {
    let name = e.target.name;
    let _inputs = inputs;
    _inputs[name] = e.target.value;
    setInputs(_inputs)
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <div className=" App-Question background-text leter p-2 "> Sexy20</div>

              <div className="d-flex background-text p-2">
                <div className="">
                  <div className="text-left App-Question--x2 ">
                    $100
                  </div>
                  <div className="App-Question--x2  text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                
                <div className="ml-auto mt-auto mb-auto">
                  <div onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none"
                    href="javascript:void(0);" >
                    Retirar
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">
              <ContentBoxHomeEscort gender={gender} setGender={_setGender} />
            </div>
          </div>
            

          {(gender) ? <div className="row justify-content-md-center mt-4">
            <div className="col-12 col-sm-4 text-center">
              <Link onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none" href={Config.ConfigAppUrl + "Auth/EscortRegister1"} >
                Continuar
              </Link>
            </div>
          </div> : ''
          }
        </div>
      </form>
      <IconSlideDown></IconSlideDown>
    </div>
  )
}

export default App;
