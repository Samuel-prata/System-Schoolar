import { z } from "zod";

export const instructorValidation = z.object({ 
    email : z.string().email(),
    name: z.string().min(1, "Name is required"),
    salary: z.number().min(0, "Salary must be a positive number"),
    expertise: z.array(z.string()).min(1, "At least one expertise is required")
}).strict();

