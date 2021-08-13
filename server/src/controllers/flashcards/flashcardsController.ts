import { Router } from "express";
import { IFlashcard } from "../../models/flashcards/IFlashcard";
import {
  createFlashcards,
  deleteFlashcard,
  getFlashcards,
  updateFlashcard,
} from "../../models/flashcards/flashcardsModel";
import { protectUser } from "../../middlewares";

const router = Router();

router.get("", protectUser, async (req, res) => {
  // protectUser(req, res);

  const flashcards = await getFlashcards();
  res.status(200).json({
    success: true,
    data: {
      flashcards: flashcards,
    },

    message: "",
  });
});

router.post("", protectUser, async (req, res) => {
  const flashcards: IFlashcard = req.body;
  if (!flashcards?.question) {
    res.status(400).json({
      message: "send question",
    });
  }
  if (!flashcards?.answer) {
    res.status(400).json({
      message: "send answer",
    });
  }
  if (!flashcards?.created_by) {
    res.status(400).json({
      message: "cannot create without user id",
    });
  }

  const { answer, created_by, id, code, question } = flashcards;

  const flashcardsQuery = await createFlashcards({
    answer,
    created_by,
    id,
    code,
    question,
  });

  res.status(200).json({
    success: true,
    data: {
      user: flashcardsQuery,
    },
    message: "",
  });
});

router.put("", async (req, res) => {
  const flashcards: IFlashcard = req.body;

  const { answer, created_by, id, code, question } = flashcards;

  const flashcardsQuery = await updateFlashcard({
    answer,
    created_by,
    id,
    code,
    question,
  });

  res.status(200).json({
    success: true,
    data: {
      user: flashcardsQuery,
    },
    message: "",
  });
});

router.delete("/:id", async (req, res) => {
  await deleteFlashcard(Number(req.params.id));
  const flashcards = await getFlashcards();
  res.status(200).json({
    success: true,
    data: {
      flashcards: flashcards,
    },

    message: "",
  });
});

export default router;
