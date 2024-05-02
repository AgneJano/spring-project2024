import express from "express";
import dotenv from "dotenv";
import projectController from "../controller/projectController.mjs";
import { validate } from "../middleware/schemaValidator.mjs";
import { projectValidationSchema } from "../validators/projectVaidator.mjs";
import { taskValidationSchema } from "../validators/tasksVaidator.mjs";

dotenv.config();

const router = express.Router();
router.get("/", projectController.getProjects);
router.get("/:id", projectController.getProjectsById);
router.post(
  "/:id/tasks",
  validate(taskValidationSchema),
  projectController.createTaskForProjectId
);
router.get("/:id/tasks", projectController.getTasksByProjectsId);
router.get("/:projectId/tasks/:taskId", projectController.getTaskById);
router.delete("/:id", projectController.deleteProject);
router.post(
  "/",
  validate(projectValidationSchema),
  projectController.createProject
);
export default router;
