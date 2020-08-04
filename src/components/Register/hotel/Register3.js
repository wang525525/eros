import React,{useState,useEffect} from 'react';
import '../../../App.css';
import logo from '../../../assets/images/resources/erosapp-hotel-pictures.png';
import background from '../../../assets/images/design/bg-motel.png';
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
let motel  = store.get("motel");

function App() {

  const [inputs, setInputs] = useState({
                                          photo_0:'',
                                          photo_1:'',
                                          photo_2:'',
                                          photo_3:'',
                                          photo_4:'',
                                          photo_5:'',
                                        });
  const [photo_0, setPhoto_0] = useState("");
  const [photo_1, setPhoto_1] = useState("");
  const [photo_2, setPhoto_2] = useState("");
  const [photo_3, setPhoto_3] = useState("");
  const [photo_4, setPhoto_4] = useState("");
  const [photo_5, setPhoto_5] = useState("");

  const context             =   React.useContext(StateContext);

  function callbackContinue(data){
    let insert  = store.get("motel");
        Object.entries(inputs).map((v)=>{
          insert[v[0]]=v[1]
        })
    store.set("motel",insert);

    //document.location.href  = url_continue;
  }

  function handleChange(e){
    store.set("motel",{...motel,[e.target.name]:e.target.value})
  }

  function handleClick(e){
    e.preventDefault();

    window.location.href = Config.ConfigAppUrl + 'register/hotel4';

    // inputs.token  = user.token;
    // if (  inputs.photo_0==='' ||
    //       inputs.photo_1==='' ||
    //       inputs.photo_2==='') {
    //   let modal = {
    //             status:true,
    //             title:"Error",
    //             message:"Debes seleccionar al menos una foto",
    //             ico:{
    //                   contentColor:"modal-ico-bg-primary",
    //                   ico:'fas fa-exclamation pl-3',
    //                 },
    //           }
    //   context.setState({dialog:modal})
    // }else{
    //   // document.location.href= e.target.href
    //   window.location.href = Config.ConfigAppUrl + 'register/hotel4';
    // }
  }

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
    }
  }

  function gotoPrevPage(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'register/hotel2';
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
                  <div className="App-Question text-center">¡Sube las mejores fotos!</div>
                  <div className="text-gray" href={Config.ConfigAppUrl+"Auth/Recover"} >
                    Formatos JPG y PNG
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8 col-lg-7 text-center mt-2">
              <div className="row justify-content-center">
                <div className="col-4 col-sm-4 mb-4">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_0" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_0==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_0} className="img-fluid"/>}
                  </div>
                </div>
                <div className="col-4 col-sm-4 mb-4">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_1" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_1==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_1} className="img-fluid"/>}
                  </div>
                </div>
                <div className="col-4 col-sm-4 mb-4">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_2" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_2==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_2} className="img-fluid"/>}
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
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
                <div className="col-4 col-sm-4 mb-4">
                  <div className="btn btn-secondary text-white p-0 position-relative upload">
                    <input accept="image/*" doc="photo_5" onChange={handleUpload} type="file" name="userfile"/>
                    {(photo_5==='')?<i className="fas fa-plus fa-2x p-4"></i>:<img src={photo_5} className="img-fluid"/>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-md-center mt-1">
            <div className="col-sm-12 col-md-8 col-lg-7 text-centerr">
              <Link onClick={handleClick} className="btn btn-primary btn-block btn-lg text-white text-decoration-none" >
                Continuar
              </Link>
            </div>
          </div>
        </div>
      </form>
      <CurrentPointer totalCnt={7} curPoint={3}></CurrentPointer>
    </div>
  );
}

export default App;
