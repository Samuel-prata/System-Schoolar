import { IUser} from "./userModel";

export interface Instructor extends IUser {
    expertise: string[];
}

