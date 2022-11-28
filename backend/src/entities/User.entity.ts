import { Comment } from './Comment.entity';
import { Visit } from './Visit.entity';
import { RealState } from './RealState.entity';
import { Entity, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm"
import { BaseEntity } from '../config/base.entity'
import { Rol } from './rol.entity';
import { Call } from './Call.entity';
import { Wishlist } from './Whislist.entity';

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
    
    @ManyToMany(()=>Visit, (visit)=>visit.user)
    @JoinTable()
    visit: Visit[]

    @ManyToOne(() => Rol, (rol) => rol.user)
    rol: Rol

    @OneToMany(()=> Call, (call)=> call.user)
    call: Call
    @OneToMany(()=> Wishlist, (wishlist)=> wishlist.user)
    wishlist: Wishlist
}