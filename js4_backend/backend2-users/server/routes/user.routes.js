import {Router} from "express";
import UserController from "../controllers/user.controller.js";
const router = Router();

router.route("/users")
    .get(UserController.getAllUser)
    .post(UserController.createUser)

router.route("/users/:id")
    .get(UserController.getOneUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser)

export default router;