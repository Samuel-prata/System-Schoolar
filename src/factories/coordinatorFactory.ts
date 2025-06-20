import { date } from "zod";
import { Coordinator } from "../models/coordinatorModel";

export class CoordinatorFactory {
    static createCoordinator( name: string, email: string, salary: number, createdAt: Date, department: string, yearsOfExperience: number, managedCourses: string[]): Coordinator {
        return {
            id: Math.floor(Math.random() * 1000),
            name: name,
            email: email,
            salary: salary,
            createdAt: createdAt,
            department: department,
            yearsOfExperience: yearsOfExperience,
            managedCourses: managedCourses
        }
    }

}
