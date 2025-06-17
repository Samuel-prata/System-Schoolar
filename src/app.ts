import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes";
import instructorRouter from "./routes/instructorRoutes";
dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/instructors", instructorRouter);

export default app;

