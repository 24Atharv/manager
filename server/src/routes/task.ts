import express from 'express'
import { Router } from 'express'
const taskRouter = Router()
const app = express()
app.use(express.json());

import { PrismaClient } from '@prisma/client';
import { userMiddleware } from '../middlewares/user.js';
const prisma = new PrismaClient()



export default taskRouter
