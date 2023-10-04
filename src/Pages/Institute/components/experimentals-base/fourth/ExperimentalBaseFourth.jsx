import './ExperimentalBaseFourth.css';

import GpsImg from "media/institute/experimental-base/gps.png";
import GpsMapImg from "media/institute/experimental-base/map.png";

const ExperimentalBaseFourth = () => {
  return (
    <div className="experimentalBaseFourth">
      <p>
        Начиная с 2009 г. создана и действует первая очередь GPS-сети, состоящая
        из 5-и собственных и 5- арендованных приемных станций непрерывного
        режима наблюдений, созданная в рамках Республиканской бюджетной
        программы 002 «Прикладные научные исследования в области космической
        деятельности». Тип GPS приемников — Leica GRX1200GGPRO, TurboRogue SNR
        8000, TRIMBLE 4000SST, ASHTECH Z18 .{" "}
      </p>
      <div className="experimentalBaseFourthCenter">
        <div className="experimentalBaseFourthCenterImg">
          <img src={GpsImg} alt='gps-img'/>
          <img src={GpsMapImg} alt='gps-map-img'/>
        </div>
        Локальная GPS сеть
      </div>

      <p>
        Сеть GPS приемников совмещена с сетью наземных сейсмостанций Института
        сейсмологии в пределах Алматинского прогностического полигона. В
        комплексе первичной обработки данных GPS используются современные версии
        лицензионных программных комплексов GAMIT/GLOBK. Разработан комплекс
        программ для интерпретации и отображения результатов GPS-наблюдений и
        определения расчетных параметров полей перемещений и элементов
        напряженного состояния земной коры.
      </p>
    </div>
  );
};

export default ExperimentalBaseFourth;
