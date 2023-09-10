import React, { useEffect } from 'react';
import DG from '2gis-maps';

import './Map.css';

export const Map = () => {
    useEffect(() => {
        let map
        map = DG.map("map-container", {
            center: [43.1760, 76.9535],
            zoom: 20
        })



        DG.marker([43.1759, 76.9535]).addTo(map)
        return () => map && map.remove();
    }, []);
    return (
        <div className='mapContainer'>
            <div className='map' id='map-container'>

            </div>
            <div className='mapAddress'>
                <h4 className='mapAddressHeader'>ТОО «Институт Ионосферы» находится по адресу:</h4>
                <h5 className='mapAddressText'>050020, Республика Казахстан, г. Алматы, Каменское плато, Садоводческое товарищество «Ионосфера» д.117</h5>
            </div>
        </div>
    );
}