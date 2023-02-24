import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Victor Okunoye</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/victor-okunoye-96341a1b1">
            <LinkedInIcon />
          </a>
          <a href="https://myaccount.google.com/">
            <EmailIcon />
          </a>
          <a href="https://github.com/Ovsclassic">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              ReactJS, HTML, CSS, Javascript, TailwindCSS, Redux, NextJS
            </span>
          </li>
          <li className="item">
            <h2> Tech Stack </h2>
            <span>
              Git, NPM, Github, Bootstrap, Typescript, API, Figma, React Router
            </span>
          </li>
          <li className="item">
            <h2> Other Skills </h2>
            <span>
              Problem-Solving, Analytical Thinking, Attention To Details,
              Excellent Organisation skill
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
