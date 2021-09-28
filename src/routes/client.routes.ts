import { response, Router } from 'express';
import { getRepository } from 'typeorm';
import { Client } from '../entity/Client';

const clientRoutes = Router();

clientRoutes.post('/', async (req, res) => {
    try {
        const repoRef = getRepository(Client);
        const returnData = await repoRef.save(req.body);
        return res.status(201).json(returnData);
    } catch(err){ console.log(`Error message::${err.message}`)}
});

clientRoutes.get('/', async (req, res) => {
    res.json(await getRepository(Client).find()); 
});

clientRoutes.get('/findByName/:name', async (req, res) => {
    res.json(await getRepository(Client).find({where:{name:req.params.name}})); 
});

clientRoutes.delete('/:id', async(req,res)=>{
    res.json(await getRepository(Client).delete(req.params.id));
});

export default clientRoutes;
