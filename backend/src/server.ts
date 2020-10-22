
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
import path from 'path';

import 'express-async-errors'


import './database/connection';

import routes from './routes';
import errorHandler from './errors/hanndler';

const app=express()
app.use(express.json())
app.use(routes)
app.use('/uploads',express.static(path.join(__dirname,'..','uploads')))
app.use(errorHandler)

app.listen(3333);

