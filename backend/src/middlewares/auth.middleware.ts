import { sign, verify } from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from 'express';
import { User } from '../entities/User.entity';
import { PostgresDataSource } from '../db';

export class JWT {
    createToken(body: any, id:string){
        const rol = body.rol
        const token = sign({id, rol},String(process.env.JWT_secret),{expiresIn: '2h'})
        console.log(token)
        return token
    }
    validateToken(req: Request, res: Response, next: NextFunction){
  
        try {
            
            let token = req.headers.authorization || '';
            if (token.startsWith('Bearer ')) {
                token = token.slice(7, token.length);
            }
            const verified = verify(token, String(process.env.JWT_secret)) as string
            req.userId = verified
            next() // continuamos
        } catch (error) {
            next(res.status(400).json({error: 'token no es válido'}))
        }
    }
    async isAdmin(req: Request, res: Response, next: NextFunction){
        const { userId } = req
        const ids = "User"
        const user = await PostgresDataSource.getRepository(User).findOne({where: {id: userId}, relations:{rol: true} })
        if(!user){
            next(res.status(401).json("Unauthorized"))
        }
        if(!user?.rol || user.rol.name !== "admin"){
            next(res.status(403).json("forbidden"))
        }
        return next()
    }
}