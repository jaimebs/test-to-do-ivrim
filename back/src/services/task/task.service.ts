import { createTaskDto } from "../../dtos/task/create-task.dto";
import { taskEntity } from "../../entities/task/task.entity";
import { ITaskRepository } from "../../interfaces/task/task-repository.interface";
import { isFieldEmpty } from "../../utils/field-empty";
import { FormatHttpResponse } from "../../utils/http-response-formatter";

export class TaskService {
  constructor(private readonly _taskRepository: ITaskRepository) {}

  async create(task: createTaskDto): Promise<taskEntity> {
    if (isFieldEmpty(task.title) || isFieldEmpty(task.description)) {
      throw new FormatHttpResponse(
        400,
        "Todos os campos devem ser preenchidos!"
      );
    }
    return await this._taskRepository.create(task);
  }

  async findByStatus(status: string): Promise<taskEntity[]> {
    return await this._taskRepository.findByStatus(status);
  }

  async update(id: string, task: taskEntity): Promise<taskEntity> {
    return await this._taskRepository.update(id, task);
  }

  async delete(id: string): Promise<void> {
    return await this._taskRepository.delete(id);
  }
}
