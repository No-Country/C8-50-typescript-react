import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../config/base.entity';
import { RealEstate } from './RealEstate.entity';
import { User } from './User.entity';

@Entity()
export class Call extends BaseEntity{
    @Column()
    date: Date

    @Column()
    description: string

    @ManyToOne(()=> User, (user)=> user.call)
    @JoinColumn({name:'agente'})
    user: User

    @ManyToOne(()=> RealEstate, (realEstate)=> realEstate.call)
    @JoinColumn({name:'owner'})
    realEstate: RealEstate

}