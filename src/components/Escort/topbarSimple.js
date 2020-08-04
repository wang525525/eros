import React from 'react';
import '../../App.css';


function App(props) {
  
  return (
    
    <nav className="navbar fixed-top navbar-light bg-transparent">
      <div className="container">
        <div className="row flex-fill justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-7">
            <div className="d-flex fs-xl">
              <div className="d-flex">
                <a href="#" className="d-flex text-decoration-none text-white" onClick={props.clickHandler}>
                  <i className="fas fa-chevron-left my-auto pr-2"></i>
                </a>
              </div>
              <div className="mx-auto">
                <span className="text-pink">{props.name}</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default App;
