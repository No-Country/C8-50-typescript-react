import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealState } from "./RealState.entity";
import { User } from "./User.entity";

@Entity()
export class Wishlist extends BaseEntity{

    @ManyToOne(()=> User, (user)=> user.wishlist)
    user: User
    @ManyToMany(()=> RealState,(realstate)=> realstate.wishlistreal)
    @JoinTable()
    realstate: RealState
}