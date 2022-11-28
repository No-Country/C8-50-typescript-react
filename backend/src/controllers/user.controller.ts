import { Request, Response } from "express";
import { PostgresDataSource } from "../db";
import { User } from "../entities/User.entity";


export class UserController {
    async getUsers(req: Request, res: Response) {
        const db = await PostgresDataSource.getRepository(User).find()
        res.status(200).json({
            user: db,
        })
    }
}