import {Router} from "express";
import ProductController from "../controllers/product.controller.js";
const router = Router();

router.route("/")
    .get(ProductController.getAll)
    .post(ProductController.create)

router.route("/:id")
    .get(ProductController.getOne)
    .put(ProductController.update)
    .delete(ProductController.delete)

export default router;