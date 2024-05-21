import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import FirstImg from 'media/services/aerospace/monitoring.png';
import SecondImg from 'media/services/aerospace/tengiz.png';
import ThirdImg from 'media/services/aerospace/deformation.png';
import FourthImg from 'media/services/aerospace/oil.png';
import './AerospaceMonitoring.css';

const AerospaceMonitoring = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    return (
        <div className="aerospaceMonitoring">
            <h2>{t(location.pathname.slice(10))}</h2>

            <div className="aerospaceMonitoringMain">
                <h3>
                    {i18n.language === 'kz'
                        ? 'Аэрокосмостық мониторинг жүйесін құру'
                        : i18n.language === 'ru'
                        ? 'Построение системы аэрокосмического мониторинга'
                        : 'Building an aerospace monitoring system'}
                </h3>
                <p>
                    {i18n.language === 'kz'
                        ? 'Бақылау объектісін мониторингілеу жүйесі орта және жоғары кеңістіктік ажыратымдылықтағы мультиспектральды диапазон деректерін кешенді талдауға негізделуі мүмкін, деректерді күніне 1 ретке дейін және радар диапазонының деректерін күніне 3 ретке дейін алу арқылы.'
                        : i18n.language === 'ru'
                        ? 'Система мониторинга объекта наблюдения может быть построена на комплексном анализе данных мультиспектрального диапазона среднего и высокого пространственного разрешения с периодичностью получения данных до 1 раза в день и данных радарного диапазона с получением данных до 3 раз в день.'
                        : 'The monitoring system of the observation object can be built on the complex analysis of data in the multispectral range of medium and high spatial resolution with data acquisition up to 1 time per day and radar range data with data acquisition up to 3 times per day.'}
                </p>

                <img src={FirstImg} alt="aero-img" />
                <br />
                <br />
                <img src={SecondImg} alt="aero-img" />
                <br />
                <br />
                <img src={ThirdImg} alt="aero-img" />
                <p>
                    {i18n.language === 'kz'
                        ? 'Шалқыма көшесіндегі көпірдің солтүстік-батыс бөлігінің деформация динамикасы'
                        : i18n.language === 'ru'
                        ? 'Динамика деформаций северо-западной части моста по улице Шалкыма'
                        : 'Deformation dynamics of the north-western part of the bridge on Shalkyma Street'}
                </p>
                <br />
                <img src={FourthImg} alt="aero-img" />
                <p>
                    {i18n.language === 'kz'
                        ? 'Sentinel-1A суреттерінен табылған мұнай дақтары'
                        : i18n.language === 'ru'
                        ? 'Нефтяные загрязнения, обнаруженные по снимкам Sentinel-1A'
                        : 'Oil pollution detected by Sentinel-1A images'}
                </p>
            </div>
        </div>
    );
};

export default AerospaceMonitoring;
