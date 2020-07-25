import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";
import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

import HistoryTodo from "./historyTodo";
import HistoryName from "./historyName";
import HistoryService from "./historyService";
import HistroyFech from "./historyFech";

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
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Tabs>
                <Tab active={true} value="todo" header={
                    <span className="fs-n">Todo</span>
                  }
                >

                  <HistoryTodo></HistoryTodo>

                </Tab>

                <Tab value="name" header={
                    <span className="fs-n">
                      <i className="fas fa-user pr-2"></i> Nombre
                  </span>
                  }
                >

                  <HistoryName></HistoryName>

                </Tab>

                <Tab value="service" header={
                    <span className="fs-n">
                      <i className="fas fa-female pr-2"></i> Servicio
                    </span>
                  }
                >

                  <HistoryService></HistoryService>

                </Tab>

                <Tab value="calendar" header={
                    <span className="fs-n">
                      <i className="fas fa-calendar pr-2"></i> Fech
                    </span>
                  }
                >

                  <HistroyFech></HistroyFech>

                </Tab>

              </Tabs>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default App;
