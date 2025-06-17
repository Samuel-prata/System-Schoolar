import { Coordinator } from "../models/coordinatorModel";

export class CoordinatorFactory {
    static createCoordinator( id: number, name: string, email: string, salary: number, createdAt: Date, department: string, yearsOfExperience: number, managedCourses: string[]): Coordinator {
        return {
            id,
            name,
            email,
            salary,
            createdAt,
            department,
            yearsOfExperience,
            managedCourses
        }
    }

}
