import React, { useState, useEffect } from 'react';
import '../../App.css';


function App(props) {

  return (

    <nav className="navbar fixed-top navbar-light bg-transparent">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <div className="d-flex">
              <div className="d-flex mr-auto">
                <a href="#" className="d-flex text-decoration-none text-white" onClick={props.clickHandler}>
                  <i className="fas fa-chevron-left my-auto pr-2"></i>
                  Volver
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
