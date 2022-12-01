import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm'

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string
    @CreateDateColumn({
        type: 'timestamp',
        name: 'createAt'
    })
    createdAt: Date
    @UpdateDateColumn({
        type: 'timestamp',
        name: 'updateAt'
    })
    updateAt: Date
    @DeleteDateColumn({
        type: 'timestamp',
        name: 'deleteAt'
    })
    deleteAt: Date

}