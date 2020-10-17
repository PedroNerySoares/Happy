import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlus} from 'react-icons/fi'

import mapMarkerImg from '../images/map.svg'

import '../styles/pages/Orphanages-Map.css'
import {Map,TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


function orphanegesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                
                </header>
                <footer>
                    <strong>Rio de janeiro</strong>
                    <span> Rio de Janeiro</span>
                </footer>

            </aside>

        <Map
            center={[-22.8908491,-43.2587737]}
            zoom={15}
            style={{width:'100%', height:'100%'}}
        >

             <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
           


        </Map>
        
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#fff" />
        </Link>
        </div>
        
    );
}
    export default orphanegesMap;