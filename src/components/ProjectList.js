import React, { useEffect, useState } from "react";
import { getProjects } from "../services/api";
import LoadingSpinner from "./LoadingSpinner";
import ErrorBanner from "./ErrorBanner";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorBanner message="Failed to fetch projects." />;

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>{project.projectName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
