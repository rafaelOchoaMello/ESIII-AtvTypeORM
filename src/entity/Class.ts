import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Class {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 45 })
    name: string;

    @CreateDateColumn({ name: 'created_At' })
    createAt?: Date;

    @UpdateDateColumn({ name: 'updated_At' })
    updateAt?: Date;
}
