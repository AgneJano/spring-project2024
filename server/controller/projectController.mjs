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
  deleteProject: async (req, res) => {
    try {
      const projectId = req.params.id;
      const deletedProject = await projectModel.deleteProject(projectId);
      if (!deletedProject) {
        return res.status(404).json({ message: "Project not found" });
      }
      res
        .status(200)
        .json({ message: "Project deleted successfully", deletedProject });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getProjectsByStatus: async (req, res) => {
    try {
      const { status } = req.query;
      const projects = await projectModel.getProjectsByStatus(status);
      res.status(200).json(projects);
    } catch (error) {
      console.error("Error retrieving projects by status:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default projectController;
