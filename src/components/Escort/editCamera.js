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
    photo_1:'',
    photo_2:'',
    photo_3:'',
    photo_4:'',
    photo_5:'',
    photo_6:'',
    photo_7:'',
    photo_8:'',
    photo_9:'',
  });
  const [photo_0, setPhoto_0] = useState("");
  const [photo_1, setPhoto_1] = useState("");
  const [photo_2, setPhoto_2] = useState("");
  const [photo_3, setPhoto_3] = useState("");
  const [photo_4, setPhoto_4] = useState("");
  const [photo_5, setPhoto_5] = useState("");
  const [photo_6, setPhoto_6] = useState("");
  const [photo_7, setPhoto_7] = useState("");
  const [photo_8, setPhoto_8] = useState("");
  const [photo_9, setPhoto_9] = useState("");

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
      case "photo_2":
        setPhoto_2(v[1])
      break;
      case "photo_3":
        setPhoto_3(v[1])
      break;
      case "photo_4":
        setPhoto_4(v[1])
      break;
      case "photo_5":
        setPhoto_5(v[1])
      break;
      case "photo_6":
        setPhoto_6(v[1])
      break;
      case "photo_7":
        setPhoto_7(v[1])
      break;
      case "photo_8":
        setPhoto_8(v[1])
      break;
      case "photo_9":
        setPhoto_9(v[1])
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

            <div className="row justify-content-center set_width_container">
              <div className="col-12 text-center">
                <div className="App-Question text-center">¡Sube las mejores fotos!</div>
                <div className="text-gray">
                  Formatos JPG y PNG
                </div>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-sm-12 text-center mt-2">
                <div className="row justify-content-center">
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_2" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_2==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_2} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_3" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_3==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_3} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_4" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_4==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_4} className="img-fluid"/>}
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_5" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_5==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_5} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_6" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_6==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_6} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_7" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_7==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_7} className="img-fluid"/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            <div className="row justify-content-center set_width_container">
              <div className="col-12 text-center">
                <div className="App-Question text-center">¡Sube tus videos!</div>
                <div className="text-gray" >
                  Peso limit 150mb, maximo 4 videos
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-sm-12 text-center mt-2">
                <div className="row justify-content-center">
                  <div className="col-6 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_8" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_8==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_8} className="img-fluid"/>}
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="btn btn-secondary text-white p-0 position-relative upload">
                      <input accept="image/*" doc="photo_9" onChange={handleUpload} type="file" name="userfile"/>
                      {(photo_9==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_9} className="img-fluid"/>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
  
  )
}

export default App;
