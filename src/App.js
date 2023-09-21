import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left-navigation">
          <p>Hello</p>
        </div>
        <div className="right-navigation">
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </header>
      <section>
        <div className="body">
          <div className="link-sections"></div>
          <div className="content-sections"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
