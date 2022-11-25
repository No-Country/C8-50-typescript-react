import { User } from './User.entity';
import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import { BaseEntity } from '../config/base.entity'

@Entity()
export class RealState extends BaseEntity {

    @Column()
    location: string

    @Column()
    price: number

    @Column()
    description: string

    @ManyToOne(()=>User, (user)=>user.realstate)
    @JoinColumn({name:"owner_id"})
    user: User

}