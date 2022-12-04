import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { Features } from "./Feature.entity";
import { RealState } from "./RealState.entity";

@Entity()
export class Quantity extends BaseEntity{
    @Column()
    quantity: number

    @ManyToOne(()=> RealState, (realstate)=>realstate.quantity)
    realstate: RealState

    @ManyToOne(()=> Features, (feature)=> feature.quantity)
    feature: Features
}