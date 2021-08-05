import { Router } from "express";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";

const router = Router();

const posts = [
  {
    username: "Vignesh",
    title: "React native",
  },
  {
    username: "JoJo",
    title: "Bizzare Adventure",
  },
];

router.get("/posts", (req, res) => {
  res.json(posts);
});

router.post("/signin", (req, res) => {
  const username = req.body.username;
  console.log("process env", process.env);
  const accessToken = sign(username, process.env.JWT_ACCESS_KEY ?? "");
  res.json({ accessToken });
});

export default router;
