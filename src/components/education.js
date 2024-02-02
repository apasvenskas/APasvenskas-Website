import React from "react";
import { Link } from "react-router-dom";
import "./education.css"

export function Education() {
  return (
    <>
      <h1>Education</h1>
      <div>
        <div className="header">
          <h3>Bloomtech</h3>
          <p>
          I completed a Full Stack Web Development program at Bloomtech, where I learned both front end and back end web development. The program taught me HTML, CSS, React libraries, Node.js, and SQL, along with many other tools and dependencies, such as knex.js, Redux, Auth0, and more. Furthermore, a large part of the course was dedicated to Algorithms, Big-O Notation, and Data Structures.
          </p>
        </div>
        <div className="body">
          <h3>Bachelors Degree</h3>
          <p>
            I have Bachelors of Science degree from California State University
            Maritime Academy. I studied Maritime Transportation. Once I finished
            studies and passed all the requered USCG test I also received a
            third mate's unlimited license for all the oeceans. It is a license
            to navigate a vessel as a mate/officer. The studies were challenging
            some of the most challenging classes were Celestial Navigation,
            Radar, GMDSS, and Ship Stability. Nonetheless, the 7 USCG exams were
            the most challenging part of all the studies since they were
            comprehensive on entire material studied during the years, and they
            all had to be passed in order to graduate.
          </p>
        </div>
      </div>
    </>
  );
}
