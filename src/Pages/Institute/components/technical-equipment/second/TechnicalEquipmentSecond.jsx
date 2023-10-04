import "./TechnicalEquipmentSecond.css";

import StreetMapImg from "media/institute/technical-equipment/street-map.png";
import RadiogramImg from "media/institute/technical-equipment/radiogram.png";
import RadiogramImg2 from "media/institute/technical-equipment/radiogram-2.png";
import RadiogramImg3 from "media/institute/technical-equipment/radiogram-3.png";
import RadiogramDescriptionImg from "media/institute/technical-equipment/radiogram-3-description.png";

const TechnicalEquipmentSecond = () => {
  return (
    <div className="technicalEquipmentSecond">
      <h3>ОПЫТ ПРИМЕНЕНИЯ ГЕОРАДАРНЫХ ТЕХНОЛОГИЙ ДЛЯ ЗАДАЧ г.АЛМАТЫ</h3>
      <p>
        Георадиолокационное зондирование локальных участках городских
        территорий.
      </p>

      <div className="technicalEquipmentSecondMain">
        <div className="technicalEquipmentSecondMainBox" style={{width: "304px"}}>
          <img src={StreetMapImg} alt="map-img" />
          Зондирование дорожного покрытия проспекта Райымбек
        </div>

        <div className="technicalEquipmentSecondMainBox">
          <img src={RadiogramImg} alt="radiogram-img" />
          <img src={RadiogramImg2} alt="radiogram-img" />
        </div>

        <div className="technicalEquipmentSecondMainBox">
          <img src={RadiogramImg3} alt="radiogram-img" />
          <img src={RadiogramDescriptionImg} alt="radiogram-img" width="303px"/>
        </div>
      </div>
    </div>
  );
};

export default TechnicalEquipmentSecond;
