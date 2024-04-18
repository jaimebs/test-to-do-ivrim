import { createTaskDto } from "../../dtos/task/create-task.dto";
import { taskEntity } from "../../entities/task/task.entity";

export interface ITaskRepository {
  create(task: createTaskDto): Promise<taskEntity>;
  findByStatus(status: string): Promise<taskEntity[]>;
  update(id: string, task: taskEntity): Promise<taskEntity>;
  delete(id: string): Promise<void>;
}
