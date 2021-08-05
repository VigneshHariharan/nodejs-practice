import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import { database } from "./models/connection";
import { createTables } from "./models/schema/schema";

import {
  // notesRoutes,
  userRoutes,
  // resourceRoutes,
  utilRoutes,
  authRoutes,
} from "./controllers/routes";

const PORT = process.env.PORT || 3000;
const app: Express = express();

dotenv.config();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/", notesRoutes);
// app.use("/", userRoutes);
// app.use("/", resourceRoutes);
// app.use("/", resourceRoutes);
// app.use("/", authRoutes);
// app.use("/utils", utilRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, async () => {
  console.log(`Running on ${PORT} ⚡`);
  // const tables = await createTables();
});
