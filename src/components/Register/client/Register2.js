import React, {useState,useEffect} from 'react';
import '../../../App.css';
import logo from '../../../assets/images/resources/icon-mail.png';
import background from '../../../assets/images/design/bg-erosapp-clientes.png';
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
  const [genero, setGenero]   =   useState(false)
  const [inputs, setInputs]   =   useState({  nationality:"",
                                              email:"",
                                              phoneNumber:"", });

  const context             =   React.useContext(StateContext);

  function handleClick(e){
    e.preventDefault();
    if (inputs.nationality!=='' && inputs.email!=='' && inputs.phoneNumber!=='') {

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

      // Functions.PostAsync("User","setMotel",inputs,context,{email:"callbackContinue",funct:callbackContinue})
      window.location.href = Config.ConfigAppUrl + 'register/client3';
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
    let email          =   e.target.email;
    let _inputs       =   inputs;
        _inputs[email] =   e.target.value;
        setInputs(_inputs)
  }

  useEffect(()=>{
    let _inputs={
      email:store.get("motel").email,
      password:store.get("motel").password,
      confirmPassword:store.get("motel").confirmPassword,
    }
    setInputs(_inputs)
  },[])

  function gotoPrevPage(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/client1';
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
                    <i className="fas fa-id-card"></i>
                  </span>
                </div>
                <input autoComplete="off" defaultValue={inputs.nationality} onChange={KeyUp} type="text" name="nationality" className="form-control" placeholder="Nacionalidad" required/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center mt-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="far fa-envelope"></i>
                  </span>
                </div>
                <input autoComplete="off" defaultValue={inputs.email} onChange={KeyUp} type="text" name="email" className="form-control" placeholder="Correo electrónico" required/>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center mt-3">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                </div>
                <input autoComplete="off" defaultValue={inputs.phoneNumber} onChange={KeyUp} type="text" name="phoneNumber" className="form-control" placeholder="Número telefónico" required/>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-2 mb-4">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <Link onClick={handleClick} className="btn btn-primary btn-block text-white text-decoration-none" >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </form>
      <CurrentPointer totalCnt={7} curPoint={2}></CurrentPointer>
    </div>
  )
}

export default App;
