import React, {useState,useEffect} from 'react';
import '../../App.css';

import Config from '../../helpers/config';

function App(props) {
  
  function gotoNotification(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/notification';
  }

  function gotoBonus(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/refer';
  }
  
  return (
    
    <nav className="navbar fixed-top navbar-light bg-transparent">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <div className="d-flex">
              <div className="d-flex ml-auto">
                <a href="#" onClick={gotoBonus} className="text-white my-auto p-3">
                  <i className="fa fa-tag fa-2x"></i>
                </a>
                <a href="#" onClick={props.showNotificationModal} className="text-white my-auto p-3">
                  <i className="fa fa-concierge-bell fa-2x"></i>
                </a>
                <a href="#" onClick={gotoNotification} className="text-white my-auto p-3">
                  <i className="fa fa-bullhorn fa-2x"></i>
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
