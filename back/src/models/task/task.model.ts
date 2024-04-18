import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
});

taskSchema.pre("save", function (next) {
  this.createdAt = new Date();

  next();
});

export const taskModel = model("task", taskSchema);
