import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Anthony</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href='mailto:anthonymorales@college.harvard.edu' target='_blank' rel='noreferrer'>
            <EmailIcon />
          </a>
          <a href="https://www.linkedin.com/in/anthony-morales-2070a51bb/" target='_blank' rel='noreferrer'>
            <LinkedInIcon />
          </a>
          <a href="https://github.com/anthonymorales6" target='_blank' rel='noreferrer'>
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              React, React Native, NPM, Bootstrap, MaterialUI, D3
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MongoDB, Express, Node, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Python, HTML, CSS, JavaScript, R</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
