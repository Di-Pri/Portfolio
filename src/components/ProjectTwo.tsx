import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";
// Images for the project
import One from "../assets/images/two/1.jpg";
import Two from "../assets/images/two/2.jpg";
import Three from "../assets/images/two/3.jpg";
import Four from "../assets/images/two/4.jpg";
import Five from "../assets/images/two/5.jpg";
import Six from "../assets/images/two/6.jpg";
import Seven from "../assets/images/two/7.jpg";
import Eight from "../assets/images/two/8.jpg";
import Nine from "../assets/images/two/9.jpg";
import Ten from "../assets/images/two/10.jpg";
import Eleven from "../assets/images/two/11.jpg";
import Twelve from "../assets/images/two/12.jpg";
import Thirteen from "../assets/images/two/13.jpg";
import Fourteen from "../assets/images/two/14.jpg";
import Fifteen from "../assets/images/two/15.jpg";
import Sixteen from "../assets/images/two/16.jpg";
import Seventeen from "../assets/images/two/17.jpg";
import Eighteen from "../assets/images/two/18.jpg";
import Errow from "../assets/images/two/errow.png";

const ProjectTwo: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project">
      <header>
        <button onClick={() => navigate(-1)}>
          <div>
            <BackIcon />
          </div>
          <p>Back</p>
        </button>
      </header>
      <main>
        <h1>Internship project</h1>
        <h2>Company</h2>
        <p>
          <span>MakeImpact - FinTech startup.</span> A mobile application where young people can learn about investments, connect with
          peers, find companies that align with their personal values based on the 17 UN Sustainable Development Goals, read news about
          these companies, and invest in them.
        </p>
        <h2>Internship period</h2>
        <p>10 weeks</p>
        <h2>My role</h2>
        <p>Front-End Developer</p>
        <h2>Team</h2>
        <p>The product team consisted of 9 people: 2 designers, 2 front-end developers, 4 back-end developers, and a project manager.</p>
        <h2>Tools and technologies</h2>
        <ul>
          <li>
            <span>Languages:</span> TypeScript, JavaScript
          </li>
          <li>
            <span>Technologies:</span> React, Redux, SCSS, REST API, npm
          </li>
          <li>
            <span>Source control:</span> Git
          </li>
          <li>
            <span>Database:</span> Firebase
          </li>
          <li>
            <span>Methodology:</span> Agile Software Development using SCRUM
          </li>
          <li>
            <span>Communication:</span> Slack, Whereby
          </li>
          <li>
            <span>Tools:</span> GitHub, Jira, Zeplin, Postman, BrowserStack, Google Lighthouse
          </li>
        </ul>
        <h2>Some screens that I have built</h2>
        <div className="projectImages">
          <img src={One} alt="App screen" />
          <img src={Two} alt="App screen" />
          <img src={Three} alt="App screen" />
          <img src={Four} alt="App screen" />
          <img src={Five} alt="App screen" />
          <img src={Six} alt="App screen" />
          <img src={Seven} alt="App screen" />
          <img src={Eight} alt="App screen" />
          <img src={Nine} alt="App screen" />
          <img src={Ten} alt="App screen" />
          <img src={Eleven} alt="App screen" />
          <img src={Twelve} alt="App screen" />
        </div>
        <h2 className="lastHeading">Some screens that I have updated</h2>
        <div className="updatedScreens">
          <div>
            <img src={Thirteen} alt="App screen" />
            <img src={Errow} alt="Errow" />
            <img src={Fourteen} alt="App screen" />
          </div>
          <div>
            <img src={Fifteen} alt="App screen" />
            <img className="errow" src={Errow} alt="Errow" />
            <img src={Sixteen} alt="App screen" />
          </div>
          <div>
            <img src={Seventeen} alt="App screen" />
            <img className="errow" src={Errow} alt="Errow" />
            <img src={Eighteen} alt="App screen" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectTwo;
