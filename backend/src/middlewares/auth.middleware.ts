import { sign, verify } from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import { User } from '../entities/User.entity';
import { PostgresDataSource } from '../db';

export class Auth {
    createToken(body: any, id:string){
        const rol = body.rol
        const token = sign({id, rol},String(process.env.JWT_secret),{expiresIn: '2h'})

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
    decodetoken(req: Request){
        let token = req.headers.authorization || ''
        if(token?.startsWith('Bearer ')){
            token = token.slice(7, token.length);
        }
        const deco = verify(token, String(process.env.JWT_secret)) as string
        const bus = Object.values(deco)
        return bus[0]
        
    }
    async isAdmin(req: Request, res: Response, next: NextFunction){
        const ids = this.decodetoken(req)
        const user = await PostgresDataSource.getRepository(User).findOne({where: {id: ids}, relations:{rol: true} })
        if(!user){
            next(res.status(401).json("Unauthorized"))
        }
        if(!user?.rol || user.rol.name !== "admin"){
            next(res.status(403).json("forbidden"))
        }
        return next()
    }

    async isSuperAdmin(req: Request, res: Response, next: NextFunction){
        const ids = this.decodetoken(req)
        const user = await PostgresDataSource.getRepository(User).findOne({where: {id: ids}, relations:{rol: true} })
        if(!user){
            next(res.status(401).json("Usuario no encontrado"))
        }
        if(!user?.rol || user.rol.name !== "superAdmin"){
            next(res.status(403).json("Permisos insuficientes"))
        }
        return next()
    }

}
