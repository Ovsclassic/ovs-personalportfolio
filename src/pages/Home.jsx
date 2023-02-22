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
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End </h2>
            <span>
              ReactJS, HTML, CSS, Javascript, TailwindCSS, Redux, Next.JS,
            </span>
          </li>
          <li className="item">
            <h2> Tech Stack </h2>
            <span>
              {" "}
              Git, NPM, Github, Bootstrap, Typescript, API, React Router{" "}
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
