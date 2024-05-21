import React, { useEffect } from 'react';
import DG from '2gis-maps';

import i18n from '../../../i18n';

import './Map.css';

export const Map = () => {
    useEffect(() => {
        let map;
        map = DG.map('map-container', {
            center: [43.176, 76.9535],
            zoom: 20,
        });

        DG.marker([43.1759, 76.9535]).addTo(map);
        return () => map && map.remove();
    }, []);
    return (
        <div className="mapContainer">
            <div className="map" id="map-container"></div>
            <div className="mapAddress">
                <h4 className="mapAddressHeader">
                    {i18n.language === 'kz'
                        ? '«Ионосфера институты» ЖШС орналасқан мекенжайы:'
                        : i18n.language === 'ru'
                        ? 'ТОО «Институт Ионосферы» находится по адресу:'
                        : 'Ionosphere Institute LLP is located at:'}
                </h4>
                <h5 className="mapAddressText">
                    {i18n.language === 'kz'
                        ? '050020, Қазақстан Республикасы, Алматы қаласы, Каменское платосы, «Ионосфера» бағбандық серіктестігі № 117'
                        : i18n.language === 'ru'
                        ? '050020, Республика Казахстан, г. Алматы, Каменское плато, Садоводческое товарищество «Ионосфера» д.117'
                        : '050020, Republic of Kazakhstan, Almaty, Kamenskoye Plateau, Gardening Partnership "Ionosphere" no. 117'}
                </h5>
            </div>
        </div>
    );
};
