import React, { useEffect } from 'react';
import user from '../../assets/images/resources/icono-user.png';
import setting from '../../assets/images/resources/icon-setting.png';
import money from '../../assets/images/resources/icono-money.png';
import bonus from '../../assets/images/resources/icon-bonus.png';
import chat from '../../assets/images/resources/icon-chat.png';
import about from '../../assets/images/resources/icon-about-erosapp.png';
import exit from '../../assets/images/resources/icon-exit.png';


function App(props) {

  const generos = [{
    label: "Editar perfil",
    ico: user,
    url: "escort/edit"
  }, {
    label: "Configuración",
    ico: setting,
    url: "escort/config"
  }, {
    label: "Historial de pagos y servicios",
    ico: money,
    url: "escort/hist"
  }, {
    label: "Bonos y referidos",
    ico: bonus,
    url: "escort/bonus"
  }, {
    label: "Chat y soporte",
    ico: chat,
    url: "escort/chat"
  }, {
    label: "Sobre Eroscort",
    ico: about,
    url: "escort/about"
  }, {
    label: "Cerrar sesión",
    ico: exit,
    url: "exit"
  },
  ]

  useEffect(() => {
    content()
  }, [])

  function content() {
    let elements = document.querySelectorAll(".box-1x1");
    Object.entries(elements).map((v) => {
      v[1].style.height = v[1].offsetWidth + 'px'
    })
  }


  return (<div className="row mt-2 content-box ml-0 mr-0">
    {
      generos.map((v, k) => {
        return <div key={k} className="col-4 text-center p-0 leter ">
          <div className={(props.gender === v.label) ? 'position-relative box-1x1 box-1x1-active rounded tamano-texto-interno text-gray color-icono ' :
            'position-relative box-1x1 rounded background-gray tamano-texto-interno text-gray'} onClick={() => { props.setGender(v.label, v.url) }}>
            <div className="">
              <img className="color-icono" src={v.ico} />
            </div>
            <span className="setting-text">{v.label}</span>
          </div>
        </div>
      })
    }
  </div>
  )
}

export default App;
