import express from 'express';
import dotenv from 'dotenv';
import projectController from "../controller/projectController.mjs";
import { validate } from '../middleware/schemaValidator.mjs';
import { projectValidationSchema } from '../validators/projectVaidator.mjs';


dotenv.config();

const router = express.Router();
router.get('/', projectController.getProjects);
router.get('/:id', projectController.getProjectsById);
router.post('/', validate(projectValidationSchema), projectController.createProject);
export default router;