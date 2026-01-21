import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project" key={p.slug}>
            <Link to={`/projects/${p.slug}`}>
              <img src={p.thumbnail} className="zoom" alt={p.title} width="100%" />
            </Link>

            <Link to={`/projects/${p.slug}`}>
              <h2>{p.title}</h2>
            </Link>

            <p>{p.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
