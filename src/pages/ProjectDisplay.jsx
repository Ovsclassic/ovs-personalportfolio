import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  console.log(id);
  const project = ProjectList[id];
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack(); // navigate back to previous page
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
