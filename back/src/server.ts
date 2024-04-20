import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectMongoDb } from "./infra/mongo/connect";
import taskRoutes from "./routers/task.router";

const app = express();

app.use(cors());
app.use(express.json());
app.use(taskRoutes);

connectMongoDb(process.env.MONGO_DB_URL as string)
  .then(() => console.log("MongoDb conectado"))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, () =>
  console.log(`Servidor no ar em http://localhost:${process.env.PORT}`)
);
