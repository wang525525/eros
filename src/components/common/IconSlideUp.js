import React from 'react';
import '../../App.css';
import iconSlideUp from '../../assets/images/resources/icon-slide-up.png';

const slideUP = {
  'background': '#fff',
  'width': '100px',
  'text-align': 'center',
  'border-top-left-radius': '10px',
  'border-top-right-radius': '10px',
}
function App() {

  return (

    <div className="fixed-bottom d-flex justify-content-center">
      <a href="javascript:void(0);" style={slideUP}>
        <img src={iconSlideUp} alt="P" className="img-icon-54" />
      </a>
    </div>
    
  )
}

export default App;
