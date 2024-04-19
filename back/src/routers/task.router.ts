import express from "express";
import { TaskController } from "../controllers/task.controller";

const router = express.Router();

const taskController = new TaskController();

router.post("/tasks", taskController.create);
// router.get('/', adapRouterExpress(taskModule, 'read'));
// router.put('/:id', adapRouterExpress(taskModule, 'update'));
// router.delete('/:id', adapRouterExpress(taskModule, 'delete'));

export default router;
