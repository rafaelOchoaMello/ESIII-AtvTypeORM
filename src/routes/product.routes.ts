import { Router } from 'express';
import { getRepository } from 'typeorm';
import { Products } from '../entity/Product';

const productRoutes = Router();

productRoutes.post('/', async (req, res) => {
    try {
        const repoRef = getRepository(Products);
        const returnData = await repoRef.save(req.body);
        return res.status(201).json(returnData);
    } catch(err){ console.log(`Error message::${err.message}`)}
});

productRoutes.get('/', async (req, res) => {
    res.json(await getRepository(Products).find()); 
});

productRoutes.get('/:id', async (req, res) => {
    res.json(await getRepository(Products).find({where:{id:req.params.id}})); 
});

productRoutes.delete('/:id', async(req,res)=>{
    res.json(await getRepository(Products).delete(req.params.id));
});

export default productRoutes;
