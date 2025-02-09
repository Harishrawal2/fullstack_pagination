import express from "express";
import { addTodo, getTodos } from "../controllers/todo.controller";

const router = express.Router();

router.post("/add", addTodo);
router.get("/list", getTodos);

export default router;
