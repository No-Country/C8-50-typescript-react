import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { RealEstate } from "./RealEstate.entity";

@Entity()
export class Operation extends BaseEntity{
    @Column()
    title: string;

    @OneToMany(()=> RealEstate,(realEstate)=>realEstate.operation)
    realEstate: RealEstate;
}