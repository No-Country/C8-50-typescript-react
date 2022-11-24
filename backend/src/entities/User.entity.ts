import { Visit } from './Visit.entity';
import { RealState } from './RealState.entity';
import { Entity, Column, OneToMany, ManyToMany, JoinTable } from "typeorm"
import { BaseEntity } from '../config/base.entity'

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

    @ManyToMany(()=>Visit, (visit)=>visit.user)
    @JoinTable()
    visit: Visit[]

    



}