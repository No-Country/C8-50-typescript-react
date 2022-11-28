import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { Features } from "./Feature.entity";
import { RealState } from "./RealState.entity";

@Entity()
export class Quantity extends BaseEntity{
    @Column()
    quantity: number

    @OneToMany(()=> RealState, (realstate)=>realstate.quantity)
    realstate: RealState

    @OneToMany(()=> Features, (feature)=> feature.quantity)
    feature: Features
}