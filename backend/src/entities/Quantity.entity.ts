import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { Features } from "./Feature.entity";
import { RealEstate } from "./RealEstate.entity";

@Entity()
export class Quantity extends BaseEntity{
    @Column()
    quantity: number

    @ManyToOne(()=> RealEstate, (realEstate)=>realEstate.quantity)
    realEstate: RealEstate

    @ManyToOne(()=> Features, (feature)=> feature.quantity)
    feature: Features
}