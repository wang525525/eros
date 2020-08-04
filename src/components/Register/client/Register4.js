import React,{useState,useEffect}  from 'react';
import '../../../App.css';
import logo from '../../../assets/images/resources/icon-picture.png';
import background from '../../../assets/images/design/bg-erosapp-clientes.png';
import Link from '@material-ui/core/Link';
import Config from "../../../helpers/config";
import StateContext from '../../../helpers/contextState'
import Functions from "../../../helpers/functions";
import store from "../../../helpers/store";

import CurrentPointer from "../../common/CurrentPointer";
import TopBar from "../topbar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};

let user    = store.get("user");
let client  = store.get("client");

function App() {

  const [inputs, setInputs] = useState({
                                          photo_0:'',
                                          photo_1:'',
                                        });
  const [photo_0, setPhoto_0] = useState("");
  const [photo_1, setPhoto_1] = useState("");

  const context             =   React.useContext(StateContext);

  function handleUpload(e){
    let renameFile  = e.target.attributes['doc'].value;
    Functions.PostAsync("User","uploadPhotoClient",{renameFile:renameFile,token:user.token,userfile:e.target.files[0],type:e.target.attributes['doc'].value},context,{name:"callbackChangeImage",funct:callbackChangeImage})
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
        set_photos(v)
      }
    })
  }

  useEffect(()=>{
    let __inputs    = inputs
    Object.entries(inputs).map((v,k)=>{
      if(client[v[0]]!==undefined) {
        __inputs[v[0]]  = client[v[0]];
        set_photos([v[0],store.get("base_url")+client[v[0]]])
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

  function handleClick(e){
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/client5';
  }

  function gotoPrevPage(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/client3';
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
            </div>
          </div>
          <div className="row justify-content-center mt-4 mb-1">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="row justify-content-center mt-4 mb-1">
                <div className="col-6 col-sm-6">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_0" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_0==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_0} className="img-fluid"/>}
                  </div>
                </div>
                <div className="col-6 col-sm-6">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_1" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_1==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_1} className="img-fluid"/>}
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="row justify-content-center mt-4 mb-1">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="App-Question text-center">¡Así te verán!</div>
            </div>
          </div>
          <div className="row justify-content-center mt-0">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center">
              <div className="text-gray mb-2"> Formatos JPG y PNG</div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-1 mb-4">
            <div className="col-sm-12 col-md-8 col-lg-7">
              <Link onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none" >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </form>
      <CurrentPointer totalCnt={7} curPoint={4}></CurrentPointer>
    </div>
  );
}

export default App;
