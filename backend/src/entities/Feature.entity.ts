import { Column, Entity, ManyToOne } from 'typeorm'
import { BaseEntity } from '../config/base.entity';
import { Quantity } from './Quantity.entity';

@Entity()
export class Features extends BaseEntity {
    @Column()
    title: string

    @ManyToOne(()=> Quantity, (quantity)=> quantity.feature)
    quantity: Quantity
}