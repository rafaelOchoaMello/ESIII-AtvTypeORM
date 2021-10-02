import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity()
export class Student {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length:45})
    name: string;

}