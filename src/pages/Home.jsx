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
          <a
            href="https://www.linkedin.com/in/victor-okunoye-96341a1b1"
            rel="noreferrer noopener"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:okunoyevictor@gmail.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/Ovsclassic"
            rel="noreferrer noopener"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> My Stacks </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              HTML, CSS, Javascript, ReactJS, NextJS, Tailwind CSS, Bootstrap
            </span>
          </li>
          <li className="item">
            <h2> Other Technologies </h2>
            <span>Firebase, MaterialUI, Git, Figma</span>
          </li>
          <li className="item">
            <h2> Skills </h2>
            <span>
              Problem-Solving, Analytical Thinking, Attention To Details,
              Excellent Organisation skill, Collaboration
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
