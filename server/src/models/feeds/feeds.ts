import { PrismaClient } from "@prisma/client";
import { INote } from "./IFeeds";

const prisma = new PrismaClient();

export const getAllNotes = async () => {
  const notes = await prisma.notes.findMany({
    orderBy: { updated_at: "desc" },
  });
  return notes;
};

export const createNotes = async (note: INote) => {
  const noteCreated = await prisma.notes.create({
    data: note,
  });
  return noteCreated;
};
