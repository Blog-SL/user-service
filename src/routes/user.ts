import { Router } from "express";
import {
  registerUser,
  loginUser,
  myProfile,
  getUserProfile,
  updateProfilePic,
  updateUser,
} from "../controllers/user.js";
import { isAuth } from "../middleware/isAuth.js";
import uploadFile from "../middleware/multer.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", isAuth, myProfile);
router.get("/user/:id", getUserProfile);
router.post("/user/update", isAuth, updateUser);
router.post("/user/update/pic", isAuth, uploadFile, updateProfilePic);

export default router;
