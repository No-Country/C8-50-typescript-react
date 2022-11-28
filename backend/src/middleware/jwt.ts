import { sign, verify } from 'jsonwebtoken';
import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from 'express';

export class JWT {
    createToken(id:string, role:string){
        const token = sign({id,role},process.env.JWT_secret!,{expiresIn: '2h'})
        return token
    }
    validateToken(req: Request, res: Response, next: NextFunction){
        const token = req.header('auth-token')
        if (!token) return res.status(401).json({ error: 'Acceso denegado' })
        try {
            const verified = verify(token, process.env.JWT_secret!) as string
            req.userId = verified
            next() // continuamos
        } catch (error) {
            res.status(400).json({error: 'token no es válido'})
        }
    }
}