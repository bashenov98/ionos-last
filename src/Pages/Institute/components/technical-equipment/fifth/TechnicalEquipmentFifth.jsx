import React from 'react';
import './TechnicalEquipmentFifth.css';
import techEq5Data from './techEq5.data';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentFifth = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentFifth">
            <h3>
                {i18n.language === 'kz'
                    ? 'ГЕОДЕЗИЯЛЫҚ ЖАБДЫҚТАР'
                    : i18n.language === 'ru'
                    ? 'ГЕОДЕЗИЧЕСКОЕ ОБОРУДОВАНИЕ'
                    : 'GEODETIC EQUIPMENT'}
            </h3>

            {techEq5Data.map((item, i) => (
                <div className="technicalEquipmentFifthMain" key={i}>
                    <div className="technicalEquipmentFifthMainLeft">
                        <h3>
                            {i18n.language === 'kz'
                                ? item.titleKZ
                                : i18n.language === 'ru'
                                ? item.titleRU
                                : item.titleEN}
                        </h3>
                        <p>
                            {i18n.language === 'kz'
                                ? item.textKZ
                                : i18n.language === 'ru'
                                ? item.textRU
                                : item.textEN}
                        </p>
                    </div>

                    <img src={item.img} alt="tca-img" width={'220px'} />
                </div>
            ))}
        </div>
    );
};

export default TechnicalEquipmentFifth;
