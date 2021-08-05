import { Router } from "express";
import { addUser, getUserShow, getUsersIndex } from "../../models/users/users";
import { IUser } from "../../models/users/IUser";

const router = Router();

router.get("/users", async (req, res) => {
  const users = await getUsersIndex();
  res.status(200).json({
    success: true,
    data: {
      users: users,
    },

    message: "",
  });
});

router.get("/users:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({
      success: false,
      message: "Send an id",
    });
  }
  const user = await getUserShow(Number(id));
  res.status(200).json({
    success: true,
    data: {
      user: user,
    },
    message: "",
  });
});

router.post("/users", async (req, res) => {
  const user: IUser = req.body;
  if (!user?.email) {
    res.status(400).json({
      message: "send email id",
    });
  }
  if (!user?.name) {
    res.status(400).json({
      message: "send user name",
    });
  }
  if (!user?.password) {
    res.status(400).json({
      message: "send password",
    });
  }

  const { email, name, password, description, mobile_number, profile_photo } =
    user;
  const userPostQuery = await addUser({
    email,
    name,
    password,
    description,
    mobile_number,
    profile_photo,
  });

  res.status(200).json({
    success: true,
    data: {
      user: userPostQuery,
    },
    message: "",
  });
});

export default router;
