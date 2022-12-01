import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealState } from "./RealState.entity";

@Entity()
export class Type extends BaseEntity{
    @Column()
    title: string

    @OneToMany(()=> RealState,(realstate)=>realstate.type)
    realstate: RealState
}