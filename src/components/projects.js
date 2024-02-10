import React from "react";
import { Link } from "react-router-dom";
import StockChart from "../assets/StockChart.jpg"

export function Projects() {
    let chart = StockChart
    return(
        <>
        <h1>Projects</h1>
        <div className="stock-chart">
            <h3>Stock Chart</h3>
            <p>A single page App that displays stock prices on a chart, with a day and night mode. Used a FinnHub API to get all the stock data.</p>
            <div className="description">
                <div className="span">
                    <span>Tailwind.css</span><span>HTML</span><span>React.js</span>
                </div>
                <img src={chart} width="300px" height="150px" alt="screen shot of stock chart"/>
            </div>
            <p>Click the button to view the project at GitHub</p>
            <Link to="https://github.com/apasvenskas/Stock-Chart" className="button">AI Sumarizer</Link>
        </div>
        <div className="AIproject">
            <h3>AI Sumarizer</h3>
            <p>A single page App that sumarises a webpage or an article.</p>
            <Link to="https://curious-cat-d84fe1.netlify.app/" className="button">AI Sumarizer</Link>
        </div>
        </>
    )
}

