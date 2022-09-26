import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";
import { projectOneImages } from "../assets/images/one";

const ProjectOne: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project">
      <header>
        <button aria-label="Go back" onClick={() => navigate(-1)}>
          <div>
            <BackIcon />
          </div>
          <p>Back</p>
        </button>
      </header>
      <main>
        <h1>Investing mobile app</h1>
        <h2>My role</h2>
        <p>The application was built entirely by me.</p>
        <h2>Problem formulation</h2>
        <p>
          How might I build an intuitive, aesthetically pleasing and clean mobile application so that young people with no or little
          investing experience can start making investments in the companies that align with their sustainable values?
        </p>
        <h2>Tools and technologies</h2>
        <ul>
          <li>
            <span>Language:</span> TypeScript
          </li>
          <li>
            <span>Technologies:</span> React, Sass, npm
          </li>
          <li>
            <span>Source control:</span> Git
          </li>
          <li>
            <span>Database:</span> Firebase
          </li>
          <li>
            <span>Tools:</span> Netlify, GitHub, Crazy 8's, flow chart, Business Model Canvas, user stories, Adobe XD, Adobe Illustrator
          </li>
          <li>
            <span>Testing:</span> Think aloud test, 5-second test, BrowserStack, Google Lighthouse
          </li>
        </ul>
        <h2>App features</h2>
        <ul>
          <li>Creating an account</li>
          <li>Choosing SDGs that match the user's values</li>
          <li>Logging in using email and password</li>
          <li>Resetting password</li>
          <li>Updating previously selected SDGs</li>
          <li>Checking the list with matched companies</li>
          <li>Searching for a specific company</li>
          <li>Viewing detailed info about each company</li>
          <li>Saving companies to watchlist</li>
          <li>Buying and selling stocks</li>
          <li>Seeing transactions in a portfolio and contribution to SDGs</li>
        </ul>
        <h2>Development process</h2>
        <p>
          I chose to work with the <span>Design Thinking</span> approach, which is an iterative and non-linear process, with the purpose of
          understanding the people for whom I am creating the product and providing a better user experience by making improvements during
          development. Design Thinking is broken up into five stages, these are: Empathize, Define, Ideate, Prototype, and Test.
        </p>
        <p>
          During the Empathize phase, I did <span>desk research</span> to gain insights into the investment industry and conducted a{" "}
          <span>survey</span> to get to know my target audience and their needs better. In order to get an overview of a product from the
          business perspective I made sure to create <span>Business Model Canvas</span>. I did <span>design research</span> to understand
          the trends and good practices used by competitors within the market.
        </p>
        <p>
          During the Define phase, I wrote a <span>problem formulation</span> to set a clear goal for my project. I built a{" "}
          <span>flow chart</span> as a visual representation of the possible flow a user could follow. Then I wrote{" "}
          <span>user stories</span> to have a better understanding of why users need a certain functionality in the app and later I used
          them for splitting the coding process into smaller tasks.
        </p>
        <p>
          During the Ideate phase, I drew <span>Crazy 8's</span> and then final sketches.
        </p>
        <p>
          During the Prototype phase, I made a high-fidelity prototype in <span>Adobe XD</span> and created icons and charts for the app
          using <span>Adobe Illustrator</span>.
        </p>
        <p>
          During the Testing phase, I collected insights from users by conducting <span>think aloud</span> and <span>5-second tests</span>.
        </p>
        <p>
          The stack of technologies I used while coding includes <span>Sass</span>, <span>React</span>, and <span>Typescript</span>. I
          worked with <span>git</span> and <span>GitHub</span> to both keep a remote backup of the files and to document progress in
          general. For user authentication in my app I took advantage of the <span>Auth</span> service from <span>Firebase</span>. For
          storing data that I collected from users during onboarding process and the companies that I created I put into the service{" "}
          <span>Firestore database</span>.
        </p>
        <p>
          To improve user experience by applying smooth transitions in the app and providing nice input fields I used{" "}
          <span>npm packages</span>. To make sure that my solution looks how it should on different devices and browsers I utilized{" "}
          <span>BrowserStack</span> service. I also used Google <span>Lighthouse</span> audit to check and improve the performance of the
          app.
        </p>
        <h2>Screens</h2>
        <div>
          <ul className="projectImages">
            {projectOneImages.map((image) => (
              <img key={image} src={image} alt="App screen" />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProjectOne;
