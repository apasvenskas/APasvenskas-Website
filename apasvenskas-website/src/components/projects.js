import React from "react";
import { Link } from "react-router-dom";

export function Projects() {
    return(
        <>
        <h1>Projects</h1>
        <div className="AIproject">
            <h3>AI Sumarizer</h3>
            <p>A single page App that sumarises a webpage or an article.</p>
            <Link to="https://curious-cat-d84fe1.netlify.app/" className="button">AI Sumarizer</Link>
        </div>
        </>
    )
}

