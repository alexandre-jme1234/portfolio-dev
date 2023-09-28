import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import data from '../src/data/text.json';
import Button from "./components/Button/index";
import Body from './components/Body/index';
import logo from "../src/img/logo.jpg";
import { useState, useEffect } from "react";

function App() {
  const [label, setLabel] = useState('');

  function showBody(e) {
    setLabel(e.target.innerHTML)
    return console.log(label)
  }

  const dataTitle = data.section.map(({ title }) => <Button title={title} showBody={showBody}/>);
  const dataContent = data.section.map(({subtitle, body, title}) => <Body title={title} subtitle={subtitle} body={body}/>);

  useEffect(() => {
      const titleFinder = dataTitle.find((a) => a.title === label)
      console.log('HackTweet good', titleFinder)
    }
  , [label])


  return (
    <div className="App">
      <header className="App-header">
        <div className="left-navigation">
          <img src={logo} alt="logo" style={{ height: '5vh' }} />
          <div className="title-block">
            <div className="title">Vers l'espace</div>
            <div className="subtitle">UX/UI designer</div>
          </div>
        </div>
        <div className="right-navigation">
          <FontAwesomeIcon icon={faGithub} style={{ height: 15 }} />
          <FontAwesomeIcon icon={faEnvelope} style={{ height: 15 }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ height: 15 }} />
        </div>
      </header>
      <section>
        <div className="body">
          <div className="menu-contener">
          <p style={{'color': '#F5FFFE', 'textAlign': 'left', 'fontFamily': 'Roboto', 'fontWeight': 'bold', 'fontSize': 'small', 'fontStyle': 'bold', 'margin': 0, 'marginLeft': 10,}}>welcome</p>
          <div className="link-sections">{dataTitle}</div>
          </div>
          <div style={{'backgroundColor': '#F5FFFE', 'height': '100px', 'width': '1px'}}></div>
          <div className="content-sections">{dataContent}</div>
        </div>
      </section>
    </div>
  );
}

export default App;
