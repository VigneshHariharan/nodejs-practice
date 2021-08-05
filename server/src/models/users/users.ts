import { dbQuery } from "../connection";
import { IUser, IUserIndexModel } from "./IUser";

export const getUsersIndex = async (): Promise<IUserIndexModel> => {
  const users: IUserIndexModel = await dbQuery("select * from user");
  return users;
};

export const getUserShow = async (id: number) => {};

export const addUser = async (user: IUser) => {
  const columnsName: string[] = Object.keys(user);
  const fieldValues: string[] = Object.values(user);

  const users = await dbQuery(`insert into user (??) values(?);`, [
    columnsName,
    fieldValues,
  ]);

  return users;
};
