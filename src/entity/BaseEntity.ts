import { 
    Entity, 
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
} from "typeorm"; 

export default abstract class BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({name: 'created_At'})
    createAt?: Date;

    @UpdateDateColumn({name: 'updated_At'})
    updateAt?: Date;

}