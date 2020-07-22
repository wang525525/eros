import React from 'react';
import '../../App.css';
import iconSlideUp from '../../assets/images/resources/icon-slide-up.png';

function App(props) {

  return (

    <div className="fixed-bottom d-flex justify-content-center">
      <a href="#" className="img-top-radius" onClick={props.clickHandler}>
        <img src={iconSlideUp} alt="P" className="img-icon-54" />
      </a>
    </div>
    
  )
}

export default App;
