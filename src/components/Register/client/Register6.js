import React,{useState,useEffect} from 'react';
import '../../../App.css';
import logo from '../../../assets/images/resources/icon-id.png';
import background from '../../../assets/images/design/bg-motel.png';
import Link from '@material-ui/core/Link';
import Config from "../../../helpers/config";
import StateContext from '../../../helpers/contextState'
import Functions from "../../../helpers/functions";
import store from "../../../helpers/store";
import photo_cc_frontalDefault from '../../../assets/images/design/image-cc-default.jpg';
import photo_cc_backDefault from '../../../assets/images/design/image-cc2-default.jpg';

import CurrentPointer from "../../common/CurrentPointer";
import TopBar from "../topbar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

let user  = store.get("user");
let client= store.get("client");

function App() {

  const [inputs, setInputs] = useState({
                                          photo_cc_frontal:"",
                                          photo_cc_back:"",
                                          typeDocument:"",
                                          accept:"",
                                        });

  const context             =   React.useContext(StateContext);

  const url_continue        =   Config.ConfigAppUrl+"Auth/Login";

  function callbackContinue(){
    let insert  = store.get("client");
        Object.entries(inputs).map((v)=>{
          insert[v[0]]=v[1]
        })
    store.set("client",insert);
    let modal = {
              status:true,
              title:"¡Registro con éxito!",
              message:"¡ya puedes usar tu cuenta!",
              ico:{
                    contentColor:"modal-ico-bg-green",
                    ico:'fas fa-check pl-1',
                  },
              customButtom:{
                link:Config.ConfigAppUrl+"Auth/Login",
              }
            }
    context.setState({dialog:modal})
    //document.location.href  = url_continue;
  }

  function handleChange(e){
    store.set("client",{...client,[e.target.name]:e.target.value})

  }

  function handleClick(e){
    e.preventDefault();
    inputs.token  = user.token;
    if (inputs.ano!=='' && inputs.mes!=='' && inputs.dia!=='') {

      /*PUSH DATA STORE*/
      let Client           =   store.get("client");
      Object.entries(inputs).map((v,k)=>{
        if (Client[v[0]]===undefined ) {
          Client[v[0]]   =   "";
        }
        Client[v[0]]     =   v[1] ;
      })
      store.set("client",Client);
      /*END PUSH DATA STORE*/

      // Functions.PostAsync("User","setClientRegister",{token:user.token,birth_date:inputs.ano+'-'+inputs.mes+'-'+inputs.dia},context,{name:"callbackContinue",funct:callbackContinue})
      callbackContinue();
    }else{

    }
  }

  function handleUpload(e){
    let renameFile  = e.target.attributes['doc'].value;
    Functions.PostAsync("User","uploadDocument",{table:"clients",renameFile:renameFile,token:user.token,userfile:e.target.files[0],type:e.target.attributes['doc'].value},context,{name:"callbackChangeImage",funct:callbackChangeImage})
    e.preventDefault();
  }

  function callbackChangeImage(data){
    Object.entries(data.response).map((v)=>{
      if (v[0]!=='error' && v[0]!=='callback') {
        setInputs({
          ...inputs,
          [v[0]]: v[1]
        });
        let push        = store.get("client");
            push[v[0]]  = v[1]
        store.set("client",push);
      }
    })
  }


  useEffect(()=>{
    let __inputs    = inputs
    Object.entries(inputs).map((v,k)=>{
      if(client[v[0]]!==undefined) {
        __inputs[v[0]]  = client[v[0]];
      }
    })

    // __inputs.photo_cc_frontal   =   store.get("base_url")+client.photo_cc_frontal;
    // __inputs.photo_cc_back      =   store.get("base_url")+client.photo_cc_back;

    setInputs(__inputs)

  },[])

  function gotoPrevPage(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/client5';
  }

  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <TopBar clickHandler={gotoPrevPage}></TopBar>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center">
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
                  <div className="App-Question text-center">Validación de identidad</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="h6">
                ¡Tranquil@, tu información es confidencial!
                <br/>
                Sólo queremos comprobar que eres mayor de edad.
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2 mb-4">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="App-Question--x2 text-center">Adjunta tu documento de identidad</div>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="input-group mb-3">
                  <select className="form-control" name="type_identity_document" onChange={handleChange} defaultValue={client.type_identity_document}>
                    <option>Seleccione el tipo de documento</option>
                    <option value="Cédula de ciudadanía">Cédula de ciudadanía</option>
                    <option value="Cédula de extrajería">Cédula de Extrajería</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="pep">PEP</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <div className="row justify-content-center">
                <div className="col-6 col-sm-6 mb-4 text-center">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_cc_frontal" onChange={handleUpload} type="file" name="userfile"/>
                    <img className="img-fluid" src={(inputs.photo_cc_frontal!=='')?inputs.photo_cc_frontal:photo_cc_frontalDefault} alt="front"/>
                  </div>
                </div>
                <div className="col-6 col-sm-6 mb-4 text-center">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_cc_back" onChange={handleUpload} type="file" name="userfile"/>
                    <img className="img-fluid"  src={(inputs.photo_cc_back!=='')?inputs.photo_cc_back:photo_cc_backDefault}  alt="back"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-1">
            <div className="col-sm-12 col-md-8 col-lg-7 text-centerr">
              <Link onClick={handleClick} className="btn btn-primary btn-block text-white text-decoration-none" href={Config.ConfigAppUrl+"Auth/Login"} >
                Finalizar
              </Link>
            </div>
          </div>
        </div>
      </form>
      <CurrentPointer totalCnt={7} curPoint={6}></CurrentPointer>
    </div>
  );
}

export default App;
