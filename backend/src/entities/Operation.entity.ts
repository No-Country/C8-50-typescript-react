import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealState } from "./RealState.entity";

@Entity()
export class Operation extends BaseEntity{
    @Column()
    title: string;

    @OneToMany(()=> RealState,(realstate)=>realstate.operation)
    realstate: RealState;
}