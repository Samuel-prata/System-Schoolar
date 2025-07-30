import { Instructor } from "../models/instructorModel";

export class InstructorFactory {
    static createInstructor( name: string, email: string, salary: number, expertise: string[]): Instructor{
        return {
            id: Math.floor(Math.random() * 1000), // Random ID for simplicity
            name: name,
            email: email,
            salary: salary,
            createdAt: new Date(),
            expertise: expertise
        }
    }
}