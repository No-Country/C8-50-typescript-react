import { Entity, Column } from "typeorm"
import { BaseEntity } from '../config/base.entity'

@Entity()
export class RealState extends BaseEntity {

    @Column()
    location: string

    @Column()
    price: number

    @Column()
    description: Text

}