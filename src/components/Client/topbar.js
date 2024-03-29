import React, {useState,useEffect} from 'react';
import '../../App.css';
import logo from '../../assets/images/design/logo.png';

import Config from '../../helpers/config';

function App() {
  
  function gotoSeeker(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/seeker';
  }

  function gotoNotification(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/notification';
  }
  
  function gotoRefer(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/refer';
  }
  return (
    
    <nav className="navbar navbar-light bg-transparent w-100">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <div className="d-flex fs-xxl">
              <div className="d-flex mr-auto">
                <a href="#" onClick={gotoSeeker} className="text-white my-auto p-3">
                  <i className="fa fa-search"></i>
                </a>
              </div>
              <div className="d-flex mx-auto">
                <a href="#" onClick={e => e.preventDefault()} className="text-white my-auto p-3">
                  <img src={logo} className="img-icon-height-48" />
                </a>
              </div>
              <div className="d-flex ml-auto">
                <a href="#" onClick={gotoRefer} className="text-white my-auto p-3">
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
