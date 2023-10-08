import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";

import FirstImg from "media/services/x-component.png";
import SecondImg from "media/services/y-component.png";
import ThirdImg from "media/services/z-component.png";
import FourthImg from "media/services/k-indexes.png";
import FifthImg from "media/services/full-field.png";

import "./Services.css";

const GeomagneticDimensions = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="geomagneticDimensions">
      <h2>{t(location.pathname.slice(10))}</h2>

      <div className="geomagneticDimensionsMain">
        <div className="geomagneticDimensionsMainImages">
          <img src={FirstImg} alt="geo-img" />
          <img src={SecondImg} alt="geo-img" />
          <img src={ThirdImg} alt="geo-img" />
          <img src={FourthImg} alt="geo-img" />
          <img src={FifthImg} alt="geo-img" />
        </div>

        <h3>Информация об обсерватории «Алма-Ата»</h3>
        <div className="geomagneticDimensionsMainTxt">
          Расположение: находится на высоте 1300м над уровнем моря, в предгорьях
          Тянь-Шаня, примерно в 10 км от г.Алматы, географические координаты
          [43,10ºN; 76,57ºE], геомагнитные координаты обсерватории [34,3ºN;
          152,7ºE].
          <h4>Функции: непрерывный мониторинг геомагнитного поля.</h4>
          Тип используемой аппаратуры: феррозондовый магнитометр LEMI-008,
          портативный однокомпонентный магнитометр LEMI-203, процессорный
          оверхаузеровский датчик POS-1. Данная аппаратура соответствует
          современным международным стандартам. В конце 2005 г Геомагнитная
          обсерватория «Алма-Ата» получила сертификат качества Международной
          организации INTERMAGNET.
          <h4>Наблюдаемые величины и их размерность:</h4>
          Три составляющие вектора геомагнитного поля: X (направлена на
          географический север), Y (направлена на восток, перпендикулярно оси X)
          и Z (направлена вверх) размерность – нТл; амплитуда векторного поля F
          – размерность нТл. Измерения проводятся в соответствие с Инструкцией и
          стандартом INTERMAGNET.
          <h4>Частота измерений:</h4>
          Вариационные измерения XYZ-компонент геомагнитного поля производятся с
          частотой 1с., измерения F – с частотой 5с., из секундных данных
          формируются минутные файлы XYZF (данные формируются в реальном
          масштабе времени), абсолютные измерения геомагнитного поля
          производятся два-три раза в неделю.
          <h4>Типы каналов передачи данных:</h4>
          Минутные данные XYZF в реальном масштабе времени представлены на сайте
          обсерватории «Алма-Ата»http://geomag.ionos.kz и ежесуточно в
          стандартном формате передаются для взаимного обмена в Мировой центр
          данных сети INTERMAGNET, в Эдинбург (Англия) через Интернет.
          <h4>Доступ других пользователей к получаемой информации:</h4>
          На сайте INTERMAGNET www.intermagnet.org представлены минутные данные
          вариаций магнитного поля Земли (XYZF-компоненты) с 2004 года, доступ
          по запросу. Непосредственно в геомагнитной обсерватории
          «Алма-Ата»имеются данные по состоянию магнитного поля, начиная с
          1964г. по 2003г. (среднечасовые значения вариаций HDZF), с 2003г. по
          настоящее время секундные и минутные вариационные данные XYZF, доступ
          по запросу. На сайте Института ионосферы (ionos.kz ) представлены
          минутные и часовые данные XYZF и значения k-индексов геомагнитной
          активности за период с 2003г. по настоящее время, доступ свободный.
        </div>
      </div>
    </div>
  );
};

export default GeomagneticDimensions;
