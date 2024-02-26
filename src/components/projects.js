import React from "react";
import { Link } from "react-router-dom";
import StockChart from "../assets/StockChart.jpg";
import AiSummarizer from "../assets/AiSumarizer.jpg";
import NextFood from "../assets/NextFood.jpg";

export function Projects() {
  let chart = StockChart;
  let summarizer = AiSummarizer;
  let food = NextFood
  return (
    <>
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
