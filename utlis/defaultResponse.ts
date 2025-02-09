import { Response } from "express";

export const defaultResponse = (
    res: Response,
    status: number,
    success: boolean,
    data: any = null,
    message: string = ""
) => {
    res.status(status).json({
        success,
        message,
        data,
    });
};
