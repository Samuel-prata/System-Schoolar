import { Request, Response } from "express";

const users = [
    { id: 1, name: "John Doe" },]

export default {
    getUsers: (req: Request, res: Response) => {
        res.status(200).json(users);
    },

    createUser: (req: Request, res: Response) => {  
        const {name} = req.body;
        const newUser = {
            id: users.length + 1,
            name: name
        };
        users.push(newUser);
        res.status(201).json(newUser);  
    },
    
}