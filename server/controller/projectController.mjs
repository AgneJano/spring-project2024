import projectModel from "../models/projectModel.mjs";

const projectController = {
  getProjects: async (req, res) => {
    try {
      console.log(req.query.status);
      const projects = await projectModel.getProjects(req.query);
      res.status(200).json(projects);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occurred while retrieving projects." });
    }
  },
  getProjectsById: async (req, res) => {
    try {
      const projectId = req.params.id;
      const project = await projectModel.getProjectsById(projectId);
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  createProject: async (req, res) => {
    try {
      const project = await projectModel.createProject(req.body);
      res.status(201).json(project);
    } catch (error) {
      res
        .status(500)
        .json({ message: "An error occured while creating the project" });
    }
  },
};

export default projectController;
