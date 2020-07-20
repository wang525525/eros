import React,{useEffect,useState} from 'react';
import hotel from '../assets/images/resources/icono-hotel-motel-2.png';
import domicilio from '../assets/images/resources/icono-a-domicilio.png';
import miDomicilio from '../assets/images/resources/icon-bed.png';
import store from "../helpers/store";

//se crean los items por
const  inputsDefault  = {
                          parking:{
                            items:["Si","No"],
                            selection:"Si",
                          },


                        }


let escort= store.get("escort");

function App(props) {

  const [estados, setEstados]   =   useState({hotel:false,adomicilio:false,midomicilio:false,})

  const [inputs, setInputs] =   useState(inputsDefault);

  const   items = [ {
                        label:"Hotel - Motel",
                        ico:hotel,
                        form:<Hotel/>,
                        name:"hotel"
                      },{
                        label:"A domicilio",
                        ico:domicilio,
                        form:<Adomicilio/>,
                        name:"adomicilio"
                      },{
                        label:"Mi domicilio",
                        ico:miDomicilio,
                        form:<Midomicilio/>,
                        name:"midomicilio"
                      },
                    ]



  useEffect(()=>{
    content()
  },[])

  function content(){
    let elements = document.querySelectorAll(".box-2x2");
    Object.entries(elements).map((v)=>{
      v[1].style.height = v[1].offsetWidth + 'px'
    })
  }

  function handlerChangeState(value){
    let newState        =   {}
    Object.entries(estados).map((v,k)=>{
      if(v[0]===value.name && v[1]){
        newState[v[0]] = false
      }else if(v[0]===value.name && !v[1]){
        newState[v[0]] = true
      }else {
        newState[v[0]] = v[1]
      }
    })
    setEstados(newState)
  }

  function handleChange(e){
    let _inputs = inputs
        _inputs[e.target.name] =  e.target.value;
    setInputs(_inputs)
    //console.log(e.target.name,e.target.value);
    store.set("escort",{...escort,[e.target.name]:e.target.value})

  }

  function Adomicilio(){
    return <div className="f-2 mt-2 p-3">
      <div className="App-Question--x2 text-left">
        Tarifa para transporte
      </div>
      <div className="text-gray text-left mb-3">
        Fija un precio adicional para movilizarte hasta el
        lugar de tu cliente
      </div>

      <div className="row justify-content-md-center mt-0">
        <div className="col-12 ">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
              </span>
            </div>
            <input  type="text"
                    name="tarifa_transporte"
                    defaultValue={inputs.tarifa_transporte}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Tarifa de transporte"/>
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  }

  function Midomicilio(){
    return <div className="f-2  mt-2 p-3">

    <div className="row justify-content-md-center mt-0">
      <div className="col-12 ">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
            <i class="fas fa-home"></i>
            </span>
          </div>
          <input  type="text"
                  name="direccion"
                  defaultValue={inputs.direccion}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Dirección de mi domicilio"/>
          <div className="input-group-append">
            <span className="input-group-text">
              <i className="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
      <div className="text-gray text-left mb-3">
        Esta información sólo estará diponible al cliente
        cuando se haya realizado el pago
      </div>
      <div className="App-Question--x2 text-left mb-2">
        ¿Cuenta con parqueadero?
      </div>
    </div>
  }

  function Hotel(){
    return <div className="f-2 mt-2 p-3">
      <div className="App-Question--x2 text-left">
        Tarifa para transporte
      </div>
      <div className="text-gray text-left mb-3">
        Fija un precio adicional para movilizarte hasta el
        lugar de tu cliente
      </div>

      <div className="row justify-content-md-center mt-0">
        <div className="col-12 ">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
              </span>
            </div>
            <input  type="text"
                    name="hotel"
                    defaultValue={inputs.hotel}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Tarifa de transporte"/>
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
          </div>
        </div>
      </div>


    </div>
  }

  return (<div className="row mt-2 content-box ">
            {
              items.map((v,k)=>{
                            console.log(estados[v.name],"manuel");
                            return  <>
                                      <div key={k} className="col-12 text-center p-1">
                                        <div className={(estados[v.name]===true)?'box-1x1 box-1x1-active rounded':'box-1x1 rounded'} onClick={()  =>{ handlerChangeState(v) }}>
                                          <img  src={v.ico} />
                                          <span>{v.label}</span>
                                        </div>
                                        {(estados[v.name])?v.form:''}
                                      </div>
                                    </>})
            }
          </div>
  )
}

export default App;
