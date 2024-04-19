import express from "express";
import { TaskController } from "../controllers/task.controller";

const router = express.Router();

const taskController = new TaskController();

router.post("/tasks", taskController.create);
router.get("/tasks", taskController.findByStatus);
router.put("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);

export default router;
