import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "../assets";

const ProjectThree: React.FC = () => {
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
        <h1>Hogwarts student list</h1>
        <h2>My role</h2>
        <p>The application was built entirely by me.</p>
        <h2>Tools and technologies</h2>
        <ul>
          <li>
            <span>Language:</span> JavaScript
          </li>
          <li>
            <span>Tools and Technologies:</span> CSS, HTML, GitHub, REST API, JS String Methods
          </li>
          <li>
            <span>Source control:</span> Git
          </li>
        </ul>
        <h2>App features</h2>
        <ul>
          <li>You can search, sort, and filter students by first name, last name, and house.</li>
          <li>
            From the modal window, you can expel a student, add them to the Inquisitorial Squad (pure-blooded and Slytherin students only),
            or appoint them as a prefect (two per house).
          </li>
          <li>
            Clicking the "Hack the system" logo in the upper right corner of the page will randomize students' blood status, enroll you in
            Hogwarts, and remove all students from the Inquisitorial Squad if there are any.
          </li>
        </ul>
        <h2>Development process</h2>
        <p>
          - Clean up the messy data from the JSON file using JavaScript string methods to capitalize the first letters in names and houses,
          remove spaces before and after names if present, split full names into first, middle, last, and optional aliases, and build image
          sources.
        </p>
        <p>- Calculate blood status using an additional JSON file with a list of pure-blooded and half-blooded families.</p>
        <p>- Add a search field that immediately limits the listed students to those matching the search criteria.</p>
        <p>- Add the possibility to sort names and houses in alphabetical order (ascending and descending).</p>
        <p>
          - Add an option to filter students by house, as well as show a list of expelled students, students with prefects, or students from
          the Inquisitorial Squad.
        </p>
        <p>- Add the possibility to expel a student without a chance to enroll them back.</p>
        <p>
          - Add an option to add a student to the Inquisitorial Squad. Only students with pure blood or from the Slytherin house can be
          added.
        </p>
        <p>- Add an option to appoint a prefect to a student. Only two students from each house can be selected as prefects.</p>
        <p>- Display the number of students in each list.</p>
        <p>- Remove all students from the Inquisitorial Squad when the system is hacked.</p>
        <p>
          - Randomize students' blood status, where students with pure blood get a random status, and those with half-blood and Muggle blood
          become pure-bloods.
        </p>
        <p>- Enroll a hacker in Hogwarts with no chance of being expelled.</p>
      </main>
    </div>
  );
};

export default ProjectThree;
