import React, { useState, useEffect } from 'react';

import '../../App.css';
import Functions from "../../helpers/functions";
import store from "../../helpers/store";
import StateContext from '../../helpers/contextState'

let user    = store.get("user");
let motel  = store.get("motel");

function App() {

  const [inputs, setInputs] = useState({
    photo_0:'',
    photo_1:''
  });
  const [photo_0, setPhoto_0] = useState("");
  const [photo_1, setPhoto_1] = useState("");

  const context = React.useContext(StateContext);

  function handleUpload(e){
    let renameFile  = e.target.attributes['doc'].value;
    Functions.PostAsync("User","uploadPhoto",{renameFile:renameFile,token:user.token,userfile:e.target.files[0],type:e.target.attributes['doc'].value},context,{name:"callbackChangeImage",funct:callbackChangeImage})
    e.preventDefault();
  }

  function callbackChangeImage(data){
    Object.entries(data.response).map((v)=>{
      if (v[0]!=='error' && v[0]!=='callback') {
        setInputs({
          ...inputs,
          [v[0]]: v[1]
        });

        set_photos(v)

        let push        = store.get("motel");
            push[v[0]]  = v[1]
        store.set("motel",push);
      }
    })
  }


  useEffect(()=>{
    let __inputs    = inputs
    Object.entries(inputs).map((v,k)=>{
      if(motel[v[0]]!==undefined) {
        __inputs[v[0]]  = motel[v[0]];
        set_photos([v[0],store.get("base_url")+motel[v[0]]])
      }
    })
    setInputs(__inputs)
  },[])

  function set_photos(v){
    switch (v[0]) {
      case "photo_0":
        setPhoto_0(v[1])
      break;
      case "photo_1":
        setPhoto_1(v[1])
      break;
    }
  }

  return (

          <div className="App-form-register container">
            <div className="row justify-content-center set_width_container">
              <div className="col-12 text-center">
                <div className="App-Question text-center">Elige tu foto de perfil</div>
                <div className="text-gray" >
                  Formatos JPG y PNG
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-sm-12 text-center mt-2">
                <div className="row justify-content-center">
                  <div className="col-6 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_0" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_0==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_0} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_1" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_1==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_1} className="img-fluid"/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
  
  )
}

export default App;
