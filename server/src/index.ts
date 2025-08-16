import express from 'express'
import userRouter from './routes/user.js';
import taskRouter from './routes/task.js';
const app = express()
app.use(express.json())

app.use("/auth", userRouter);
app.use("/user", taskRouter);

app.listen(3000, () => console.log("Server start"));

