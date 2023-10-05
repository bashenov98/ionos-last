import "./TechnicalEquipmentSeventh.css";

import LeftImg from 'media/institute/technical-equipment/e-callisto.png';
import RightImg from 'media/institute/technical-equipment/freq.png';

const TechnicalEquipmentSeventh = () => {
  return (
    <div className="technicalEquipmentSeventh">
      <h3>Радиоспектрометр e-Callisto</h3>
      <div className="technicalEquipmentSeventhMain">
        <img src={LeftImg} alt='left-img'/>
        <p>
        Инструмент установлен на радиополигоне «Орбита» Института Ионосферы на
        высоте 2730 метров над уровнем моря (43°03’30» с. ш., 76°58’24» в. д.).
        </p>

        <img src={RightImg} alt='right-img'/>
      </div>
      Спектрометр солнечного радиоизлучения e-Callisto, входящий в международную
      сеть спектрометров, установленных в рамках программ международного
      научного сотрудничества ООН «International Heliophysical Year» (IHY2007) и
      «International Space Weather Initiative» (ISWI)
    </div>
  );
};

export default TechnicalEquipmentSeventh;
