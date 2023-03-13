import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // navigate back to previous page
  };

  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.githubUrl}>
        <GitHubIcon />
      </a>
      <button onClick={handleGoBack}>Go Back</button> // button to navigate back
    </div>
  );
}

export default ProjectDisplay;
