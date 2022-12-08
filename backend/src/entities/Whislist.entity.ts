import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealEstate } from "./RealEstate.entity";
import { User } from "./User.entity";

@Entity()
export class Wishlist extends BaseEntity{

    @ManyToOne(()=> User, (user)=> user.wishlist)
    user: User
    @ManyToMany(()=> RealEstate,(realEstate)=> realEstate.wishlis, {cascade: true})
    realEstates: RealEstate[]
}