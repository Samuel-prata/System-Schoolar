import { Request, Response } from "express";
import { InstructorFactory } from "../factories/instructorFactory";
import { Instructor } from "../models/instructorModel";
import { instructorValidation } from "../middleware/instructorMiddleware";

const instructors: Instructor[] = [];

export const instructorController = {
    getAllInstructors: (req: Request, res: Response): void => {
        res.status(200).json(instructors);
    },

    create: (req: Request, res: Response): void => {
        try {
            const instructor = instructorValidation.parse(req.body);
            instructors.push(
                InstructorFactory.createInstructor(
                    instructor.name,
                    instructor.email,
                    instructor.salary,
                    instructor.expertise
                )
            );
            res.status(201).json({
                message: "Instructor created successfully",
                instructors: instructors,
            });
        } catch (err) {
            res
                .status(500)
                .json({ message: "Error creating instructor", error: err });
        }
    },
};
