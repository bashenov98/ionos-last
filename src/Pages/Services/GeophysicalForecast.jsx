import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import WeatherImage from "media/services/geophysical/planet-sun.png";
import SohoImg from "media/services/geophysical/soho.png";
import SdoImg from "media/services/geophysical/sdo.png";
import SdoAiaImg from "media/services/geophysical/sdo-aia.png";

import "./GeophysicalForecast.css";

const GeophysicalForecast = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="geophysicalForecast">
      <h2>{t(location.pathname.slice(10))}</h2>

      <img src={WeatherImage} alt="image-weather" />

      <p>
        Ежедневно, в лаборатории диагностики и прогноза космической погоды
        Института ионосферы осуществляется прогноз геофизической обстановки.
      </p>

      <div className="geophysicalForecastImages">
        <h3>Солнце с космических обсерваторий SOHO и SDO:</h3>
        <div className="geophysicalForecastImagesRow">
          <div className="geophysicalForecastImagesRowBox">
            <img src={SohoImg} alt="sun-img" />
            SOHO/EIT 195
            <a>http://sohowww.nascom.nasa.gov/</a>
          </div>
          <div className="geophysicalForecastImagesRowBox">
            <img src={SdoImg} alt="sun-img" />
            SOHO/EIT 195
            <a>http://sohowww.nascom.nasa.gov/</a>
          </div>
          <div className="geophysicalForecastImagesRowBox">
            <img src={SdoAiaImg} alt="sun-img" />
            SOHO/EIT 195
            <a>http://sohowww.nascom.nasa.gov/</a>
          </div>
        </div>

        <div className="geophysicalForecastImagesBtm">
          Заведующая лабораторией диагностики и прогноза геофизической
          обстановки Крякунова Ольга Николаевна
          <a>
            e-mail: krolganik@yandex.ru тел. +7 (727) 380-30-59; факс +7 (727)
            380-30-53
          </a>
        </div>
      </div>

      <div className="geophysicalForecastBtm">
        При прогнозировании геофизической обстановки кроме собственных методов и
        баз данных, используются наблюдения спутников GOES и ACE, космических
        обсерваторий SOHO, SDO, STEREO, материалы Центра прогноза космической
        погоды ИЗМИРАН (http://forecast.izmiran.rssi.ru) и других мировых
        центров прогнозов.
        <br />
        <br/>
        Мы благодарим все научные подразделения, предоставляющие
        экспериментальную гелиогеофизическую информацию в режиме реального
        времени.
        <br />
        <br/>
        При использовании информации ссылка на Лабораторию диагностики и
        прогноза геофизической обстановки ДТОО «Институт ионосферы» обязательна.
      </div>
    </div>
  );
};

export default GeophysicalForecast;
