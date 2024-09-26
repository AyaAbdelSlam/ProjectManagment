import axios from "axios";

export const getProjects = async () => {
  const response = await axios.get("/api/project");
  return response.data;
};

export const createProject = async (project) => {
  const response = await axios.post("/api/project", project);
  return response.data;
};

export const updateProject = async (projectId, project) => {
  const response = await axios.put(`/api/project/${projectId}`, project);
  return response.data;
};

