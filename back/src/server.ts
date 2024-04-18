import "dotenv/config";
import express from "express";
import { connectMongoDb } from "./infra/mongo/connect";

let app = express();

connectMongoDb(process.env.MONGO_DB_URL as string)
  .then(() => console.log("MongoDb conectado"))
  .catch((error) => console.log(error));

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Servidor no ar em http://localhost:${process.env.PORT}`)
);
