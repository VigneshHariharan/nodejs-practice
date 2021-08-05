import { PrismaClient } from "@prisma/client";
import { IFlashcard } from "./IFlashcard";

const prisma = new PrismaClient();

export const getFlashcards = async () => {
  const flashcards = await prisma.flashcards.findMany({
    where: {
      created_by: 1,
    },
  });

  return flashcards;
};

export const createFlashcards = async (card: IFlashcard) => {
  await prisma.flashcards
    .create({
      data: card,
    })
    .then((value) => {
      return value;
    })
    .catch((error) => {
      console.log("createFlashcards failed ", error);
    });
};

export const updateFlashcard = async (card: IFlashcard) => {
  await prisma.flashcards
    .update({
      data: {
        code: card?.code,
        answer: card?.answer,
        question: card?.question,
      },
      where: {
        id: card.id || 1,
      },
    })
    .then((value) => {
      return value;
    })
    .catch((error) => {
      console.log("createFlashcards failed ", error);
    });
};

export const deleteFlashcard = async (id: number) => {
  await prisma.flashcards.delete({
    where: {
      id,
    },
  });
};
