import Orphanage from '../models/Orphanage'
import imagesView from '../views/images_view'

export default {
    // recuperar unico orfanato
    render(orphanage:Orphanage){
        
        return{ 
            id:orphanage.id,
            name:orphanage.name,
            latitude:orphanage.latitude,
            longitude:orphanage.longitude,
            about:orphanage.about,
            instructions:orphanage.instructions,
            opening_hours:orphanage.opening_hours,
            open_on_weekends:orphanage.open_on_weekends,
            images:imagesView.renderMany(orphanage.images)


        }
    },

    //recuperar tofos os orfanatos
    renderMany(orphanages:Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}