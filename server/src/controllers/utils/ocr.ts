import { Router } from "express";
import tesseract from "node-tesseract-ocr";

const router = Router();

router.get("/imageToText", async (req, res) => {
  const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
  };
  let text = "";
  let error = "";

  // const image =  "https://tesseract.projectnaptha.com/img/eng_bw.png";
  const image = require("./download.jpeg");
  console.log("image : ", image);
  try {
    text = await tesseract.recognize(image, config);
    console.log("text : ", text);
  } catch (err) {
    console.log("error in ocr", err);
    error = err;
  }

  res.status(200).json({
    success: true,
    data: {
      text,
      error,
    },

    message: "",
  });
});

export default router;
