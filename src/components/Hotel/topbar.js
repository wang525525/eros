import React, {useState,useEffect} from 'react';
import '../../App.css';
import moneda from '../../assets/images/resources/eroscoin.png';


function App() {
  
  return (
    
    <nav className="navbar fixed-top navbar-light bg-transparent">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <div className="d-flex">
              <div className="d-flex ml-auto">
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src={moneda} alt="P" className="img-icon-54" />
                </a>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src={moneda} alt="P" className="img-icon-54" />
                </a>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src={moneda} alt="P" className="img-icon-54" />
                </a>
                <a href="#" onClick={e => e.preventDefault()}>
                  <img src={moneda} alt="P" className="img-icon-54" />
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
