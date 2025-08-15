import * as dotenv from 'dotenv'
dotenv.config();
const JWT_SECRET = process.env.JWT_PASSWORD as string
import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers['authorization'];

    const decoded = jwt.verify(header as string, JWT_SECRET)

    if(decoded) {
        // @ts-ignore
        req.userId = decoded.id
        next()
    }
    else {
        res.status(400).json({
            message: "You are not logged in"
        })
    }
}