import './ExperimentalBaseFirst.css'

import ObservatoryImg from "../../../../../media/institute/experimental-base/observatory.png";

const ExperimentalBaseFirst = () => {
  return (
    <div className="experimentalBaseFirstMain">
      <p>
        Институт ионосферы располагает развитой и современной
        научно-исследовательской инфраструктурой, включающей высокогорную
        станцию космических лучей, радиополигон «Орбита», геомагнитную
        обсерваторию, локальную GPS сеть (CORS network):
      </p>

      <div className="experimentalBaseFirstMid">
        <div className="experimentalBaseFirstMidLeft">
          <img src={ObservatoryImg} alt="observatory" />
          Геомагнитная обсерватория «Алма-Ата»
        </div>

        <div className="experimentalBaseFirstMidRight">
          <p>
            В геомагнитной обсерватории используется оборудование: феррозондовый
            магнитометр LEMI-008; портативный однокомпонентный магнитометр
            LEMI-203; процессорный оверхаузеровский датчик POS-1.
          </p>
          <p style={{ fontStyle: "italic" }}>
            В конце 2005 г Геомагнитная обсерватория «Алма-Ата» получила
            сертификат качества Международной организации INTERMAGNET.
          </p>
        </div>
      </div>

      <div className="experimentalBaseFirstBottom">
        Геомагнитная обсерватория «Алма-Ата» расположена на высоте 1300м над
        уровнем моря, в предгорьях Тянь-Шаня, примерно в 10 км от г. Алматы,
        географические координаты [43,10ºN; 76,57ºE], геомагнитные координаты
        обсерватории [34,3ºN; 152,7ºE]. Обсерватория осуществляет непрерывный
        мониторинг геомагнитного поля: X, Y, Z компонент вектора геомагнитного
        поля, амплитуды векторного поля F. Измерения проводятся в соответствие с
        Инструкцией и стандартом INTERMAGNET.
      </div>
    </div>
  );
};

export default ExperimentalBaseFirst;
