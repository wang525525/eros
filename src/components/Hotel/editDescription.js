import React, { useState } from 'react';
import descript from '../../assets/images/resources/erosapp-icon-parking.png';

import '../../App.css';
import Selector from "../Selector";

function App() {

  const [inputs, setImputs] = useState({
    has_parking:{
      items:["Si","No"],
      selection:"Si",
    },
    has_bathrom:{
      items:["Si","No"],
      selection:"Si",
    },
    description:"",
  });

  function KeyUp(e) {
    let name          =   e.target.name;
    let _inputs       =   inputs;
    _inputs[name] =   e.target.value;
    setImputs(_inputs)
  }

  return (

          <div className="App-form-register container">
            <div className="row justify-content-center">
              <div className="col-sm-12 text-center mt-4">
                <div className="row justify-content-center">
                  <div className="row justify-content-center">
                    <div className="col-8 text-center mt-5">
                      <img className="img-fluid" src={descript} alt="ErosApp"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center ">
              <div className="col-sm-12 text-center mt-3">
                <div className="App-Question text-center">¿Cuéntanos del lugar?</div>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-sm-12 ">
                <div className="App-Question--x2">¿Tiene parqueadero?</div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-12 mt-2">
                <Selector
                    setImputs={setImputs}
                    inputs={inputs}
                    name="has_parking" />
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-sm-12 ">
                <div className="App-Question--x2">¿Tiene baño?</div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-12 mt-2">
                <Selector
                    setImputs={setImputs}
                    inputs={inputs}
                    name="has_bathrom" />
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-sm-12">
                <div className="App-Question--x2">¿Cómo lo describes?</div>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-sm-12 text-center">
                <div className="input-group mb-4">
                  <textarea
                            defaultValue={inputs.description}
                            name="description"
                            onChange={KeyUp}
                            maxLength="120"
                            rows="6"
                            placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            className="form-control" ></textarea>
                </div>
              </div>
            </div>
          </div>
  
  )
}

export default App;
