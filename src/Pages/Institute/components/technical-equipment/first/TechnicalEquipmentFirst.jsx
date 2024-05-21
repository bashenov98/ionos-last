import React from 'react';
import './TechnicalEquipmentFirst.css';
import SchemeImg from 'media/institute/technical-equipment/scheme.png';
import AntBlockImg from 'media/institute/technical-equipment/ant-block.png';
import AntBlockSecondImg from 'media/institute/technical-equipment/ant-block-2.png';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentFirst = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentFirst">
            <h3>
                {i18n.language === 'kz'
                    ? 'ГеорадарОКО-2, АБ-400; Око-2, АБ-90'
                    : i18n.language === 'ru'
                    ? 'ГеорадарОКО-2, АБ-400; Око-2, АБ-90'
                    : 'GPR OKO-2, AB-400; Oko-2, AB-90'}
            </h3>
            <p>
                {i18n.language === 'kz'
                    ? 'Георадардың жұмыс принципі кең жолақты наносекундтық импульстарды шығаруға, ортаның шекараларынан шағылысқан сигналдарды қабылдауға, қабылданған сигналдарды стробоскопиялық өңдеуге және шағылысқан импульстар арасындағы уақыт аралықтарын одан әрі өлшеуге негізделген.'
                    : i18n.language === 'ru'
                    ? 'Принцип действия георадара основан на излучении сверхширокополосных наносекундных импульсов, приеме сигналов, отраженных от границ раздела сред, стробоскопической обработке принятых сигналов и последующим измерением временных интервалов между отраженными импульсами.'
                    : 'The principle of operation of the GPR is based on the emission of ultra-wideband nanosecond pulses, the reception of signals reflected from medium boundaries, stroboscopic processing of received signals, and subsequent measurement of time intervals between reflected pulses.'}
            </p>
            <div className="technicalEquipmentFirstCenter">
                <img src={SchemeImg} alt="scheme-img" />
                <div className="technicalEquipmentFirstCenterSmall">
                    <img src={AntBlockImg} alt="ant-block" />
                    {i18n.language === 'kz'
                        ? 'Антенна блогы АБ-400. Зондтау тереңдігі 5 метр'
                        : i18n.language === 'ru'
                        ? 'Антенный блок АБ-400. Глубина зондирования 5 метров'
                        : 'Antenna block AB-400. Sounding depth 5 meters'}
                </div>
                <div className="technicalEquipmentFirstCenterSmall">
                    {i18n.language === 'kz'
                        ? 'Антенна блогы АБ-90. Зондтау тереңдігі 16 метр'
                        : i18n.language === 'ru'
                        ? 'Антенный блок АБ-90. Глубина зондирования 16 метров'
                        : 'Antenna block AB-90. Sounding depth 16 meters'}
                    <img src={AntBlockSecondImg} alt="ant-block" />
                </div>
            </div>

            <h3>
                {i18n.language === 'kz'
                    ? 'Георадар жинағы'
                    : i18n.language === 'ru'
                    ? 'Комплектация георадара'
                    : 'GPR Configuration'}
            </h3>
            <p>
                {i18n.language === 'kz'
                    ? 'Георадар зерттелетін орта беті бойымен жылжыған кезде монитор экранына сигналдар жиынтығы (радарограмма немесе профиль) шығарылады, соның көмегімен төсеніш (негізгі) топырақтардың қалыңдығын, орналасқан жерін, жату тереңдігі мен объектілердің ұзындығын анықтауға болады.'
                    : i18n.language === 'ru'
                    ? 'При перемещении георадара по поверхности исследуемой среды на экран монитора выводится совокупность сигналов (радарограмма или профиль), по которому можно определить толщину подстилающих (коренных) грунтов, местонахождение, глубину залегания и протяженность объектов.'
                    : 'When the GPR is moved over the surface of the investigated medium, a set of signals (radargram or profile) is displayed on the monitor screen, which can be used to determine the thickness of the underlying (bedrock) soils, the location, depth, and extent of the objects.'}
            </p>
        </div>
    );
};

export default TechnicalEquipmentFirst;
