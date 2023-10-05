import './TechnicalEquipmentSixth.css';
import SpectometerImg from 'media/institute/technical-equipment/spectometer.png';

const TechnicalEquipmentSixth = () => {
  return (
    <div className="technicalEquipmentSixth">
      <div className="technicalEquipmentSixthTop">
        <h3>Ионосферная станция</h3>
        Ионосферная станция Ионозонд «Парус» предназначен для диагностики
        состояния ионосферы в автоматическом и ручном режимах методом
        вертикального зондирования, обеспечивает измерение критических частот
        foF2 с точностью до 0.05 МГц.
      </div>
      <div className="technicalEquipmentSixthMain">
        <div className="technicalEquipmentSixthMainLeft">
          <h3>Спектрометр SATI-4 (Spectral Airglow Temperature Imager)</h3>
          SATI — это спектрометр, позволяющий получать спектральные изображения
          собственного свечения (эмиссии) в ближней инфракрасной зоне линий
          гидроксила OH (6-2) и молекулярного кислорода O2 (0-1) с
          пространственно разнесённых участков ночного неба.SATI регистрирует
          свечение, приходящее под средним углом 30 +/- 3.5° к вертикали. Это
          позволяет наблюдать излучение гидроксила OH (6-2) приходящее с
          горизонтального, расположенного на высоте 85 км кольца со средним
          радиусом 49 км и шириной 14 км (или со средним радиусом 55 км и
          шириной 16 км на высоте 95 км для молекулярного кислорода O2 (0-1)).
          Инструмент установлен на радиополигоне «Орбита» Института Ионосферы на
          высоте 2730 метров над уровнем моря (43°03’30» с. ш., 76°58’24» в.
          д.).
        </div>
        <img src={SpectometerImg} alt="spectometer" />
      </div>
    </div>
  );
};

export default TechnicalEquipmentSixth;
