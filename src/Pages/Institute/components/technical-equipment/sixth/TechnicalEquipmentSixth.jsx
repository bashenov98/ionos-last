import React from 'react';
import './TechnicalEquipmentSixth.css';
import SpectometerImg from 'media/institute/technical-equipment/spectometer.png';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentSixth = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentSixth">
            <div className="technicalEquipmentSixthTop">
                <h3>
                    {i18n.language === 'kz'
                        ? 'Ионосфера станциясы'
                        : i18n.language === 'ru'
                        ? 'Ионосферная станция'
                        : 'Ionosphere Station'}
                </h3>
                <p>
                    {i18n.language === 'kz'
                        ? 'Ионозонд «Парус» ионосфера станциясы ионосфераның жағдайын автоматты және қол режимдерінде тік зондтау әдісімен диагностикалауға арналған, foF2 критикалық жиіліктерін 0.05 МГц дәлдікпен өлшеуді қамтамасыз етеді.'
                        : i18n.language === 'ru'
                        ? 'Ионосферная станция Ионозонд «Парус» предназначен для диагностики состояния ионосферы в автоматическом и ручном режимах методом вертикального зондирования, обеспечивает измерение критических частот foF2 с точностью до 0.05 МГц.'
                        : 'The ionosonde "Parus" ionosphere station is designed to diagnose the state of the ionosphere in automatic and manual modes using the vertical sounding method, providing measurement of critical frequencies foF2 with an accuracy of up to 0.05 MHz.'}
                </p>
            </div>
            <div className="technicalEquipmentSixthMain">
                <div className="technicalEquipmentSixthMainLeft">
                    <h3>
                        {i18n.language === 'kz'
                            ? 'Спектрометр SATI-4 (Spectral Airglow Temperature Imager)'
                            : i18n.language === 'ru'
                            ? 'Спектрометр SATI-4 (Spectral Airglow Temperature Imager)'
                            : 'Spectrometer SATI-4 (Spectral Airglow Temperature Imager)'}
                    </h3>
                    <p>
                        {i18n.language === 'kz'
                            ? 'SATI — бұл спектрометр, ол OH (6-2) гидроксил сызықтарының және O2 (0-1) молекулалық оттегінің жақын инфрақызыл аймағында түнгі аспанның кеңістіктік бөлінген аймақтарынан өздігінен жарықтандыру (эмиссия) спектрлік суреттерін алуға мүмкіндік береді. SATI жарықты тікке орташа 30 +/- 3.5° бұрышпен келетін жарықты тіркейді. Бұл 85 км биіктікте 49 км орташа радиусы және 14 км ені бар көлденең сақинадан келетін OH (6-2) гидроксилінің шығуын бақылауға мүмкіндік береді (немесе 95 км биіктікте 55 км орташа радиусы және 16 км ені бар сақинадан O2 (0-1) молекулалық оттегіні). Құрал Ионосфера институтының «Орбита» радиополигонда теңіз деңгейінен 2730 метр биіктікте орнатылған (43°03’30» с.ш., 76°58’24» ш.б.).'
                            : i18n.language === 'ru'
                            ? 'SATI — это спектрометр, позволяющий получать спектральные изображения собственного свечения (эмиссии) в ближней инфракрасной зоне линий гидроксила OH (6-2) и молекулярного кислорода O2 (0-1) с пространственно разнесённых участков ночного неба. SATI регистрирует свечение, приходящее под средним углом 30 +/- 3.5° к вертикали. Это позволяет наблюдать излучение гидроксила OH (6-2) приходящее с горизонтального, расположенного на высоте 85 км кольца со средним радиусом 49 км и шириной 14 км (или со средним радиусом 55 км и шириной 16 км на высоте 95 км для молекулярного кислорода O2 (0-1)). Инструмент установлен на радиополигоне «Орбита» Института Ионосферы на высоте 2730 метров над уровнем моря (43°03’30» с. ш., 76°58’24» в. д.).'
                            : 'SATI is a spectrometer that allows obtaining spectral images of airglow emission in the near-infrared range of hydroxyl OH (6-2) and molecular oxygen O2 (0-1) lines from spatially separated regions of the night sky. SATI registers the emission coming at an average angle of 30 +/- 3.5° to the vertical. This allows observing the emission of hydroxyl OH (6-2) coming from a horizontal ring located at an altitude of 85 km with an average radius of 49 km and a width of 14 km (or with an average radius of 55 km and a width of 16 km at an altitude of 95 km for molecular oxygen O2 (0-1)). The instrument is installed at the "Orbita" radio test site of the Institute of Ionosphere at an altitude of 2730 meters above sea level (43°03’30" N, 76°58’24" E).'}
                    </p>
                </div>
                <img src={SpectometerImg} alt="spectometer" />
            </div>
        </div>
    );
};

export default TechnicalEquipmentSixth;
