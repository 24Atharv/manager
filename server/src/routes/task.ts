import express from 'express'
import { Router } from 'express'
const taskRouter = Router()
const app = express()
app.use(express.json());

import { PrismaClient } from '@prisma/client';
import { userMiddleware } from '../middlewares/user.js';
const prisma = new PrismaClient()

taskRouter.post("/task", userMiddleware, async (req, res) => {
    const { title, description, status } = req.body;

    try {
        const task = await prisma.task.create({
            data: {
                title: title,
                description: description,
                status: status,
                // @ts-ignore
                userId: req.userId
            }
        })
        res.status(200).json({
            message: task
        })
    }
    catch (err) {
        console.log(err);
        res.status(400).json({
            err
        })
    }
})

taskRouter.get("/tasks", userMiddleware, async(req, res) => {
    try {
        const taskOfUser = await prisma.task.findMany({
            where: {
                // @ts-ignore
                userId: req.userId
            }
        })
        res.status(200).json({
            message: taskOfUser
        })
        
    } catch(err) {
        console.log(err)
        res.status(403).json({
            message: "Not exist tasks"
        })
    }
})

taskRouter.get("/task/:id", userMiddleware, async (req, res) => {
    const taskId  = req.params.id
    try {
        const taskOfUser = await prisma.task.findFirst({
            where: {
                // @ts-ignore
                id: parseInt(taskId)
            }
        })

        res.status(200).json({
            message: taskOfUser
        })
    }
    catch(err) {
        res.status(403).json({
            message: "Not exist"
        })
        console.log(err)
    }
})

export default taskRouter
