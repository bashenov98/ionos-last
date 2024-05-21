import React from 'react';
import './TechnicalEquipmentFourth.css';
import AeroImg from 'media/institute/technical-equipment/aerial-photo.png';
import AeroImg1 from 'media/institute/technical-equipment/aerial-photo-2.png';
import AeroImg2 from 'media/institute/technical-equipment/aerial-photo-3.png';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentFourth = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentFourth">
            <h3>
                {i18n.language === 'kz'
                    ? 'БПЛА ҚОЛДАНУ МЫСАЛДАРЫ'
                    : i18n.language === 'ru'
                    ? 'ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ БПЛА'
                    : 'EXAMPLES OF UAV USAGE'}
            </h3>

            <div className="technicalEquipmentFourthTop">
                <div className="technicalEquipmentFourthBox">
                    <img src={AeroImg} alt="aero-photo" />
                    {i18n.language === 'kz'
                        ? 'Акжар ауылының жанындағы карьердің аэрофотосуреті, Наурызбай ауданы, Алматы қаласы. 2020 ж.'
                        : i18n.language === 'ru'
                        ? 'Аэрофотосъемка карьера возле поселка Акжар, Наурызбайский район, г.Алматы. 2020 г.'
                        : 'Aerial photography of the quarry near the village of Akzhar, Nauryzbai district, Almaty. 2020.'}
                </div>
                <div className="technicalEquipmentFourthBox">
                    <img src={AeroImg1} alt="aero-photo" />
                    {i18n.language === 'kz'
                        ? 'Акжар ауылының жанындағы карьердің аэрофотосуреті, Наурызбай ауданы, Алматы қаласы. 2020 ж.'
                        : i18n.language === 'ru'
                        ? 'Аэрофотосъемка карьера возле поселка Акжар, Наурызбайский район, г.Алматы. 2020 г.'
                        : 'Aerial photography of the quarry near the village of Akzhar, Nauryzbai district, Almaty. 2020.'}
                </div>
            </div>
            <div className="technicalEquipmentFourthBox">
                <img src={AeroImg2} alt="aero-photo" />
                {i18n.language === 'kz'
                    ? 'Акжар ауылының жанындағы карьердің аэрофотосуреті, Наурызбай ауданы, Алматы қаласы. 2020 ж.'
                    : i18n.language === 'ru'
                    ? 'Аэрофотосъемка карьера возле поселка Акжар, Наурызбайский район, г.Алматы. 2020 г.'
                    : 'Aerial photography of the quarry near the village of Akzhar, Nauryzbai district, Almaty. 2020.'}
            </div>
        </div>
    );
};

export default TechnicalEquipmentFourth;
