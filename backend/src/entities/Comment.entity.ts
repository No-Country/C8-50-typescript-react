import { RealEstate } from './RealEstate.entity';
import { User } from './User.entity';
import { Entity, Column, ManyToOne, JoinColumn, ManyToMany } from "typeorm"
import { BaseEntity } from '../config/base.entity'

@Entity()
export class Comment extends BaseEntity {

    @Column()
    date: Date

    @Column()
    schedule: Date

    @Column()
    duration : number

    @ManyToOne(()=>RealEstate, (realEstate)=>realEstate.comment)
    @JoinColumn({name:"ownership_id"})
    realEstate: RealEstate

    @ManyToMany(()=>User, (user)=>user.comment)
    @JoinColumn({name:"user_id"})
    user:User

}

