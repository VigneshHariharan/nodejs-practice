import { Router } from "express";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import { compare, hashSync } from "bcrypt";
import { addUser, getUserByEmail } from "../../models/users/users";

const router = Router();

router.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "send email and password",
    });
  }

  const isUserPresent = await getUserByEmail(email)?.then(
    (value) => value?.email
  );
  if (isUserPresent) {
    res.status(401).json({
      success: false,
      message: "user already exists",
    });
  }

  const user = {
    email,
    password: hashSync(password, 10),
  };
  const accessToken = sign({ email }, process.env.JWT_ACCESS_KEY ?? "");

  await addUser(user)
    .then(() => {
      res.status(200).json({
        success: true,
        accessToken,
        error: "",
      });
    })
    .catch((error) => {
      res.status(400).json({
        success: true,
        accessToken,
        error,
      });
    });
});

router.post("/signin", async (req, res) => {
  console.log("signin", req.body);

  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "send email and password",
    });
  }

  const user = {
    email,
    password: hashSync(password, 10),
  };

  const isUserPresent = await getUserByEmail(email)?.then(
    (value) => value?.email
  );
  if (!isUserPresent) {
    res.status(401).json({
      success: false,
      message: "please sign up",
    });
  }

  const accessToken = sign(user, process.env.JWT_ACCESS_KEY ?? "");

  res.status(200).json({
    success: true,
    accessToken,
    error: "",
  });
});

export default router;
