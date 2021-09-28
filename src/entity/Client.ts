import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"; 

@Entity()
export class Client {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: number;

    @Column()
    code: number;
}