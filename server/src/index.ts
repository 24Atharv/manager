import express from 'express'
import userRouter from './routes/user.js';
const app = express()
app.use(express.json())

app.use("/auth", userRouter);

app.listen(3000, () => console.log("Server start"));

