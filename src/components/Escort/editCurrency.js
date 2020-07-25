import React,{useState,useEffect} from 'react';
import '../../App.css';

import bancolombia  from '../../assets/images/resources/icono-bancolombia.png';
import sured  from '../../assets/images/resources/icono-sured.png';
import nequi  from '../../assets/images/resources/icono-nequi.png';

import Accounts from "../../screens/Accounts";

function App() {

  return (
      <div className="App-form-register">
        <div className="row justify-content-center py-3">
          <div className="col-12">
            <Accounts
              icon={bancolombia}
              label="Bancolombia"
              name="number_account_bank"
              placeholder="1234 567 8910"
              htmlLabel="Número de cuenta"
            />
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-12">
            <Accounts
              icon={sured}
              label="Sured"
              name="number_identification"
              placeholder="1234 567 8910"
              htmlLabel="Número de Cédula"
            />
          </div>
        </div>
        <div className="row justify-content-center py-3">
          <div className="col-12">
            <Accounts
              icon={nequi}
              label="Nequi"
              name="number_nequi"
              placeholder="1234 567 8910"
              htmlLabel="Número de Celular"
            />
          </div>
        </div>
      </div>

  );
}

export default App;
