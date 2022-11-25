import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm'
import { BaseEntity } from '../config/base.entity';
import { RealState } from './RealState.entity';
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

    @ManyToOne(()=> RealState, (realstate)=> realstate.call)
    @JoinColumn({name:'owner'})
    realstate: RealState

}