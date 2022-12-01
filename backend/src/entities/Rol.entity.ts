import { Entity, Column, OneToMany, PrimaryColumn} from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Rol{
    @PrimaryColumn()
    id!: string;

    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @OneToMany(() => User, (user) => user.rol)
    user: User[]

}