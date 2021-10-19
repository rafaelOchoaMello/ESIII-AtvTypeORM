//@Rafael Ochôa Mello
//rafaelochoamello@gmail.com
import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Class } from '../entity/Class';

const classRoutes = Router();

classRoutes.post('/', async (req, res) => {
    try {
        const classRepository = getRepository(Class);
        const { name }= req.body;
        const classData = {
            name
        } 
        const newClass = classRepository.create(classData);
        const saveResponse = await classRepository.save(newClass)
        return res.status(201).json(saveResponse);
    } catch (err) { return res.status(400).json({ "Error": err }); }
});

classRoutes.get('/', async (req, res) => {
    try {
        const classRepository = getRepository(Class);
        const returnData = await classRepository.find();
        return res.status(200).json(returnData)
    } catch (err) { return res.status(400).json({ "Error": err }); }
})

classRoutes.get('/:id', async (req, res) => {
    try {
        const classRepository = getRepository(Class);
        const id = req.params.id;
        const classData = await classRepository.find({
            where: { id }
        });
        return res.status(200).json(classData);
    } catch (err) { return res.status(400).json({ "Error": err }); }
})

classRoutes.put('/:id', async (req, res) => {
    try {
        const classRepository = getRepository(Class);
        const id = req.params.id;
        const { name } = req.body;
        const targetClass = await classRepository.findOne(id);

        if (targetClass) {
            targetClass.name = name;
            const updateResponse = await classRepository.save(targetClass);
            return res.status(200).json(updateResponse);
        }
    } catch (err) { return res.status(400).json({ "Error": err }); }
});

classRoutes.delete('/:id', async (req, res) => {
    try {
        const classRepository = getRepository(Class);
        const id = req.params.id;
        const targetClass = await classRepository.delete(id);
        return res.status(200).send();
    } catch (err) { return res.status(400).json({ "Error": err }); }
});

export default classRoutes;