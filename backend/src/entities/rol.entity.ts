import { Entity, Column, OneToMany} from "typeorm";
import { BaseEntity } from "../config/base.entity";
import { User } from "./User.entity";

@Entity()
export class Rol extends BaseEntity{
    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @OneToMany(() => User, (user) => user.rol)
    user: User[]
}