import "./TechnicalEquipmentFourth.css";

import AeroImg from "media/institute/technical-equipment/aerial-photo.png";
import AeroImg1 from "media/institute/technical-equipment/aerial-photo-2.png";
import AeroImg2 from "media/institute/technical-equipment/aerial-photo-3.png";

const TechnicalEquipmentFourth = () => {
  return (
    <div className="technicalEquipmentFourth">
      <h3>ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ БПЛА</h3>

      <div className="technicalEquipmentFourthTop">
        <div className="technicalEquipmentFourthBox">
          <img src={AeroImg} alt="aero-photo" />
          Аэрофотосъемка карьера возле поселка Акжар, Наурызбайскийрайон,
          г.Алматы. 2020г.
        </div>
        <div className="technicalEquipmentFourthBox">
          <img src={AeroImg1} alt="aero-photo" />
          Аэрофотосъемка карьера возле поселка Акжар, Наурызбайскийрайон,
          г.Алматы. 2020г.
        </div>
      </div>
      <div className="technicalEquipmentFourthBox">
        <img src={AeroImg2} alt="aero-photo" />
        Аэрофотосъемка карьера возле поселка Акжар, Наурызбайскийрайон,
        г.Алматы. 2020г.
      </div>
    </div>
  );
};

export default TechnicalEquipmentFourth;
