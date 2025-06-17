import { Request, Response } from "express";
import { InstructorFactory } from "../factories/instructorFactory";
import { Instructor } from "../models/instructorModel";
import { instructorValidation } from "../middleware/instructorMiddleware";
const instructors: Instructor[] = [];

export const instructorController = {

    getAllInstructors: (req: Request, res: Response) => {
        res.status(200).json(instructors);
    },

    create: (req: Request, res: Response) => {
        const instructor = instructorValidation.parse(req.body);
        if (!instructor) {
            return res.status(400).json({ message: "Invalid instructor data" });
        }
        try {
            instructors.push(InstructorFactory.createInstructor(instructor.name, instructor.email, instructor.salary, instructor.expertise));
        } catch (err) {
            return res.status(500).json({ message: "Error creating instructor", error: err});
        }
        
        res.status(201).json({
            message: "Instructor created successfully",
            instructors: instructors
        })

    }
}