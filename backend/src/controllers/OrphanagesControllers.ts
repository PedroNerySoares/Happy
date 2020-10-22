
import {Request, Response} from 'express'
import {getRepository} from 'typeorm';
import Orphanages from '../models/Orphanage';
import orphanagesview from '../views/orphanages_view';
import * as Yup from 'yup';

export default {
    // listar ordenado 
    async index(request:Request, response:Response){
      
      const orphanagesRepository = getRepository(Orphanages);
      const orphanages = await orphanagesRepository.find({
        relations:['images']
      });

      return response.json(orphanagesview.renderMany(orphanages));

    },

      // listar apenas o desejado 
      async show(request:Request, response:Response){
        const{id}=request.params
        const orphanagesRepository = getRepository(Orphanages);
        const orphanage = await orphanagesRepository.findOneOrFail(id,{
          relations:['images']
        });
  
        return response.json(orphanagesview.render(orphanage));
  
      },

    //criar uma novo orfanato
    async create(request:Request, response:Response){
      
      const{
          name,
          latitude,
          longitude,
          about,
          instructions,
          opening_hours,
          open_on_weekends,
          

      } = request.body;
      const orphanagesRepository = getRepository(Orphanages);

      const requestImages=request.files as Express.Multer.File[];
      const images =requestImages.map(images=>{
        return{ path: images.filename }
      })

      const data={
        
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
        images

      }
      
      const schema = Yup.object().shape({
        name:Yup.string().required(),
        Latitude:Yup.number().required(),
        Longitude:Yup.number().required(),
        about:Yup.string().required().max(300),
        instructions:Yup.string().required(),
        opening_hours:Yup.string().required(),
        open_on_weekends:Yup.boolean().required(),
        images:Yup.array(
          Yup.object().shape({
            path:Yup.string().required()
          })
        )

      })

      await schema.validate(data,{
        abortEarly:false,
        
      })

      const orphanage=orphanagesRepository.create(data);
      
      await orphanagesRepository.save(orphanage);
      return response.status(201).json(orphanage);

    }
}