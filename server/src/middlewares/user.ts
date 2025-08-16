import * as dotenv from 'dotenv'
dotenv.config();
const JWT_SECRET = process.env.JWT_PASSWORD as string
import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];  

    try {
        const decoded = jwt.verify(token as string, JWT_SECRET);
        if (decoded) {
            // @ts-ignore
            req.userId = decoded.userId
            next()
        }
    } catch {
        res.status(400).json({
            message: "Incorect crendentails"
        })
    }
}

