import { createTaskDto } from "../../dtos/task/create-task.dto";
import { taskEntity } from "../../entities/task/task.entity";
import { ITaskRepository } from "../../interfaces/task/task-repository.interface";
import { taskModel } from "../../models/task/task.model";

export class TaskRepository implements ITaskRepository {
  async create(task: createTaskDto): Promise<taskEntity> {
    const createTask = await taskModel.create(task);

    const updatedTaskWithIdAsString: taskEntity = {
      ...createTask!.toObject(),
      _id: createTask!._id.toString(),
    };

    return updatedTaskWithIdAsString;
  }

  async findByStatus(status: string): Promise<taskEntity[]> {
    return await taskModel.find({ status: status });
  }

  async update(id: string, task: taskEntity): Promise<taskEntity> {
    const updatedTask = await taskModel.findOneAndUpdate(
      { _id: id },
      { $set: task },
      { new: true }
    );

    const updatedTaskWithIdAsString: taskEntity = {
      ...updatedTask!.toObject(),
      _id: updatedTask!._id.toString(),
    };

    return updatedTaskWithIdAsString;
  }
  async delete(id: string): Promise<void> {
    await taskModel.findByIdAndDelete({ _id: id });
  }
}
