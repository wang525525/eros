import React,{ useState,useContext,useEffect } from 'react';
import '../../App.css';
import background from '../../assets/images/design/background.jpg';
import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState';
import Selector from "../Selector";
import store from "../../helpers/store";
import Link from '@material-ui/core/Link';
import ItemsDinamics from "../../screens/ItemsDinamics";
import Functions from "../../helpers/functions";



const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

const  inputsDefault  = {
                          fumar:{
                            items:["Si","No","Ocasionalmente"],
                            selection:"No",
                          },
                          beber:{
                            items:["Si","No","Ocasionalmente"],
                            selection:"No",
                          },
                          cirugias:{
                            "Senos":false,
                            "Cola":false,
                            "Lipoescultura":false,
                            "Bichectomia":false,
                          }
                        }


const url_continue        =   Config.ConfigAppUrl+"Auth/EscortRegister8";

let user  = store.get("user");
let escort= store.get("escort");

function App() {

  const context             =   React.useContext(StateContext);
  const [inputs, setInputs] =   useState(inputsDefault);
  const state = useContext(StateContext);


  function handleClick(e){
    e.preventDefault();
    inputs.token  = user.token;

    /*PUSH DATA STORE*/
    let Escort           =   store.get("escort");
    Object.entries(inputs).map((v,k)=>{
      if (Escort[v[0]]===undefined ) {
        Escort[v[0]]    =   "";
      }
      Escort[v[0]]      =   v[1] ;
    })

    //return console.log(inputs);

    store.set("escort",Escort);
    /*END PUSH DATA STORE*/
    Functions.PostAsync("User","setEscortRegisterCirugias",{data:JSON.stringify(inputs),token:user.token,breast_size:inputs.breast_size},context,{name:"callbackContinue",funct:callbackContinue})
  }

  function callbackContinue(data){
    let insert  = store.get("escort");
        Object.entries(inputs).map((v)=>{
          insert[v[0]]=v[1]
        })
    store.set("escort",insert);
    document.location.href  = url_continue;
  }

  function handleChange(e){
    let _inputs = inputs
        _inputs[e.target.name] =  e.target.value;
    setInputs(_inputs)
    //console.log(e.target.name,e.target.value);
    store.set("escort",{...escort,[e.target.name]:e.target.value})

  }

  useEffect(()=>{
    if (escort.json_cirugias!==undefined && escort.json_cirugias!==null && escort.json_cirugias!=="null" && escort.json_cirugias!=="") {
      let json_cirugias     =   JSON.parse(escort.json_cirugias)
      let __inputs          =   inputs
      Object.entries(json_cirugias.cirugias).map((v)=>{
        if (    v[1]   ) {
          __inputs.cirugias[v[0]]   =  true
        }else {
          __inputs.cirugias[v[0]]   =  false
        }
      })

      if (json_cirugias.fumar!==undefined) {
        __inputs.fumar    =   json_cirugias.fumar;
      }
      if (json_cirugias.beber!==undefined) {
        __inputs.beber    =   json_cirugias.beber;
      }
      if (escort.breast_size!==undefined) {
        __inputs.breast_size    =   escort.breast_size;
      }

      setInputs(__inputs)
    }else {
      if (escort.json_cirugias!==undefined && escort.json_cirugias!==null && escort.json_cirugias!=="null" && escort.json_cirugias!=="") {
        let json_cirugias   =   JSON.parse(escort.json_cirugias)
        let cirugias        =   json_cirugias.cirugias
        let __inputs        =   inputs
        __inputs.breast_size  =   escort.breast_size
        Object.entries(inputs.cirugias).map((v)=>{
          if (    cirugias[v[0]]   ) {
            __inputs.cirugias[v[0]]   =  true
          }else {
            __inputs.cirugias[v[0]]   =  false
          }
        })
        setInputs(__inputs)
      }
    }
  },[])


  return (
    <div className="App-LogoCenter App-splash" style={divBackground}>
      <form className="App-form App-form-register">
        <div className="container">
          <div className="row justify-content-center mb-1 mt-4">
            <div className="col-12 col-sm-4">
              <div className="App-Question--x2 text-left">Talla de senos</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="far fa-dot-circle"></i>
                  </span>
                </div>
                <input type="text" name="breast_size" defaultValue={inputs.breast_size} onChange={handleChange} className="form-control" placeholder="Medidas en centímetros"/>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <ItemsDinamics
            name="cirugias"
            inputs={inputs}
            setInputs={setInputs}
            title="Agregar más cirugías"
            itemsDefault={inputsDefault.cirugias}/>

          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question--x2 text-left">¿Fumas?</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4 ">
              <Selector
                  setImputs={setInputs}
                  inputs={inputs}
                  name="fumar" />
            </div>
          </div>
          <div className="row justify-content-md-center mt-0">
            <div className="col-12 col-sm-4">
              <div className="App-Question--x2 text-left">¿Bebes?</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-12 col-sm-4">
              <Selector
                  setImputs={setInputs}
                  inputs={inputs}
                  name="beber" />
            </div>
          </div>
          <div className="row justify-content-md-center mt-0 mb-4">
            <div className="col-12 col-sm-4">
              <Link onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none" href={Config.ConfigAppUrl+"Auth/EscortRegister8"} >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
