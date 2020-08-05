import React from 'react';
import '../../App.css';
import iconSlideDown from '../../assets/images/resources/icon-slide-down.png';

function App(props) {

  return (

    <div className="fixed-bottom d-flex justify-content-center">
      <a href="#" className="img-top-radius" onClick={props.clickHandler}>
        <img src={iconSlideDown} alt="P" className="img-icon-48" />
      </a>
    </div>
    
  )
}

export default App;
