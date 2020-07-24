import React from 'react';
import '../../App.css';


function App(props) {
  
  return (
    
    <ul className="fas progressbar">
      <li className={(props.curPoint < 0) ? 'unpast' : ((props.curPoint > 0) ? 'past' : '') }>Solicita el servicio</li>
      <li className={(props.curPoint < 1) ? 'unpast' : ((props.curPoint > 1) ? 'past' : '') }>Confirmacion del servicio</li>
      <li className={(props.curPoint < 2) ? 'unpast' : ((props.curPoint > 2) ? 'past' : '') }>Efectuar pago</li>
    </ul>
    
  )
}

export default App;
