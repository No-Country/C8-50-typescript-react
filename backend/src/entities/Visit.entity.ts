import { User } from './User.entity';
import { RealState } from './RealState.entity';
import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { BaseEntity } from '../config/base.entity'

@Entity()
export class Visit extends BaseEntity {

    @Column()
    date: Date

    @Column()
    schedule: Date

    @Column()
    duration: number

    @ManyToOne(()=>RealState, (realstate)=>realstate.visit)
    @JoinTable()
    realstate: RealState

    @ManyToMany(()=>User, (user)=>user.visit)
    user: User[]

}