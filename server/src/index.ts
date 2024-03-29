import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import { protectUser } from "./middlewares";

import {
  // notesRoutes,
  userRoutes,
  // resourceRoutes,
  utilRoutes,
  authRoutes,
  flashcardsRoutes,
  feedsRoutes,
} from "./controllers/routes";

const PORT = process.env.PORT || 3000;
const app: Express = express();

dotenv.config();
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRoutes);
app.use("/", authRoutes);
app.use("/feeds", feedsRoutes);

app.use("/flashcards", flashcardsRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello from the TypeScript world!</h1>");
});

app.listen(PORT, async () => {
  console.log(`Running on ${PORT} ⚡`);
  // const tables = await createTables();
});
