import express from 'express'
const app = express();
app.use(express.json());
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

app.post("/signup", (req, res) => {
    const { name, email, password } = req.body;

})

