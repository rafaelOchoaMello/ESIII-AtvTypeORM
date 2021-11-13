import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, CreateDateColumn, 
    UpdateDateColumn, 
    ManyToMany, 
    JoinTable, 
    IsNull} from "typeorm"; 
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { Class } from "./Class";

@Entity()
export class Student {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({length:45, nullable:false})
    @IsString()
    @IsNotEmpty()
    @MinLength(5,{message: 'Nome deve ter mo minimo 5 caractere'})
    name: string;

    @CreateDateColumn({name: 'created_At'})
    createAt?: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt?: Date;

    @ManyToMany(type => Class, {
        eager: true,
       
    })
    @JoinTable()
    classes: Class[]
}