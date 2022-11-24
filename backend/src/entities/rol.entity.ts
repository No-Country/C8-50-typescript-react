import { Entity, Column} from "typeorm";
import { BaseEntity } from "../config/base.entity";

@Entity()
export class Rol extends BaseEntity{
    @Column()
    nombre: string;

    @Column()
    descripcion: string;

}