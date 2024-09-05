import {Router} from "express";
// import UserController from "../controllers/user.controller.js";
import { getAllUser, getOneUser, createUser, updateUser, deleteUser } from "../controllers/user2.controller.js";
const router = Router();

router.route("/users")
    .get(getAllUser)
    .post(createUser)

router.route("/users/:id")
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

export default router;