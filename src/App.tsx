import { GithubIcon, WebsiteIcon, ReadmoreIcon } from "./assets";
import { useNavigate } from "react-router-dom";
// images
import One from "./assets/images/landing/iphone1.jpg";
import Two from "./assets/images/landing/iphone2.jpg";
import Three from "./assets/images/landing/iphone3.jpg";
import Four from "./assets/images/landing/iphone4.jpg";
import Five from "./assets/images/landing/iphone5.jpg";
import Six from "./assets/images/landing/iphone6.jpg";

const App = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="landing-page">
        <div className="landing-text">
          <h1>Diana Priediena</h1>
          <h2>portfolio</h2>
        </div>
      </section>
      <section className="skills">
        <ul>
          <li>JavaScript | TypeScript | React</li>
          <li>HTML | CSS | Sass</li>
          <li>Git | GitHub</li>
          <li>REST API | NoSQL</li>
          <li>Scrum</li>
          <li>Adobe Creative Cloud (XD, Illustrator, Photoshop, InDesign)</li>
        </ul>
      </section>
      <section className="works">
        <article>
          <div className="project-image">
            <img src={One} alt="App screen" />
            <img src={Two} alt="App screen" />
            <img src={Three} alt="App screen" />
          </div>
          <h3>Investing mobile app</h3>
          <h4>TypeScript | React | Sass | Firebase</h4>
          <div className="project-icons">
            <button>
              <a href="https://beamish-bienenstitch-72deb3.netlify.app/" target="_blank" rel="noopener noreferrer">
                <WebsiteIcon />
              </a>
            </button>
            <button>
              <a href="https://github.com/Di-Pri/impact-invest" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
        <article>
          <div className="project-image">
            <img src={Four} alt="App screen" />
            <img src={Five} alt="App screen" />
            <img src={Six} alt="App screen" />
          </div>
          <h3>Internship project</h3>
          <h4>TypeScript | React | Redux | Scrum </h4>
          <div className="project-icons">
            <button>
              <a href="https://app.makeimpact.io/academy/explore2" target="_blank" rel="noopener noreferrer">
                <WebsiteIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projecttwo")}>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
      </section>
      <section className="works">
        <article>
          <h3>Student list</h3>
          <h4>HTML | CSS | JavaScript | REST API </h4>
          <div className="project-icons">
            <button>
              <a href="https://di-pri.github.io/Hacked-Hogwarts-Student-List/" target="_blank" rel="noopener noreferrer">
                <WebsiteIcon />
              </a>
            </button>
            <button>
              <a href="https://github.com/Di-Pri/Hacked-Hogwarts-Student-List" target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
      </section>
      <section>
        <div className="bottom-links">
          <a href="https://github.com/Di-Pri" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/diana-priediena/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
};

export default App;
