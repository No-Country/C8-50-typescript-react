import { Comment } from './Comment.entity';
import { RealState } from './RealState.entity';
import { Entity, Column, OneToMany, ManyToMany } from "typeorm"
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

    @ManyToMany(()=>Comment, (comment)=>comment.user)
    comment: Comment[]
}