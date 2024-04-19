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

  async findByStatus(req: Request, res: Response) {
    try {
      const { status } = req.query;
      const tasks = await taskService.findByStatus(status!.toString());
      return res.status(200).json(tasks);
    } catch (error) {
      if (error instanceof FormatHttpResponse) {
        return res.status(error.status).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = req.body;
      const task = await taskService.update(id, data);
      return res.status(200).json(task);
    } catch (error) {
      if (error instanceof FormatHttpResponse) {
        return res.status(error.status).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await taskService.delete(id);
      return res.status(204).json(task);
    } catch (error) {
      if (error instanceof FormatHttpResponse) {
        return res.status(error.status).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    }
  }
}
