import { dbQuery } from "../connection";

import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
interface INotes {
  title: string;
}

interface INotesIndexModel {
  results: INotes[];
}

export const getNotesIndex = async () => {
  // const notes: INotesIndexModel = await dbQuery("select * from notes");
  const notes = await prisma.notes.findMany();
  return notes;
};

export const getNoteShow = async (id: number) => {};
