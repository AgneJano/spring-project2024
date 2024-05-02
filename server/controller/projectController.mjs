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
  createTaskForProjectId: async (req, res) => {
    try {
      const projectId = req.params.id; // Assuming project ID is passed in the URL parameters
      const project = await projectModel.getProjectsById(projectId);

      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }

      const taskData = { ...req.body, project_id: projectId };
      const task = await projectModel.createTaskForProjectId(taskData);

      res.status(201).json(task);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the task" });
    }
  },
  getTasksByProjectsId: async (req, res) => {
    try {
      const projectId = req.params.id;
      console.log("Project ID:", projectId); // Add logging here to check the project ID
      const tasks = await projectModel.getTasksByProjectsId(projectId);
      console.log("Tasks:", tasks); // Add logging here to check the tasks retrieved
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getTaskById: async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const taskId = req.params.taskId;
      console.log("Project ID:", projectId);
      console.log("Task ID:", taskId);
      const task = await projectModel.getTaskById(projectId, taskId);
      console.log("Task:", task);
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  editProjectField: async (req, res) => {
    try {
      // Iš request'o parametrų ištraukiame vartotojo ID
      const id = req.params.id;
      // Iš request'o body ištraukiame laukus, kuriuos norime atnaujinti
      const updatedFields = req.body;

      const project = await projectModel.editProjectField(id, updatedFields);
      if (!project) {
        res.status(404).json({ message: 'Project not found.' });
        return;
      }

      res.status(200).json(project);
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ message: 'An error occurred while updating the project.' });
    }
  }

};

export default projectController;
