import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import WeatherImage from 'media/services/geophysical/planet-sun.png';
import SohoImg from 'media/services/geophysical/soho.png';
import SdoImg from 'media/services/geophysical/sdo.png';
import SdoAiaImg from 'media/services/geophysical/sdo-aia.png';

import './GeophysicalForecast.css';

const GeophysicalForecast = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    return (
        <div className="geophysicalForecast">
            <h2>{t(location.pathname.slice(10))}</h2>

            <img src={WeatherImage} alt="image-weather" />

            <p>
                {i18n.language === 'kz'
                    ? 'Ионосфера институтының ғарыштық ауа райын диагностикалау және болжау зертханасында күн сайын геофизикалық жағдайдың болжамы жасалады.'
                    : i18n.language === 'ru'
                    ? 'Ежедневно, в лаборатории диагностики и прогноза космической погоды Института ионосферы осуществляется прогноз геофизической обстановки.'
                    : 'Every day, the laboratory of space weather diagnostics and forecasting at the Institute of Ionosphere makes a geophysical forecast.'}
            </p>

            <div className="geophysicalForecastImages">
                <h3>
                    {i18n.language === 'kz'
                        ? 'SOHO және SDO ғарыштық обсерваторияларынан Күн:'
                        : i18n.language === 'ru'
                        ? 'Солнце с космических обсерваторий SOHO и SDO:'
                        : 'The Sun from the SOHO and SDO space observatories:'}
                </h3>
                <div className="geophysicalForecastImagesRow">
                    <div className="geophysicalForecastImagesRowBox">
                        <img src={SohoImg} alt="sun-img" />
                        SOHO/EIT 195
                        <a href="http://sohowww.nascom.nasa.gov/">
                            http://sohowww.nascom.nasa.gov/
                        </a>
                    </div>
                    <div className="geophysicalForecastImagesRowBox">
                        <img src={SdoImg} alt="sun-img" />
                        SOHO/EIT 195
                        <a href="http://sohowww.nascom.nasa.gov/">
                            http://sohowww.nascom.nasa.gov/
                        </a>
                    </div>
                    <div className="geophysicalForecastImagesRowBox">
                        <img src={SdoAiaImg} alt="sun-img" />
                        SOHO/EIT 195
                        <a href="http://sohowww.nascom.nasa.gov/">
                            http://sohowww.nascom.nasa.gov/
                        </a>
                    </div>
                </div>

                <div className="geophysicalForecastImagesBtm">
                    {i18n.language === 'kz'
                        ? 'Геофизикалық жағдайды диагностикалау және болжау зертханасының меңгерушісі Крякунова Ольга Николаевна'
                        : i18n.language === 'ru'
                        ? 'Заведующая лабораторией диагностики и прогноза геофизической обстановки Крякунова Ольга Николаевна'
                        : 'Head of the laboratory of geophysical environment diagnostics and forecasting, Olga Nikolaevna Kryakunova'}
                    <a href="mailto:krolganik@yandex.ru">
                        e-mail: krolganik@yandex.ru тел. +7 (727) 380-30-59; факс +7 (727) 380-30-53
                    </a>
                </div>
            </div>

            <div className="geophysicalForecastBtm">
                {i18n.language === 'kz'
                    ? 'Геофизикалық жағдайды болжау кезінде өз әдістері мен деректер базаларынан басқа, GOES және ACE спутниктерінің бақылаулары, SOHO, SDO, STEREO ғарыштық обсерваторияларының материалдары, ИЗМИРАН ғарыштық ауа райын болжау орталығының материалдары (http://forecast.izmiran.rssi.ru) және басқа да әлемдік болжамдар орталықтарының материалдары қолданылады.'
                    : i18n.language === 'ru'
                    ? 'При прогнозировании геофизической обстановки кроме собственных методов и баз данных, используются наблюдения спутников GOES и ACE, космических обсерваторий SOHO, SDO, STEREO, материалы Центра прогноза космической погоды ИЗМИРАН (http://forecast.izmiran.rssi.ru) и других мировых центров прогнозов.'
                    : 'When forecasting the geophysical environment, in addition to our own methods and databases, observations of GOES and ACE satellites, SOHO, SDO, STEREO space observatories, materials from the Space Weather Forecast Center of IZMIRAN (http://forecast.izmiran.rssi.ru) and other world forecast centers are used.'}
                <br />
                <br />
                {i18n.language === 'kz'
                    ? 'Нақты уақыт режимінде эксперименттік гелиогеофизикалық ақпаратты ұсынатын барлық ғылыми бөлімшелерге алғысымызды білдіреміз.'
                    : i18n.language === 'ru'
                    ? 'Мы благодарим все научные подразделения, предоставляющие экспериментальную гелиогеофизическую информацию в режиме реального времени.'
                    : 'We thank all scientific departments that provide experimental heliogeophysical information in real time.'}
                <br />
                <br />
                {i18n.language === 'kz'
                    ? 'Ақпаратты пайдаланған кезде ДТОО «Ионосфера институтының» Геофизикалық жағдайды диагностикалау және болжау зертханасына сілтеме жасау міндетті.'
                    : i18n.language === 'ru'
                    ? 'При использовании информации ссылка на Лабораторию диагностики и прогноза геофизической обстановки ДТОО «Институт ионосферы» обязательна.'
                    : 'When using information, a reference to the Laboratory of Geophysical Environment Diagnostics and Forecasting of LLP "Institute of Ionosphere" is mandatory.'}
            </div>
        </div>
    );
};

export default GeophysicalForecast;
