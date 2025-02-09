import express, { Request, Response } from 'express'
import connectDB from './src/config/db';
import dotenv from 'dotenv'
import todoRoutes from './src/routes/todo.routes'
const app = express()

// middlewares
app.use(express.json())

connectDB()
dotenv.config()

// Routes
app.use("/api/todos", todoRoutes);

const port = process.env.PORT || 8080;

app.get("/", (req: Request, res: Response) => {
    res.send("hello")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})