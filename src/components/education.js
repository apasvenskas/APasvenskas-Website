import React from "react";
import "./education.css";
import bloom from "../assets/bloom.jpg";
import next from "../assets/Next.jpg";

export function Education() {
  const Bloom = bloom;
  const Next = next;
  return (
    <>
      <h1>Education</h1>
      <div>
        <div className="edu-bloomtech">
          <h3>Udemy</h3>
          <div className="educationInfo">
            <p>
              I have successfully completed a comprehensive Next.js course on
              Udemy, which was exceptionally informative and taught me a great
              deal. It covered the fundamentals of Next.js, including the
              routing system, static and server-side properties, among other
              features. Additionally, the course delved deeper into React
              concepts, providing a valuable refresher on essential topics like
              components and routing. Moreover, I have invested in further in
              Udemy for courses such as, AWS and machine learning. While I
              havent completed them yet, these subjects are fascinating and I am
              eager to learn more about them.
            </p>
            <img
              src={Next}
              width="300px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />
          </div>
        </div>
        <div className="edu-bloomtech">
          <h3>Bloomtech</h3>
          <div className="educationInfo">
          <p>
            I completed a Full Stack Web Development program at Bloomtech, where
            I learned both front end and back end web development. The program
            taught me HTML, CSS, React libraries, Node.js, and SQL, along with
            many other tools and dependencies, such as knex.js, Redux, Auth0,
            and more. Furthermore, a large part of the course was dedicated to
            Algorithms, Big-O Notation, and Data Structures.
          </p>
          <img
            src={Bloom}
            width="300px"
            height="200px"
            alt="screen shot of stock chart"
            className="img"
          />
          </div>
        </div>
        <div className="bachlors">
          <h3>Bachelors Degree</h3>
          <p>
            I have Bachelors of Science degree from California State University
            Maritime Academy. I studied Maritime Transportation. Once I finished
            studies and passed all the requered USCG test I also received a
            third mates unlimited license for all the oeceans. It is a license
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
