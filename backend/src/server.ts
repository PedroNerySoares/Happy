import express from 'express'

import './database/connection'


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

const app=express()
app.use(express.json())


app.get('/users',(requeste,response)=>{
    return response.json({message:'hello modafoca2'});



})

app.listen(3333);

