import React from 'react';
import RadioImg from '../../../../../media/institute/experimental-base/radio-telescope.png';
import './ExperimentalBaseSecond.css';
import { useTranslation } from 'react-i18next';

const ExperimentalBaseSecond = () => {
    const { i18n } = useTranslation();

    return (
        <div className="experimentalBaseSecond">
            <p>
                {i18n.language === 'kz'
                    ? 'Жоғары таулы «Орбита» радиополигонда (теңіз деңгейінен 2700 м биіктікте) орналасқан, Алматы қаласының жанында орналасқан және келесі жабдықтар орнатылған және жұмыс істейді:'
                    : i18n.language === 'ru'
                    ? 'На высокогорном радиополигоне «Орбита» (2700 м над уровнем моря), расположенном на высоте 2700 м вблизи г. Алматы, установлены и функционируют:'
                    : 'At the high-mountain radio test site "Orbita" (2700 m above sea level), located at an altitude of 2700 m near Almaty, the following equipment is installed and operating:'}
            </p>
            <div className="experimentalBaseSecondMid">
                <div className="experimentalBaseSecondMidLeft">
                    <p>
                        {i18n.language === 'kz'
                            ? '- 12 метрлік диаметрі бар параболалық радиотелескоп ТНА-57;'
                            : i18n.language === 'ru'
                            ? '- Радиотелескоп ТНА-57, параболический радиотелескоп диаметром 12 метров;'
                            : '- Radio telescope TNA-57, parabolic radio telescope with a diameter of 12 meters;'}
                    </p>
                    <p>
                        {i18n.language === 'kz'
                            ? '- 1 ГГц және 2.8 ГГц жиіліктерінде Күннің радио сәулеленуін тіркеуге арналған аппаратура, Callisto күн радио спектрографы (халықаралық e-Callisto желісінің бөлігі). Callisto күн радио спектрографы Күннің II, III, IV, V типті радио жарқылдарын тіркеуге және жарқыл белсенділігінің геоэффективтілігін болжауға мүмкіндік береді («Орбита» радиополигон, теңіз деңгейінен 2750 м биіктікте);'
                            : i18n.language === 'ru'
                            ? '- Аппаратура для регистрации радиоизлучения Солнца на частотах 1 ГГц и 2.8 ГГц, спектрограф солнечного радиоизлучения Callisto (входит в международную сеть e-Callisto). Спектрограф солнечного радиоизлучения Callisto позволяет регистрировать радиовсплески Солнца II, III, IV, V типов и прогнозировать геоэффективность вспышечной активности (Радиополигон «Орбита», 2750 м над уровнем моря);'
                            : '- Equipment for recording solar radio emission at frequencies of 1 GHz and 2.8 GHz, Callisto solar radio spectrograph (part of the international e-Callisto network). The Callisto solar radio spectrograph allows recording solar radio bursts of types II, III, IV, V and predicting the geo-effectiveness of flare activity (Radio test site "Orbita", 2750 m above sea level);'}
                    </p>
                    <p>
                        {i18n.language === 'kz'
                            ? '- SATI (Spectral Airglow Temperature Imager) оптикалық құралы, ол арқылы мезопауза аймағында гидроксил және молекулалық оттегінің эмиссиясы мен температурасының спектрофотометриялық өлшеулері жүргізіледі;'
                            : i18n.language === 'ru'
                            ? '- Оптический прибор SATI (Spectral Airglow Temperature Imager), с помощью которого ведутся спектрофотометрические измерения температуры, эмиссии гидроксила и молекулярного кислорода в области мезопаузы;'
                            : '- Optical instrument SATI (Spectral Airglow Temperature Imager), which is used for spectrophotometric measurements of temperature, hydroxyl emission, and molecular oxygen in the mesopause region;'}
                    </p>
                    <p>
                        {i18n.language === 'kz'
                            ? '- Ионосфераның толық электрондық мазмұнының өзгеруін зерттеуге арналған стационарлық GNSS қабылдағышы.'
                            : i18n.language === 'ru'
                            ? '- Стационарный GNSS приемник, используемый для изучения вариации полного электронного содержания ионосферы.'
                            : '- Stationary GNSS receiver used for studying the variation of the total electron content of the ionosphere.'}
                    </p>
                </div>
                <div className="experimentalBaseSecondMidRight">
                    <img src={RadioImg} alt="radio-telescope" />
                    {i18n.language === 'kz'
                        ? '«Орбита» радиополигон'
                        : i18n.language === 'ru'
                        ? 'Радиополигон «Орбита»'
                        : 'Radio test site "Orbita"'}
                </div>
            </div>
            <div className="experimentalBaseSecondBtm">
                {i18n.language === 'kz'
                    ? 'Осы аспаптардан алынған деректерді тиісті әлемдік ұқсас станциялар желілерінің деректерімен бірге пайдалану атмосфералық өзгерістерді талдау жұмыстарын, жер шарының кез келген нүктесінде болып жатқан қуатты апатты геофизикалық оқиғаларды жүргізуге мүмкіндік береді.'
                    : i18n.language === 'ru'
                    ? 'Использование данных, полученных на этих приборах, наряду с данными соответствующих мировых сетей аналогичных станций, позволяет выполнять работы по анализу вариаций атмосферы, обусловленных мощными катастрофическими геофизическими событиями, происходящими в любой точке земного шара.'
                    : 'The use of data obtained from these instruments, along with data from relevant global networks of similar stations, allows for the analysis of atmospheric variations caused by powerful catastrophic geophysical events occurring anywhere on the globe.'}
            </div>
        </div>
    );
};

export default ExperimentalBaseSecond;
