import { RealState } from './RealState.entity';
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

    @ManyToOne(()=>RealState, (realstate)=>realstate.comment)
    @JoinColumn({name:"ownership_id"})
    realstate: RealState

    @ManyToMany(()=>User, (user)=>user.comment)
    @JoinColumn({name:"user_id"})
    user:User



}
