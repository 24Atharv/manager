import * as dotenv from 'dotenv'
dotenv.config();
const JWT_SECRET = process.env.JWT_PASSWORD as string
import express from 'express'
import { Router } from 'express'
import { userSchema } from '../zodSchema.js'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()
const userRouter = Router()
const app = express()
app.use(express.json())

if (!JWT_SECRET) {
    throw new Error("JWT_PASSWORD is not defined in .env");
}

userRouter.post("/signup", async (req, res) => {
    const parsedResult = userSchema.safeParse(req.body);

    const saltrounds = 10;

    if (!parsedResult.success) {
        console.log(parsedResult.error.format())
        return res.status(403).json({
            message: "Invalid credentials"            
        })
    }

    else {
        const { name, email, password } = parsedResult.data

        const hashpassword = await bcrypt.hash(password, saltrounds);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashpassword
            }
        })

        if (user) {
            res.status(200).json({
                message: "Signup succeded"
            })
        }

        else {
            console.log("hi there")
            res.status(403).json({
                message: "Incorrect credentials"
            })
        }
    }
});

userRouter.post("/login", async (req, res) => {
    const { name, email, password } = req.body;

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    if (user) {
        const isValidate = await bcrypt.compare(password, user.password);

        if (!isValidate) {
            return res.status(403).json({
                message: "Incorrect credentails"
            })
        }

        if (isValidate) {
            const token = jwt.sign({
                id: user.id
            }, JWT_SECRET)

            res.status(200).json({
                token
            })
        }

    }
    else {
        res.status(403).json({
            message: "No user found"
        })
    }
})


export default userRouter
