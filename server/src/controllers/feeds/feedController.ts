import { Router } from "express";
import { getAllNotes, createNotes } from "../../models/feeds/feeds";
import { getUserByEmail } from "../../models/users/users";

import { protectUser } from "../../middlewares";

const router = Router();

router.get("", async (req, res) => {
  // get user id and use is_private false and paginate
  res.status(200).json({
    success: true,
    notes: await getAllNotes(),
  });
});

router.post("", protectUser, async (req: any, res) => {
  // get user id and use is_private false and paginate

  const note = req.body.note;
  // console.log("user : ", req.user, req.body);
  const id = await getUserByEmail(req.user.email);

  const createdNote = await createNotes({ ...note, created_by: id });
  res.status(200).json({
    success: true,
  });
});

export default router;
