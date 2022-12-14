import { Comment } from './Comment.entity';
import { Visit } from './Visit.entity';
import { User } from './User.entity';
import { Entity, Column, ManyToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { BaseEntity } from '../config/base.entity'
import { Call } from './Call.entity';
import { Wishlist } from './Whislist.entity';
import { Operation } from './Operation.entity';
import { Type } from './type.entity';
import { Quantity } from './Quantity.entity';

@Entity()
export class RealState extends BaseEntity {

    @Column()
    location: string

    @Column()
    price: number

    @Column()
    description: string

    @ManyToOne(()=>User, (user)=>user.realstate)
    @JoinColumn({name: "owner_id"})
    user: User
    
    @OneToMany(()=>Visit, (visit)=>visit.realstate)
    visit: Visit[]

    @OneToMany(()=>Comment, (commet)=>commet.realstate)
    comment: Comment[]

    @OneToMany(()=>Call, (call)=>call.realstate)
    call: Call[]

    @ManyToMany(()=> Wishlist, (wishlistreal)=>wishlistreal.realstate)
    @JoinTable()
    wishlistreal: Wishlist

    @ManyToOne(()=> Operation, (operation)=> operation.realstate)
    operation: Operation

    @ManyToOne(()=> Type, (type)=> type.realstate)
    type: Operation

    @ManyToOne(()=> Quantity, (quantity)=> quantity.realstate)
    quantity: Quantity

}