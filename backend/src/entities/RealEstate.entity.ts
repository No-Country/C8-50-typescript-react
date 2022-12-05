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
export class RealEstate extends BaseEntity {

    @Column()
    name: string

    @Column()
    price: number

    @Column({ type: "text" })
    description: string

    @Column({ type: "text" })
    image: string

    @Column()
    country: string

    @Column()
    city: string

    @Column()
    latitude: string

    @Column()
    longitude: string

    @ManyToOne(()=>User, (user)=>user.realEstate)
    @JoinColumn({name: "broker_id"})
    user: User
    
    @OneToMany(()=>Visit, (visit)=>visit.realEstate)
    visit: Visit[]

    @OneToMany(()=>Comment, (commet)=>commet.realEstate)
    comment: Comment[]

    @OneToMany(()=>Call, (call)=>call.realEstate)
    call: Call[]

    @ManyToMany(()=> Wishlist, (wishlistreal)=>wishlistreal.realEstate)
    @JoinTable()
    wishlistreal: Wishlist

    @ManyToOne(()=> Operation, (operation)=> operation.realEstate)
    operation: Operation

    @ManyToOne(()=> Type, (type)=> type.realEstate)
    type: Operation

    @OneToMany(()=> Quantity, (quantity)=> quantity.realEstate)
    quantity: Quantity

}