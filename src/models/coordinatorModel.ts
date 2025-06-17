import { IUser} from "./userModel";

export interface Coordinator extends IUser {
    department: string;
    yearsOfExperience: number;
    managedCourses: string[];
}