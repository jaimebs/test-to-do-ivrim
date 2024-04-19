import { TaskRepository } from "../repositories/task/task.repository";
import { TaskService } from "../services/task/task.service";

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);

export { taskService };
