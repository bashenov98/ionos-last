import RadioImg from "../../../../../media/institute/experimental-base/radio-telescope.png";

import "./ExperimentalBaseSecond.css";

const ExperimentalBaseSecond = () => {
  return (
    <div className="experimentalBaseSecond">
      <p>
        На высокогорном радиополигоне «Орбита» (2700 м над уровнем моря),
        расположенном на высоте 2700 м вблизи г. Алматы, установлены и
        функционируют:
      </p>
      <div className="experimentalBaseSecondMid">
        <div className="experimentalBaseSecondMidLeft">
          <p>
            - Радиотелескоп ТНА-57, параболический радиотелескоп диаметром 12
            метров;
          </p>
          <p>
            - Аппаратура для регистрации радиоизлучения Солнца на частотах 1 ГГц
            и 2.8 ГГц, спектрограф солнечного радиоизлучения Callisto (входит в
            международную сеть e-Callisto). Спектрограф солнечного
            радиоизлучения Callisto позволяет регистрировать радиовсплески
            Солнца II, III, IV, V типов и прогнозировать геоэффективность
            вспышечной активности (Радиополигон «Орбита», 2750 м над уровнем
            моря);
          </p>
          <p>
            - Оптический прибор SATI (Spectral Airglow Temperature Imager), с
            помощью которого ведутся спектрофотометрические измерения
            температуры, эмиссии гидроксила и молекулярного кислорода в области
            мезопаузы;
          </p>
          <p>
            - Стационарный GNSS приёмник, используемый для изучения вариации
            полного электронного содержания ионосферы.
          </p>
        </div>
        <div className="experimentalBaseSecondMidRight">
          <img src={RadioImg} alt="radio-telescope" />
          Радиополигоне «Орбита»
        </div>
      </div>
      <div className="experimentalBaseSecondBtm">
        Использование данных, полученных на этих приборах, наряду с данными
        соответствующих мировых сетей аналогичных станций, позволяет выполнять
        работы по анализу вариаций атмосферы, обусловленных мощными
        катастрофическими геофизическими событиями, происходящими в любой точке
        земного шара.
      </div>
    </div>
  );
};

export default ExperimentalBaseSecond;
