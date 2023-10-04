import "./TechnicalEquipmentFirst.css";

import SchemeImg from "media/institute/technical-equipment/scheme.png";
import AntBlockImg from "media/institute/technical-equipment/ant-block.png";
import AntBlockSecondImg from "media/institute/technical-equipment/ant-block-2.png";

const TechnicalEquipmentFirst = () => {
  return (
    <div className="technicalEquipmentFirst">
      <h3>ГеорадарОКО-2, АБ-400; Око-2, АБ-90</h3>
      <p>
        Принцип действия георадара основан на излучении сверхширокополосных
        наносекундных импульсов, приеме сигналов, отраженных от границ раздела
        сред, стробоскопической обработке принятых сигналов и последующим
        измерением временных интервалов между отраженными импульсами.
      </p>
      <div className="technicalEquipmentFirstCenter">
        <img src={SchemeImg} alt="scheme-img" />
        <div className="technicalEquipmentFirstCenterSmall">
          <img src={AntBlockImg} alt="ant-block" />
          Антенный блок АБ-400. Глубина зондирования 5 метров
        </div>
        <div className="technicalEquipmentFirstCenterSmall">
          Антенный блок АБ-90. Глубина зондирования 16 метров
          <img src={AntBlockSecondImg} alt="ant-block" />
        </div>
      </div>

      <h3>Комплектация георадара</h3>
      <p>
        При перемещении георадара по поверхности исследуемой среды на экран
        монитора выводится совокупность сигналов (радарограмма или профиль), по
        которому можно определить толщину подстилающих (коренных) грунтов,
        местонахождение, глубину залегания и протяженность объектов.
      </p>
    </div>
  );
};

export default TechnicalEquipmentFirst;
