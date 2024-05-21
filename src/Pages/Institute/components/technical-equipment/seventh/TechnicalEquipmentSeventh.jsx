import React from 'react';
import './TechnicalEquipmentSeventh.css';
import LeftImg from 'media/institute/technical-equipment/e-callisto.png';
import RightImg from 'media/institute/technical-equipment/freq.png';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentSeventh = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentSeventh">
            <h3>
                {i18n.language === 'kz'
                    ? 'e-Callisto радиоспектрометрі'
                    : i18n.language === 'ru'
                    ? 'Радиоспектрометр e-Callisto'
                    : 'e-Callisto Radio Spectrometer'}
            </h3>
            <div className="technicalEquipmentSeventhMain">
                <img src={LeftImg} alt="left-img" />
                <p>
                    {i18n.language === 'kz'
                        ? 'Құрал Ионосфера институтының «Орбита» радиополигонда теңіз деңгейінен 2730 метр биіктікте орнатылған (43°03’30» с.ш., 76°58’24» ш.б.).'
                        : i18n.language === 'ru'
                        ? 'Инструмент установлен на радиополигоне «Орбита» Института Ионосферы на высоте 2730 метров над уровнем моря (43°03’30» с. ш., 76°58’24» в. д.).'
                        : 'The instrument is installed at the "Orbita" radio test site of the Institute of Ionosphere at an altitude of 2730 meters above sea level (43°03’30" N, 76°58’24" E).'}
                </p>
                <img src={RightImg} alt="right-img" />
            </div>
            <p>
                {i18n.language === 'kz'
                    ? 'БҰҰ-ның «Халықаралық гелиофизикалық жыл» (IHY2007) және «Халықаралық ғарыштық ауа-райы бастамасы» (ISWI) халықаралық ғылыми ынтымақтастық бағдарламалары аясында орнатылған спектрометрлердің халықаралық желісіне кіретін e-Callisto күн радио шығару спектрометрі.'
                    : i18n.language === 'ru'
                    ? 'Спектрометр солнечного радиоизлучения e-Callisto, входящий в международную сеть спектрометров, установленных в рамках программ международного научного сотрудничества ООН «International Heliophysical Year» (IHY2007) и «International Space Weather Initiative» (ISWI).'
                    : 'The e-Callisto solar radio emission spectrometer, part of the international network of spectrometers installed within the framework of the UN programs "International Heliophysical Year" (IHY2007) and "International Space Weather Initiative" (ISWI).'}
            </p>
        </div>
    );
};

export default TechnicalEquipmentSeventh;
