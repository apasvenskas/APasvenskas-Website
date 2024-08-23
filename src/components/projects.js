import React from "react";
import { Link } from "react-router-dom";
import StockChart from "../assets/StockChart.jpg";
import AiSummarizer from "../assets/AiSumarizer.jpg";
import NextFood from "../assets/NextFood.jpg";
import NextEvent from "../assets/NextEvents.jpg"
import AudriusBlog from "../assets/audriusBlog.jpg"
import Commercial from "../assets/commercial.jpg"

export function Projects() {
  let chart = StockChart;
  let summarizer = AiSummarizer;
  let food = NextFood
  let events = NextEvent
  let blog = AudriusBlog
  let commercial = Commercial
  return (
    <>

<h1>Projects</h1>

<div className="stock-chart">
        <h3>A Commercial Website For Artist Association</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>
            This commercial website project is a demo version created for the Lithuanian artist association, Laisvieji Menininkai. The site dynamically loads pages based on the type of art a user is searching for and displays high-quality images. Built with the JavaScript library Next.js, it supports both dynamic and static pages. The project utilizes Hygraph for data storage and access, offering ease of use and implementation. Styling is handled with CSS, while Auth0 is used for authentication and authorization. For transactions, the app integrates PayPal for secure payments.
            </p>
            <div className="projectLink">
              <p>Click the button to view the deployd project</p>
              <Link
                to="https://laisviejimenininkai.vercel.app/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commercial Website
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>CSS</span>
              <span>HTML</span>
              <span>Next.js</span>
              <span>Vercel</span>
              <span>Hygraph</span>
              <span>Auth0</span>
              <span>PayPal</span>
            </div>
            <img
              src={commercial}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />            
          </div>
        </div>
      </div>

<div className="stock-chart">
        <h3>Next.js Project / Audrius Blog</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>
            Introducing a cutting-edge blog platform designed for the modern developer. Built with the robust Next.js framework, this blog website serves as a hub for sharing insightful development-related content, with a focus on Next.js and AWS technologies. The backend is powered by MongoDB, ensuring that user data, such as contact information and messages, is securely managed and easily accessible. Styled with sleek CSS, the user interface promises a seamless reading experience. Deployment on Vercels server guarantees high availability and performance, making it an ideal destination for developers seeking the latest industry knowledge.
            </p>
            <div className="projectLink">
              <p>Click the button to view the deployd project</p>
              <Link
                to="https://api-routes-next-js-pi.vercel.app/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Audrius Blog
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>CSS</span>
              <span>HTML</span>
              <span>Next.js</span>
              <span>Vercel</span>
              <span>MongoDB</span>
            </div>
            <img
              src={blog}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />            
          </div>
        </div>
      </div>

      <div className="stock-chart">
        <h3>Next.js Project / Next Events</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>
            The aim of this project is to enhance my Next.js abilities by developing a Next Event application/website. Users will have the ability to register for events, subscribe to newsletters, and post comments. The front end of the app/website is built with Next.js and CSS, while the back end utilizes both Firebase and MongoDB for data storage.
            </p>
            <div className="projectLink">
              <p>Click the button to view the project at GitHub</p>
              <Link
                to="https://github.com/apasvenskas/Next.js-Project"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next Events
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>CSS</span>
              <span>HTML</span>
              <span>Next.js</span>
              <span>Firebase</span>
              <span>MongoDB</span>
            </div>
            <img
              src={events}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />            
          </div>
        </div>
      </div>

      <h1>Projects</h1>
      <div className="stock-chart">
        <h3>Next.js Project / Next Food</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>
            The goal of this project is to practice my Next.js skills by creating a food sharing app/website. Users can share their favorite meals on the app/website and see them in the meals tab. The app/website uses Next.js and SQL to store the data in a built-in back end.<br />
            * The project will be deployed soon it is still in production.
            </p>
            <div className="projectLink">
              <p>Click the button to view the project at GitHub</p>
              <Link
                to="https://github.com/apasvenskas/Next.js-Project"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Next Food
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>CSS</span>
              <span>HTML</span>
              <span>Next.js</span>
              <span>Slugify</span>
              <span>xss</span>
              <span>SQL</span>
            </div>
            <img
              src={food}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />            
          </div>
        </div>
      </div>

      <div className="stock-chart">
        <h3>Stock Chart</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>
              A single page App that displays stock prices on a chart, with a
              day and night mode. Fetched data from FinnHub API to get all the
              stock data and prices. Additional features include details and
              stock icon. The app was writen using Tailwind.css, HTML, and
              React.js. Note, since the publishing of the app, FinnHub has
              chainged there policy and the API is only partially free now.
              Thus, The chart will only display partial data do to restricted
              API.
            </p>
            <div className="projectLink">
              <p>Click the button to view the project at GitHub</p>
              <Link
                to="https://github.com/apasvenskas/Stock-Chart"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Sumarizer
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>Tailwind.css</span>
              <span>HTML</span>
              <span>React.js</span>
              <span>Restful API</span>
            </div>
            <img
              src={chart}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />
          </div>
        </div>
      </div>

      <div className="AIproject">
        <h3>AI Sumarizer</h3>
        <div className="projectInfo">
          <div className="paragraph">
            <h4>Description</h4>
            <p>A single page App that sumarises a webpage or an article. One can simply go to any article or a webpage online copy the url link and paste it with in the search parameter on the app. The app will fetch the data to the API and and receive back a summarized article.</p>
            <div className="projectLink">
              <p>Click the button to view the project at a deployd website</p>
              <Link
                to="https://curious-cat-d84fe1.netlify.app/"
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI Sumarizer
              </Link>
            </div>
          </div>
          <div className="description">
            <div className="span">
              <span>Tailwind.css</span> <span>React.js</span>
              <span>Vite</span> <span>Redux</span> <span>Restful API</span>
              <span>Netlifly</span>
            </div>
            <img
              src={summarizer}
              width="400px"
              height="200px"
              alt="screen shot of stock chart"
              className="img"
            />
          </div>
        </div>
      </div>
    </>
  );
}
