import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";
import FirstImg from 'media/services/aerospace/monitoring.png';
import SecondImg from 'media/services/aerospace/tengiz.png';
import ThirdImg from 'media/services/aerospace/deformation.png';
import FourthImg from 'media/services/aerospace/oil.png';

import "./AerospaceMonitoring.css";

const AerospaceMonitoring = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="aerospaceMonitoring">
      <h2>{t(location.pathname.slice(10))}</h2>

      <div className="aerospaceMonitoringMain">
        <h3>Построение системы аэрокосмического мониторинга</h3>
        Система мониторинга объекта наблюдения может быть построена на
        комплексном анализа данных мультиспектрального диапазона среднего и
        высокого пространственного разрешения с периодичностью получения данных
        до 1 раза в день и данных радарного диапазона с получением данных до 3
        раз в день.

        <img src={FirstImg} alt='aero-img'/>
        <br/>
        <br/>
        <img src={SecondImg} alt='aero-img'/>
        <br/>
        <br/>
        <img src={ThirdImg} alt='aero-img'/>
        <br/>
        Динамика деформаций северо-западной части моста по улице Шалкыма
        <br/>
        <br/>
        <img src={FourthImg} alt='aero-img'/>
        <br/>
        Нефтяные загрязнения, обнаруженные по снимкам Sentinel-1A
      </div>
    </div>
  );
};

export default AerospaceMonitoring;
