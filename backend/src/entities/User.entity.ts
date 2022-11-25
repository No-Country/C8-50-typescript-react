import { RealState } from './RealState.entity';
import { Entity, Column, OneToMany, ManyToOne } from "typeorm"
import { BaseEntity } from '../config/base.entity'
import { Rol } from './rol.entity';
import { Call } from './Call.entity';

@Entity()
export class User extends BaseEntity {

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    telephone: string

    @Column()
    password: string

    @Column()
    img: string

    @OneToMany(()=>RealState, (realstate)=>realstate.user)
    realstate: RealState[]

    @ManyToOne(() => Rol, (rol) => rol.user)
    rol: Rol

    @OneToMany(()=> Call, (call)=> call.user)
    call: Call
}