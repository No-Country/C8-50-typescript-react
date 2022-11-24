import { Entity, Column } from "typeorm"
import { BaseEntity } from '../config/base.entity'

@Entity()
export class User extends BaseEntity {

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    telephone: string

    @Column()
    password: string

    @Column()
    img: string
}