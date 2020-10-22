import Image from '../models/Image'

export default {
    // recuperar unica image
    render(image:Image){
        
        return{ 
            id:image.id,
            url:`http://localhost:3333/uploads/${image.path}`
          
        }
    },

    //recuperar todas images
    renderMany(images:Image[]){
     return images.map(image=>this.render(image))
    }
}