import StationImg from "../../../../../media/institute/experimental-base/station.png";

import './ExperimentalBaseThird.css';

const ExperimentalBaseThird = () => {
  return (
    <div className="experimentalBaseThird">
      <div className="experimentalBaseThirdMain">
        <div className="experimentalBaseThirdLeft">
          <p>
            На Тянь-Шанской высокогорной научной станции (ТШВНС, 3340 м над
            уровнем моря) работают следующие установки:
          </p>

          <p>ТШВНС «Космостанция»</p>

          <p>
            Нейтронный супермонитор 18NM-64 (3340 м над уровнем моря, жесткость
            геомагнитного обрезания R=6,7 ГВ). Непрерывно функционирует с 1973
            г. Станция космических лучей института (международное обозначение
            ААТВ) с нейтронным монитором является одной из ключевых в мировой
            сети станций. Экспериментальные данные представляются в режиме
            реального времени на сайте института. Станция входит в международную
            сеть станций космических лучей NMDB (www. nmdb.eu), куда ежеминутно
            отправляются данные интенсивности космических лучей и атмосферного
            давления. Измерения на нейтронном мониторе, программное обеспечение,
            методики обработки данных и аппаратные средства постоянно
            модернизируются и соответствуют международным стандартам;
          </p>

          <p>
            Датчик измерения атмосферного давления БРС-1 (3340 м над уровнем
            моря);
          </p>
        </div>
        <div className="experimentalBaseThirdRight">
          <img src={StationImg} alt="station" />
          Тянь-Шанская высокогорная научная станция
        </div>
      </div>

      <div className="experimentalBaseThirdBtm">
        Для решения задач, связанных с изучением процессов подготовки
        землетрясений, вблизи очагов Верненского и Кеминского катастрофических
        землетрясений работает многопараметрический экспериментальный комплекс
        (рук. к.ф.-м.н. Салихов Н.М.):
      </div>
    </div>
  );
};

export default ExperimentalBaseThird;
