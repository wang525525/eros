import React, {useState,useEffect} from 'react';
import '../../../App.css';
import logo from '../../../assets/images/resources/icon-mail.png';
import background from '../../../assets/images/design/bg-motel.png';
import Link from '@material-ui/core/Link';
import Config from '../../../helpers/config';
import StateContext from '../../../helpers/contextState'
import Functions from "../../../helpers/functions";
import store from "../../../helpers/store";

import CurrentPointer from "../../common/CurrentPointer";
import TopBar from "../topbar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

let url_continue = false;

function App() {
  const [inputs, setInputs]   =   useState({  verification_code:"" });

  const context             =   React.useContext(StateContext);

  function handleClick(e){
    e.preventDefault();
    if (inputs.verificationCode!=='') {

      /*PUSH DATA STORE*/
      let Motel           =   store.get("motel");
      Object.entries(inputs).map((v,k)=>{
        if (Motel[v[0]]===undefined ) {
          Motel[v[0]]   =   "";
        }
        Motel[v[0]]     =   v[1] ;
      })
      store.set("motel",Motel);
      /*END PUSH DATA STORE*/
      

      url_continue      =   e.target.href;
      inputs.user_id    =   store.get("user").user_id;

      // Functions.PostAsync("User","setMotel",inputs,context,{verificationCode:"callbackContinue",funct:callbackContinue})
      window.location.href = Config.ConfigAppUrl + 'register/hotel3';
    }else {
      let modal = {
                status:true,
                title:"Campos incompletos",
                message:"Para completar el proceso de registro debes sumistrar la nacionalidad y el género",
                ico:{
                      contentColor:"modal-ico-bg-primary",
                      ico:'fas fa-exclamation pl-3',
                    },
              }
      context.setState({dialog:modal})
    }
  }

  function callbackContinue(){
    let user  = store.get("user");
        user.username = inputs.username
        store.set("user",user);
        document.location.href  = url_continue;
  }

  function KeyUp(e) {
    let verificationCode          =   e.target.verificationCode;
    let _inputs       =   inputs;
        _inputs[verificationCode] =   e.target.value;
        setInputs(_inputs)
  }

  useEffect(()=>{
    let _inputs={
      verificationCode:store.get("motel").verificationCode,
    }
    setInputs(_inputs)
  },[])

  function gotoPrevPage(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/hotel1';
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <TopBar clickHandler={gotoPrevPage}></TopBar>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center">
                <div className="row justify-content-center">
                  <div className="col-8 text-center mt-5">
                    <img className="img-fluid" src={logo} alt="ErosApp"/>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mt-5">
                <div className="col-12 text-center">
                  <div className="App-Question text-center">Datos adicionales</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center mt-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-shield-alt"></i>
                  </span>
                </div>
                <input autoComplete="off" defaultValue={inputs.verificationCode} onChange={KeyUp} type="text" name="verificationCode" className="form-control" placeholder="Digitar código de verificación" required/>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-2 mb-4">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <Link onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none">
                Enviar código
              </Link>
            </div>
          </div>
          <div className="row justify-content-md-center mt-2 mb-4">
            <div className="col-sm-12 col-md-8 col-lg-7 fs-n text-center text-white">
              ¿No recibiste el código de verificación?<br/>
              <a href="#" className="fs-n font-weight-bolder text-decoration-none text-white" onClick={(e) => {e.preventDefault();}}>Dirígete aquí</a> para reenviar un nuevo código de verificación.
            </div>
          </div>
        </div>
      </form>
      <CurrentPointer totalCnt={7} curPoint={2}></CurrentPointer>
    </div>
  )
}

export default App;
