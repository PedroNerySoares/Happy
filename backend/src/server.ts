//Rota = conjuto
//Recurso= usuário[users]
//Métodos= HTTP = GET,POST,PUT,DELETE
//Parâmetros 

//GET = Buscar uma informclsação(lista,item)
//POST= Criando uma informação
//PUT= Editando uma informação
//DELETE= Deletando uma Informação 


//Route query: http://localhost:3333/users?search=pedro   
//Route parasms: http://localhost:3333/users/1 (identificar um recurso)
//Body: http://localhost:3333/users (identificar um recurso)

import express from 'express';
import{getRepository} from 'typeorm';
import Orphanage from './models/Orphanages'

const app=express()
app.use(express.json())


app.post('/orphanages',async(request,response)=>{
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        opening_weekends,

    }=request.body;
    
    const orphanagesRepository= getRepository(Orphanage)
    const orphanage = orphanagesRepository.create({
            
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            opening_weekends,


    });

    await orphanagesRepository.save(orphanage);    
   
    return response.json({message:'hello modafoca2'});

})

app.listen(3333);

