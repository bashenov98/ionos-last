import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";

import GisImg from "media/services/geoinfo/gis.png";
import MaksmImg from "media/services/geoinfo/maksm.png";

import "./SystemDev.css";

const SystemDev = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="systemDev">
      <h2>{t(location.pathname.slice(10))}</h2>

      <div className="systemDevMain">
        Институт занимается разработкой геоинформационных систем по различным
        направлениям с 2010 г. За более чем 10 лет были разработаны
        геоинформационные системы для таких проектов как:
        <br />- Мониторинг степных и лесных пожаров и площадей, пострадавших от
        пожаров; - Мониторинг схода снежного покрова и прохождения паводковых
        вод; <br />- Мониторинг нефтеразливов в акватории Каспийского моря;
        <br /> - Мониторинг геодинамических смещений по данным GPS станций;
        <br /> - Визуализация анализа смещений точек земной поверхности по
        спутниковым радарным данным;
        <br /> - Мониторинг климатических изменений;
        <br /> - Учет лесных насаждений;
        <br /> - Визуализация социально-экономических показателей с помощью ГИС
        технологий.
        <br /> - Визуализация результатов моделирования развития ЧС.
      </div>

      <div className="systemDevLogos">
        Наши ГИС-проекты:
        <img src={GisImg} alt="logo-img" />
        <img src={MaksmImg} alt="logo-img" />
      </div>
    </div>
  );
};

export default SystemDev;
