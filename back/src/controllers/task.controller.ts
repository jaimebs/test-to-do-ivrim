import { Request, Response } from "express";
import { FormatHttpResponse } from "../utils/http-response-formatter";
import { taskService } from "../providers/task.provide";

export class TaskController {
  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const task = await taskService.create(data);
      return res.status(201).json(task);
    } catch (error: any) {
      if (error instanceof FormatHttpResponse) {
        return res.status(error.status).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  }
}
