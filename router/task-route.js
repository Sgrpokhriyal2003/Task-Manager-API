import express from 'express'
import { addTask, getAllTasks, updateTask, deleteTask } from '../controller/task-controller.js';
import { validateSession } from '../middleware/auth-session.js';

const router = express.Router()


router.post("/", validateSession, addTask);
router.get("/", validateSession, getAllTasks);
router.put("/:id", validateSession, updateTask);
router.delete("/:id", validateSession, deleteTask);


export default router