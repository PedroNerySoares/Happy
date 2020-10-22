import {ErrorRequestHandler} from 'express';
import {ValidationErrorHandler} from 'yup'

const errorHandler: ErrorRequestHandler=(error,request,response,next)=>{
 
    console.log(error);

    return response.status(500).json({message:'Internal serve error'});
}

export default errorHandler;