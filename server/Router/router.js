import express from "express";
import { adddUser, getAllUsers ,getUser,editUser,deleteUser} from "../controller/user-controller.js";

const router = express.Router();
router.post("/add", adddUser);
router.get("/all",getAllUsers);
router.get("/:id",getUser);
router.put("/:id",editUser);
router.delete("/:id",deleteUser);

export default router;
