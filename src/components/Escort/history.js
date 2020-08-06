import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

import HistoryTodo from "./historyTodo";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


function App() {

  function gotoEscort(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'escort/setting';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoEscort} name={'Editar información'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-7">
              
              <HistoryTodo></HistoryTodo>

            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
