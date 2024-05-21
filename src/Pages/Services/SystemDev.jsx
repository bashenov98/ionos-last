import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import GisImg from 'media/services/geoinfo/gis.png';
import MaksmImg from 'media/services/geoinfo/maksm.png';

import './SystemDev.css';

const SystemDev = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    return (
        <div className="systemDev">
            <h2>{t(location.pathname.slice(10))}</h2>

            <div className="systemDevMain">
                {i18n.language === 'kz'
                    ? 'Институт 2010 жылдан бастап әртүрлі бағыттар бойынша геоақпараттық жүйелерді әзірлеумен айналысады. 10 жылдан астам уақыт ішінде келесі жобалар үшін геоақпараттық жүйелер әзірленді:'
                    : i18n.language === 'ru'
                    ? 'Институт занимается разработкой геоинформационных систем по различным направлениям с 2010 г. За более чем 10 лет были разработаны геоинформационные системы для таких проектов как:'
                    : 'Since 2010, the institute has been developing geoinformation systems in various fields. Over more than 10 years, geoinformation systems have been developed for projects such as:'}
                <br />
                {i18n.language === 'kz'
                    ? '- Далалық және орман өрттерін және өрттен зардап шеккен аумақтарды бақылау; - Қар жамылғысының еруі мен су тасқынының мониторингі;'
                    : i18n.language === 'ru'
                    ? '- Мониторинг степных и лесных пожаров и площадей, пострадавших от пожаров; - Мониторинг схода снежного покрова и прохождения паводковых вод;'
                    : '- Monitoring of steppe and forest fires and areas affected by fires; - Monitoring of snow cover melting and flood waters;'}
                <br />
                {i18n.language === 'kz'
                    ? '- Каспий теңізі акваториясындағы мұнай төгінділерінің мониторингі;'
                    : i18n.language === 'ru'
                    ? '- Мониторинг нефтеразливов в акватории Каспийского моря;'
                    : '- Monitoring of oil spills in the Caspian Sea;'}
                <br />
                {i18n.language === 'kz'
                    ? '- GPS станцияларының деректері бойынша геодинамикалық ауысуларды бақылау;'
                    : i18n.language === 'ru'
                    ? '- Мониторинг геодинамических смещений по данным GPS станций;'
                    : '- Monitoring of geodynamic shifts based on GPS station data;'}
                <br />
                {i18n.language === 'kz'
                    ? '- Спутниктік радар деректері бойынша жер беті нүктелерінің ауысуын талдау нәтижелерін визуализациялау;'
                    : i18n.language === 'ru'
                    ? '- Визуализация анализа смещений точек земной поверхности по спутниковым радарным данным;'
                    : '- Visualization of analysis of surface point displacements based on satellite radar data;'}
                <br />
                {i18n.language === 'kz'
                    ? '- Климаттық өзгерістерді бақылау;'
                    : i18n.language === 'ru'
                    ? '- Мониторинг климатических изменений;'
                    : '- Monitoring of climate changes;'}
                <br />
                {i18n.language === 'kz'
                    ? '- Орман екпелерін есепке алу;'
                    : i18n.language === 'ru'
                    ? '- Учет лесных насаждений;'
                    : '- Accounting for forest plantations;'}
                <br />
                {i18n.language === 'kz'
                    ? '- ГАЖ технологиялары арқылы әлеуметтік-экономикалық көрсеткіштерді визуализациялау.'
                    : i18n.language === 'ru'
                    ? '- Визуализация социально-экономических показателей с помощью ГИС технологий.'
                    : '- Visualization of socio-economic indicators using GIS technologies.'}
                <br />
                {i18n.language === 'kz'
                    ? '- Төтенше жағдайлардың даму модельдеу нәтижелерін визуализациялау.'
                    : i18n.language === 'ru'
                    ? '- Визуализация результатов моделирования развития ЧС.'
                    : '- Visualization of emergency development simulation results.'}
            </div>

            <div className="systemDevLogos">
                {i18n.language === 'kz'
                    ? 'Біздің ГАЖ жобаларымыз:'
                    : i18n.language === 'ru'
                    ? 'Наши ГИС-проекты:'
                    : 'Our GIS projects:'}
                <a href="http://igmass.kz/" target="_blank">
                    <img src={GisImg} alt="logo-img" />
                </a>
                <a href="http://gislab.kz/" target="_blank">
                    <img src={MaksmImg} alt="logo-img" />
                </a>
            </div>
        </div>
    );
};

export default SystemDev;
