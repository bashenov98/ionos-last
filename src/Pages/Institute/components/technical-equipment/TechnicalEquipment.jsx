import "./TechnicalEquipment.css";

import { useTranslation } from "react-i18next";
import i18n from "i18n";
import { useLocation } from "react-router-dom";
import TechnicalEquipmentFirst from "./first/TechnicalEquipmentFirst";
import EquippedPersonImg from "media/institute/technical-equipment/equipped-person-scheme.png";

const TechnicalEquipment = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="technicalEquipment">
      <h2>{t(location.pathname.slice(11))}</h2>

      <TechnicalEquipmentFirst />
      <img src={EquippedPersonImg} alt="equipped-person" width="617px"/>
    </div>
  );
};

export default TechnicalEquipment;
