import React from 'react';
import '../../App.css';

function App(props) {

  let showPointer = [];

  for (let i = 0; i < props.totalCnt; i++) {
    showPointer.push(
      <p className={(props.curPoint === i) ? 'text-pink px-1' : 'px-1'} key={i}>
        <i className="fa fa-circle fs-s" aria-hidden="true"></i>
      </p>
    );
  }

  return (
    <div className="d-flex justify-content-center pt-5">
      {showPointer}
    </div>
  )
}

export default App;
