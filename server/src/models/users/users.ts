// import { dbQuery } from "../oldConnection";
import { IUser, IUserIndexModel } from "./IUser";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsersIndex = async () => {
  // const users: IUserIndexModel = await dbQuery("select * from user");
  // return users;

  return await prisma.user.findMany();
};

export const getUserByEmail = async (email: string) => {
  const res = await prisma.user.findFirst({
    where: {
      email,
    },
  });
  console.log("getUserByEmail", res);
  return res?.id;
};

export const getUserShow = async (id: number) => {};

export const addUser = async (user: IUser) => {
  const { email, password } = user;
  await prisma.user
    .create({
      data: {
        email,
        password,
      },
    })
    .then((value) => {
      console.log("result value sent", value, user);
    })
    .catch((error) => {
      console.log("error on create user : ", error, user);
    });

  return user;
};
