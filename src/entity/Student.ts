import { 
    Entity, 
    Column, 
    ManyToMany, 
    JoinTable, 
} from "typeorm"; 
import { IsNotEmpty, IsString, MinLength } from "class-validator";
import { Class } from "./Class";
import BaseEntity from "./BaseEntity";

@Entity()
export class Student extends BaseEntity{

    @Column({length:45, nullable:false})
    @IsString()
    @IsNotEmpty()
    @MinLength(5,{message: 'Nome deve ter mo minimo 5 caractere'})
    name: string;

    @ManyToMany(type => Class, {
        eager: true,
       
    })
    @JoinTable()
    classes: Class[]
    
}