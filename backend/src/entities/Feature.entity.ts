import { Column, Entity } from 'typeorm'
import { BaseEntity } from '../config/base.entity';

@Entity()
export class Features extends BaseEntity {
    @Column()
    title: string
}