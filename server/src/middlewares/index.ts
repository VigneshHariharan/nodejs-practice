import { verify } from "jsonwebtoken";

export const protectUser = async (req: any, res: any, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(400).json({
      success: false,
      message: "user not logged in",
    });
  }

  await verify(
    token,
    process.env.JWT_ACCESS_KEY || "",
    (err: any, user: any) => {
      if (err) {
        res.status(400).json({
          success: false,
          message: "please sign in again",
        });
      } else {
        req.user = user;
        next();
      }
    }
  );
};
