import express from 'express';
import usersRouter from './users.mjs';
import projectsRouter from './projects.mjs';
import logsRouter from './logs.mjs';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/projects', projectsRouter);
router.use('/logs', logsRouter);

export default router;

