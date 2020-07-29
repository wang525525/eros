import React, { useState } from 'react';


import '../../App.css';
import background from '../../assets/images/design/bg-escort.jpeg';
import bonus20Img from '../../assets/images/resources/bonus-20.png';
import bonus50Img from '../../assets/images/resources/bonus-50.png';
import bonus100Img from '../../assets/images/resources/bonus-100.png';
import bancolombiaImg from '../../assets/images/resources/icono-bancolombia.png';
import creditImg from '../../assets/images/resources/icono-tarjeta-credito.png';
import girlImg from '../../assets/images/design/image-girl.jpg';

import Config from "../../helpers/config";

import TopbarSimple from "./topbarSimple";

import Tabs from "../common/Tabs";
import Tab from "../common/Tab";

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
      <TopbarSimple clickHandler={gotoEscort} name={'Bonos y referidos'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6">
              <Tabs>
                <Tab active={true} value="refiere" header="Refiere y gana">

                  <div className="row justify-content-center">
                    <div className="col-6 col-sm-6 text-center mt-5">
                      <img className="img-fluid" src={bancolombiaImg} alt="ErosApp"/>
                    </div>
                  </div>
                  
                  <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-12 text-center">
                      <div className="App-Question text-center">
                        Vaya, aún no tienes bonos.
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center mt-3">
                    <div className="col-12 col-sm-12 text-center">
                      <div className="fs-n text-center">
                        ¡Gana el 10% del primer servicio que preste o tome tu referido!
                      </div>
                    </div>
                  </div>

                </Tab>

                <Tab value="referidos" header="Referidos">

                  <div className="d-flex mt-4 p-2 bg-gray rounded">
                    <div className="mr-auto my-auto">
                      <div className="d-flex">
                        <img src={girlImg} className="img-icon-48 rounded" />
                        <span className="text-morado fs-n pl-2 my-auto">Sexy 20, 29</span>
                      </div>
                    </div>
                    <div className="m-auto">
                      <div className="d-flex">
                        <img src={creditImg} className="img-icon-32" />
                      </div>
                    </div>
                    <div className="ml-auto my-auto fs-n">
                      <div className="text-right">
                        03/03/2020
                      </div>
                      <div className="text-right text-morado">
                        Servicio tomado
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mt-2 p-2 bg-gray rounded">
                    <div className="mr-auto my-auto">
                      <div className="d-flex">
                        <img src={girlImg} className="img-icon-48 rounded" />
                        <span className="text-morado fs-n pl-2 my-auto">Sexy 20, 29</span>
                      </div>
                    </div>
                    <div className="m-auto">
                      <div className="d-flex">
                        <img src={creditImg} className="img-icon-32" />
                      </div>
                    </div>
                    <div className="ml-auto my-auto fs-n">
                      <div className="text-right">
                        03/03/2020
                      </div>
                      <div className="text-right text-morado">
                        Servicio tomado
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mt-2 p-2 bg-gray rounded">
                    <div className="mr-auto my-auto">
                      <div className="d-flex">
                        <img src={girlImg} className="img-icon-48 rounded" />
                        <span className="text-morado fs-n pl-2 my-auto">Sexy 20, 29</span>
                      </div>
                    </div>
                    <div className="m-auto">
                      <div className="d-flex">
                        <img src={creditImg} className="img-icon-32" />
                      </div>
                    </div>
                    <div className="ml-auto my-auto fs-n">
                      <div className="text-right">
                        03/03/2020
                      </div>
                      <div className="text-right text-morado">
                        Servicio tomado
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mt-2 p-2 bg-gray rounded">
                    <div className="mr-auto my-auto">
                      <div className="d-flex">
                        <img src={girlImg} className="img-icon-48 rounded" />
                        <span className="text-morado fs-n pl-2 my-auto">Sexy 20, 29</span>
                      </div>
                    </div>
                    <div className="m-auto">
                      <div className="d-flex">
                        <img src={creditImg} className="img-icon-32" />
                      </div>
                    </div>
                    <div className="ml-auto my-auto fs-n">
                      <div className="text-right">
                        03/03/2020
                      </div>
                      <div className="text-right text-morado">
                        Servicio tomado
                      </div>
                    </div>
                  </div>

                </Tab>

                <Tab value="bonos" header="Bonos">

                  {/* This part is for non-content. for now this part is no needed. */}
                  {/* <div className="row justify-content-center">
                    <div className="col-6 col-sm-6 text-center mt-5">
                      <img className="img-fluid" src={iconMail} alt="ErosApp"/>
                    </div>
                  </div>
                  
                  <div className="row justify-content-center mt-5">
                    <div className="col-12 col-sm-12 text-center">
                      <div className="App-Question text-center">
                        ¡Vamos, invita a otros chicos y chicas a utilizar Eros!
                      </div>
                    </div>
                  </div> */}

                  {/* This part is for content */}
                  <div className="row">

                    <div className="col-6 mt-3">
                      <div className="custom-card">
                        <img className="img-fluid" src={bonus20Img} alt="bonus-img" />
                        <div className="card-body">
                          <span className="text-morado fs-xl d-flex">Winner $20,000</span>
                          <span className="d-flex fs-n text-break">
                            ¡Gana el 10% de descuento por el primer servicio que preste o tome tu referido!
                          </span>
                          <div className="d-flex justify-content-center pt-2">
                            <button className="btn w-75 rounded-pill btn-primary">Redimir</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="custom-card">
                        <img className="img-fluid" src={bonus50Img} alt="bonus-img" />
                        <div className="card-body">
                          <span className="text-morado fs-xl d-flex">Winner $50,000</span>
                          <span className="d-flex fs-n text-break">
                            ¡Gana el 10% de descuento por el primer servicio que preste o tome tu referido!
                          </span>
                          <div className="d-flex justify-content-center pt-2">
                            <button className="btn w-75 rounded-pill btn-primary">Redimir</button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-6 mt-3">
                      <div className="custom-card">
                        <img className="img-fluid" src={bonus100Img} alt="bonus-img" />
                        <div className="card-body">
                          <span className="text-morado fs-xl d-flex">Winner $100,000</span>
                          <span className="d-flex fs-n text-break">
                            ¡Gana el 10% de descuento por el primer servicio que preste o tome tu referido!
                          </span>
                          <div className="d-flex justify-content-center pt-2">
                            <button className="btn w-75 rounded-pill btn-primary">Redimir</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

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
