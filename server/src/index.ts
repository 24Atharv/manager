import express from 'express'
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
import cors from 'cors'
const app = express()
app.use(express.json())

app.use(cors({
    origin: "http://localhost:3000",  // frontend URL
    credentials: true
}))


app.use("/auth", userRouter);
app.use("/user", taskRouter);

app.listen(4000, () => console.log("Server start"));

