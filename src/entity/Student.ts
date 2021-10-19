import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from "typeorm"; 
import { Class } from "./Class";

@Entity()
export class Student {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length:45})
    name: string;

    @CreateDateColumn({name: 'created_At'})
    createAt?: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt?: Date;

    @ManyToMany(type => Class, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    classes: Class[]
}