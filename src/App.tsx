import { GithubIcon, WebsiteIcon, ReadmoreIcon, LinkedinIcon } from "./assets";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="landing-page">
        <div className="top-icons"></div>
        <div className="landing-text">
          <h1>Diana Priediena</h1>
          <h2>portfolio</h2>
        </div>
        <div className="arrow"></div>
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
          <h3>Investing mobile app</h3>
          <h4>TypeScript | React | Sass | Firebase</h4>
          <div className="project-icons">
            <button>
              <a href="https://beamish-bienenstitch-72deb3.netlify.app/" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">See the app</span>
                <WebsiteIcon />
              </a>
            </button>
            <button>
              <a href="https://github.com/Di-Pri/impact-invest" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">Check the repository</span>
                <GithubIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <span className="tooltipText">Read more</span>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
        <article>
          <h3>Internship project</h3>
          <h4>TypeScript | React | Redux | Scrum </h4>
          <div className="project-icons">
            <button>
              <a href="https://app.makeimpact.io/academy/explore2" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">See the app</span>
                <WebsiteIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <span className="tooltipText">Read more</span>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
      </section>
      <section className="works">
        <article>
          <h3>Ordering form for a bar</h3>
          <h4>JavaScript | React | Sass | REST API</h4>
          <div className="project-icons">
            <button>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">See the app</span>
                <WebsiteIcon />
              </a>
            </button>
            <button>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">Check the repository</span>
                <GithubIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <span className="tooltipText">Read more</span>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
        <article>
          <h3>Student list</h3>
          <h4>HTML | CSS | JavaScript | REST API </h4>
          <div className="project-icons">
            <button>
              <a href="https://di-pri.github.io/Hacked-Hogwarts-Student-List/" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">See the app</span>
                <WebsiteIcon />
              </a>
            </button>
            <button>
              <a href="https://github.com/Di-Pri/Hacked-Hogwarts-Student-List" target="_blank" rel="noopener noreferrer">
                <span className="tooltipText">Check the repository</span>
                <GithubIcon />
              </a>
            </button>
            <button onClick={() => navigate("/projectone")}>
              <span className="tooltipText">Read more</span>
              <ReadmoreIcon />
            </button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default App;
