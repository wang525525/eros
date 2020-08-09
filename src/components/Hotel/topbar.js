import React, {useState,useEffect} from 'react';
import '../../App.css';
import bedImg from '../../assets/images/resources/icon-bed.png';

import Config from "../../helpers/config";


function App(props) {
  
  function gotoBonus(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/refer';
  }

  function gotoNotification(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'hotel/notification';
  }

  return (
    
    <nav className="navbar navbar-light bg-transparent w-100">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <div className="d-flex">
              <div className="d-flex ml-auto fs-xxl">
                {/* <a href="#" onClick={e => e.preventDefault()} className="text-white my-auto p-3">
                  <img src={bedImg} className="img-icon-32" />
                </a> */}
                <a href="#" onClick={props.showNotificationModal} className="text-white my-auto p-3">
                  <i className="fa fa-concierge-bell"></i>
                </a>
                <a href="#" onClick={gotoBonus} className="text-white my-auto p-3">
                  <i className="fa fa-tag"></i>
                </a>
                <a href="#" onClick={gotoNotification} className="text-white my-auto p-3">
                  <i className="fa fa-bullhorn"></i>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default App;
