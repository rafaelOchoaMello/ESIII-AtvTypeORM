import {  Router } from 'express';
import { getRepository } from 'typeorm';
import { Student } from '../entity/Student';

const studentRoutes = Router();

studentRoutes.post('/', async (req, res) => {
    try {
        const studentRepository = getRepository(Student);

        const { name, classes } = req.body;

        const student ={
            name,
            classes
        }
 
        const newStudent = await studentRepository.create(student);

        const responseStudent = await studentRepository.save(newStudent);

        return res.status(201).json(responseStudent);
    } catch(err){
        //  console.log(`Error message::${err.message}`)
         return res.status(400).json({"Error":err});
    }
});

studentRoutes.get('/', async (req, res) => {
    try{
        const responseStudent = getRepository(Student);

        const studentsAll = await responseStudent.find();
        return res.status(200).json(studentsAll);
    }catch(err){
        // console.log("Erro: ", err.message)
        return res.status(400).json({"Error":err});
    }
});

studentRoutes.get('/:id', async (req, res) => {
    try{
        const responseStudent = getRepository(Student);

        const id = req.params.id;

        const studentOne = await responseStudent.find({
           where:{
               id
           }
        });
        return res.status(200).json(studentOne);
    }catch(err){
        // console.log("Erro: ", err.message)
        return res.status(400).json({"Error":err});
    }
});

studentRoutes.put('/:id', async(req, res)=>{
    
    try{
        const responseStudent = getRepository(Student);

        const id = req.params.id;
        const { name } = req.body;

       const studentExit = await  responseStudent.findOne(id)
        
       if(studentExit){

           studentExit.name = name;
           
           const studentUpdate = await responseStudent.save(studentExit);
           
           return res.status(200).json(studentUpdate);
        }

    }catch(err){
        // console.log("Erro: ", err.message)
        return res.status(500).json({"Error":err});
    }
});

studentRoutes.delete('/:id', async(req, res)=>{
    
        try{
            const responseStudent = getRepository(Student);
    
            const id = req.params.id;
            const studentDelete = await responseStudent.delete(id);
            return res.status(200).send();
        }catch(err){
            // console.log("Erro: ", err.message)
            return res.status(500).json({"Error":err});
        }
});

export default studentRoutes;
