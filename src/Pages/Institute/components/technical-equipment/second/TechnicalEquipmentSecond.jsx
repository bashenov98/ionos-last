import React from 'react';
import './TechnicalEquipmentSecond.css';
import StreetMapImg from 'media/institute/technical-equipment/street-map.png';
import RadiogramImg from 'media/institute/technical-equipment/radiogram.png';
import RadiogramImg2 from 'media/institute/technical-equipment/radiogram-2.png';
import RadiogramImg3 from 'media/institute/technical-equipment/radiogram-3.png';
import RadiogramDescriptionImg from 'media/institute/technical-equipment/radiogram-3-description.png';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentSecond = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentSecond">
            <h3>
                {i18n.language === 'kz'
                    ? 'Алматы қаласы үшін георадарлық технологияларды қолдану тәжірибесі'
                    : i18n.language === 'ru'
                    ? 'ОПЫТ ПРИМЕНЕНИЯ ГЕОРАДАРНЫХ ТЕХНОЛОГИЙ ДЛЯ ЗАДАЧ г.АЛМАТЫ'
                    : 'EXPERIENCE OF USING GPR TECHNOLOGIES FOR THE TASKS OF ALMATY'}
            </h3>
            <p>
                {i18n.language === 'kz'
                    ? 'Қалалық аумақтардың жергілікті учаскелерінде георадиолокациялық зондтау.'
                    : i18n.language === 'ru'
                    ? 'Георадиолокационное зондирование локальных участках городских территорий.'
                    : 'GPR surveying of local areas of urban territories.'}
            </p>

            <div className="technicalEquipmentSecondMain">
                <div className="technicalEquipmentSecondMainBox" style={{ width: '304px' }}>
                    <img src={StreetMapImg} alt="map-img" />
                    {i18n.language === 'kz'
                        ? 'Райымбек даңғылының жол жабынын зондтау'
                        : i18n.language === 'ru'
                        ? 'Зондирование дорожного покрытия проспекта Райымбек'
                        : 'Surveying the road surface of Raiymbek Avenue'}
                </div>

                <div className="technicalEquipmentSecondMainBox">
                    <img src={RadiogramImg} alt="radiogram-img" />
                    <img src={RadiogramImg2} alt="radiogram-img" />
                </div>

                <div className="technicalEquipmentSecondMainBox">
                    <img src={RadiogramImg3} alt="radiogram-img" />
                    <img src={RadiogramDescriptionImg} alt="radiogram-img" width="303px" />
                </div>
            </div>
        </div>
    );
};

export default TechnicalEquipmentSecond;
