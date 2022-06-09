const express=require('express');
const router= express.Router();
const refugio=require('../services/refugio.service');

router.get('/',async function(req,res,next){

    try{
        res.json(await refugio.find(req.query.page));
    }catch(err){
        console.error(`Error al obtener las taquerias`,err.message);
        next(err);
    }
});

router.get('/:id',async function(req,res,next){

    try{
        res.json(await refugio.findOne(req.params.page));
    }catch(err){
        console.error(`Error al obtener la taqueria`,err.message);
        next(err);
    }
});

router.post('/',async function(req,res,next){
    try{
        res.json(await refugio.generate(req.body));
    }catch(err){
        console.error(`Error mientras se guardaban las taquerias`,
        err.message);
        next(err);
    }
});
router.put('/:id',async function(req,res,next){
    try {
        res.json(await refugio.update(
            req.params.id,req.body))
    } catch (error) {
        console.error(`Error mientras se guardaba la taqueria`,
        err.message);
        next(err);
    }
});
router.delete('/:id',async function(req,res,next){
    try {
        res.json(await refugio.delete(
            req.params.id));
    } catch (error) {
        console.error(`Error mientras se borraba la taqueria`, err.message);
        next(err);
    }
})

module.exports=router;
