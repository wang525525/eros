import React, {useState} from 'react';
import '../../App.css';

function Section(props) {
  
  
  return (
    <div className={props.activeOpen === false ? "section" : "section open"}>
      <div className="sectionhead" onClick={props.clickHandler}>
        <i className="fas fa-chevron-down down-icon mr-3"></i>
        <i className="fas fa-chevron-left left-icon mr-3"></i>
        {props.title}
      </div>
      
      <div className="articlewrap">
        <div className="article">
          {props.children}
        </div>
      </div>
    </div>
  );

}

function App(props) {

  const [activeOpen, setActiveOpen] = useState(0);
  
  function setActiveStatus(e, idx) {
    e.preventDefault();
    if (activeOpen != idx) {
      setActiveOpen(idx);
    } else {
      setActiveOpen(-1);
    }
    
  }
  return (
    
      <div className="accordion-main">
        <Section title="¿Quiénes somos?" activeOpen={activeOpen === 0} clickHandler={(e) => setActiveStatus(e, 0)}>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="¿Como contactanos?" activeOpen={activeOpen === 1} clickHandler={(e) => setActiveStatus(e, 1)}>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="¿Como contactanos?" activeOpen={activeOpen === 2} clickHandler={(e) => setActiveStatus(e, 2)}>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
        <Section title="¿Como contactanos?" activeOpen={activeOpen === 3} clickHandler={(e) => setActiveStatus(e, 3)}>   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nemo harum voluptas aliquid rem possimus nostrum excepturi!
        </Section>
      </div>
    
  )
}


export default App;
