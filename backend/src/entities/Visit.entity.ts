import { User } from './User.entity';

import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { BaseEntity } from '../config/base.entity'
import { RealEstate } from './RealEstate.entity';

@Entity()
export class Visit extends BaseEntity {

    @Column()
    date: Date

    @Column()
    schedule: Date

    @Column()
    duration: number

    @ManyToOne(()=>RealEstate, (realEstate)=>realEstate.visit)
    @JoinTable()
    realEstate: RealEstate

    @ManyToMany(()=>User, (user)=>user.visit)
    user: User[]

}