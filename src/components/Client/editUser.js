import React, { useState } from 'react';

import '../../App.css';

function App() {

  const contents = [{
    label: "Hobbies & gustos"
  },{
    label: "¿Qué días trabajo?"
  },{
    label: "Edad y estatura"
  },{
    label: "Contextura"
  },{
    label: "Tono de piel"
  },{
    label: "Estilo de cabello"
  },{
    label: "Color de ojos"
  },{
    label: "Color de cabello"
  },{
    label: "Talla de senos"
  },{
    label: "Cirugías estéticas"
  },{
    label: "¿Bebes?"
  },{
    label: "¿Fumas?"
  }];
  
  return (

      <div>
        {
          contents.map((v, k) => {
            return (
              <div className="d-flex border-b w-100 py-3" key={k}>
                <div className="">
                  <div className="App-Question--x2 font-weight-bold">{v.label}</div>
                </div>
                <div className="ml-auto my-auto">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            )
          })
        }
        
      </div>
  
  )
}

export default App;
