import { Router } from "express";
import { instructorController } from "../controllers/instructorController";

const instructorRouter = Router();

instructorRouter.get("/", instructorController.getAllInstructors);
// Testando Ci
instructorRouter.post("/", instructorController.create);

export default instructorRouter;