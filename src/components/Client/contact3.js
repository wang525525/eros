import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

import '../../App.css';

import background from '../../assets/images/design/bg-escort.jpeg';
import girlImg from '../../assets/images/design/image-girl.jpg';
import payImg from '../../assets/images/resources/icono-tarjeta-credito.png';
import moneda from '../../assets/images/resources/eroscoin.png';

import Config from "../../helpers/config";
import StateContext from '../../helpers/contextState'

import TopbarSimple from "./topbarSimple";
import ProgressBar from "./progressBar";

const divBackground = {
  backgroundImage: 'url(' + background + ')',
};


const useStyles = makeStyles({
  iconEmpty: {
    color: '#ffb400'
  }
});
function App() {
  const classes = useStyles();
  const context = React.useContext(StateContext);

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  function gotoPrev(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact2';
  }

  function gotoNext(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/contact3sub1';
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function gotoClient(e) {
    e.preventDefault();
    window.location.href = Config.ConfigAppUrl + 'client/home';
  }

  return (

    <div>
      <TopbarSimple clickHandler={gotoPrev} name={'Contratar'}></TopbarSimple>
      <div className="App-Logo App-splash" style={divBackground}>

        <div className="App-form-secondary container">
          <div className="row justify-content-center set_width_container">
            <div className="col-sm-12 col-md-8 col-lg-6 pt-3">

              <div className="row justify-content-center mt-2">
                <div className="col-sm-12 text-center">
                  <img src={girlImg} className="img-icon-80 rounded" />
                </div>
                <div className="col-sm-12 text-center">
                  <span className="text-morado fs-xl">Sexy20, 29</span>
                </div>
                <div className="col-sm-12 text-center">
                  <Rating 
                    name="read-only" 
                    value={4} 
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    classes={{iconEmpty: classes.iconEmpty}}
                    readOnly />
                </div>
              </div>

              <div className="d-flex pt-2">
                <img src={moneda} alt="P" className="img-icon-54" />
                <div className="pl-3">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                    $100
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                    COP $50.000
                  </div>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <div className="btn btn-primary text-white text-decoration-none">
                    Retirar
                  </div>
                </div>
              </div>

              <div class="d-flex border-b pt-2">
                <button class="btn btn-primary w-100 py-3 fs-l mb-3" onClick={gotoNext}>Recarga tu saldo</button>
              </div>

              <div className="pt-2">
                <span className="text-morado fs-l">Detalles de pago</span>
                <div className="input-group my-3 p-3 rounded">

                  <div className="d-flex pt-2 w-100 border-b">
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                        Stripetease
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                        Valor de servicio
                      </div>
                    </div>
                    <div className="ml-auto mt-auto mb-auto">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 text-right">
                        $200
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-right">
                        COP $100.000
                      </div>
                    </div>
                  </div>

                  <div className="d-flex pt-2 w-100">
                    <div className="pl-3">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 ">
                        A domicilio
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-left">
                        valor del transpore
                      </div>
                    </div>
                    <div className="ml-auto mt-auto mb-auto">
                      <div className="text-left App-Question--x2 tamano-texto-interno2 text-right">
                        $20
                      </div>
                      <div className="App-Question--x2 tamano-texto-interno text-fucsia text-right">
                        COP $10.000
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="d-flex pt-2">
                <div className="pl-3 my-auto">
                  <span className="text-morado fs-l">Total a pagar</span>
                </div>
                <div className="ml-auto mt-auto mb-auto">
                  <div className="text-left App-Question--x2 tamano-texto-interno2 text-right fs-xl">
                    $220
                  </div>
                  <div className="App-Question--x2 tamano-texto-interno text-fucsia text-right fs-l">
                    COP $110.000
                  </div>
                </div>
              </div>

              <div className="d-flex pt-4 fs-l">
                <button className="btn btn-secondary w-50 mx-2">
                  <i className="fas fa-tag pr-2"></i>
                  Usar bono
                </button>
                <button className="btn btn-primary w-50 mx-2" onClick={showModal}>
                  <i className="fas fa-credit-card pr-2"></i>
                  Pagar
                </button>
              </div>

              <div className="row justify-content-center mt-4">
                <div className="col-sm-12">
                  <ProgressBar curPoint={2}></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modal START */}
      <Modal isOpen={modal} toggle={toggle} className="modal-dialog-center" >
        <ModalBody className="bg-white rounded p-0">

          <div className="row m-0">
            <div className="col-sm-12 text-center p-3">
              <div className="row justify-content-center">
                <div className="col-8">
                  <img src={payImg} alt="confirm" className="w-100" />
                </div>
              </div>

              <div className="pb-2 text-center">
                <span className="text-black fs-xxl font-weight-bolder">
                  ¡Tu pago ha sido confirmado!
                </span>
              </div>
              <div className="pb-2 text-center">
                <span className="text-grey fs-xl">Ya puedes ponerte en contacto con <span className="text-pink">sexy20</span>, para concretar los detalles del servicio</span>
              </div>

              <div className="d-flex">
                <button className="btn btn-primary w-100 py-3 fs-l" onClick={gotoClient}>Continuar</button>
              </div>

            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* Modal  END */}

    </div>

  )
}

export default App;
