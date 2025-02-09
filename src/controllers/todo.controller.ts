import { NextFunction, Request, Response } from "express";
import todoModel from "../models/todo.model";
import { defaultResponse } from "../../utlis/defaultResponse";

export const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description, completed } = req.body;

        if (!title || !description) {
            return defaultResponse(
                res, 400, false, null, "Title and description are required");
        }
        const newTodo = new todoModel({ title, description, completed });
        await newTodo.save();
        return defaultResponse(res, 201, true, newTodo, "To-Do added successfully");
    } catch (error) {
        next(error)
    }
};

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const page: number = parseInt(req.query.page as string) || 1;
        const limit: number = parseInt(req.query.limit as string) || 10;

        const skip = (page - 1) * limit;

        const todos = await todoModel.find().skip(skip).limit(limit);
        const totalTodos = await todoModel.countDocuments();

        return defaultResponse(res, 200, true, {
            totalPages: Math.ceil(totalTodos / limit),
            totalTodos,
            todos,
        }, "Todos fetched successfully");

    } catch (error) {
        next(error)
    }
};