import { taskEntity } from "../../entities/task/task.entity";

export type createTaskDto = Omit<taskEntity, "_id">;
