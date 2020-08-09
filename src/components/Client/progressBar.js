import React from 'react';
import '../../App.css';


function App(props) {
  
  return (
    
    <ul className="fas progressbar">
      <li className={(props.curPoint < 0) ? 'unpast' : ((props.curPoint > 0) ? 'past' : '') }>
        <span className="fw-normal font-weight-normal">Solicita el servicio</span>
      </li>
      <li className={(props.curPoint < 1) ? 'unpast' : ((props.curPoint > 1) ? 'past' : '') }>
        <span className="fw-normal font-weight-normal">Confirmacion del servicio</span>
      </li>
      <li className={(props.curPoint < 2) ? 'unpast' : ((props.curPoint > 2) ? 'past' : '') }>
        <span className="fw-normal font-weight-normal">Efectuar pago</span>
      </li>
    </ul>
    
  )
}

export default App;
