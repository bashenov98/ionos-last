import React from 'react';
import StationImg from '../../../../../media/institute/experimental-base/station.png';
import './ExperimentalBaseThird.css';
import { useTranslation } from 'react-i18next';

const ExperimentalBaseThird = () => {
    const { i18n } = useTranslation();

    return (
        <div className="experimentalBaseThird">
            <div className="experimentalBaseThirdMain">
                <div className="experimentalBaseThirdLeft">
                    <p>
                        {i18n.language === 'kz'
                            ? 'Тянь-Шань жоғары таулы ғылыми станциясында (ТШВНС, теңіз деңгейінен 3340 м биіктікте) келесі қондырғылар жұмыс істейді:'
                            : i18n.language === 'ru'
                            ? 'На Тянь-Шанской высокогорной научной станции (ТШВНС, 3340 м над уровнем моря) работают следующие установки:'
                            : 'At the Tien Shan High-Mountain Scientific Station (TSHMSS, 3340 m above sea level), the following installations are operating:'}
                    </p>

                    <p>
                        {i18n.language === 'kz'
                            ? 'ТШВНС «Космостанция»'
                            : i18n.language === 'ru'
                            ? 'ТШВНС «Космостанция»'
                            : 'TSHMSS "Cosmostation"'}
                    </p>

                    <p>
                        {i18n.language === 'kz'
                            ? 'Нейтронды супермонитор 18NM-64 (теңіз деңгейінен 3340 м, геомагниттік қатаңдық R=6,7 ГВ). 1973 жылдан бастап үздіксіз жұмыс істейді. Нейтрондық мониторлы институттың ғарыштық сәулелер станциясы (халықаралық белгі ААТВ) әлемдік станциялар желісінде маңызды болып табылады. Эксперименттік деректер институттың веб-сайтында нақты уақыт режимінде ұсынылады. Станция NMDB (www. nmdb.eu) халықаралық ғарыштық сәулелер станциялары желісіне кіреді, онда ғарыштық сәулелердің қарқындылығы мен атмосфералық қысым туралы деректер минут сайын жіберіледі. Нейтрондық монитордағы өлшеулер, бағдарламалық қамтамасыз ету, деректерді өңдеу әдістері және аппараттық құралдар үнемі жаңартылып, халықаралық стандарттарға сәйкес келеді;'
                            : i18n.language === 'ru'
                            ? 'Нейтронный супермонитор 18NM-64 (3340 м над уровнем моря, жесткость геомагнитного обрезания R=6,7 ГВ). Непрерывно функционирует с 1973 г. Станция космических лучей института (международное обозначение ААТВ) с нейтронным монитором является одной из ключевых в мировой сети станций. Экспериментальные данные представляются в режиме реального времени на сайте института. Станция входит в международную сеть станций космических лучей NMDB (www. nmdb.eu), куда ежеминутно отправляются данные интенсивности космических лучей и атмосферного давления. Измерения на нейтронном мониторе, программное обеспечение, методики обработки данных и аппаратные средства постоянно модернизируются и соответствуют международным стандартам;'
                            : "Neutron supermonitor 18NM-64 (3340 m above sea level, geomagnetic rigidity R=6.7 GV). It has been operating continuously since 1973. The institute's cosmic ray station (international designation AATB) with a neutron monitor is one of the key stations in the world network. Experimental data are presented in real time on the institute's website. The station is part of the international network of cosmic ray stations NMDB (www.nmdb.eu), where data on the intensity of cosmic rays and atmospheric pressure are sent every minute. Measurements on the neutron monitor, software, data processing methods, and hardware are constantly updated and meet international standards;"}
                    </p>

                    <p>
                        {i18n.language === 'kz'
                            ? 'Атмосфералық қысымды өлшеу датчигі БРС-1 (теңіз деңгейінен 3340 м биіктікте);'
                            : i18n.language === 'ru'
                            ? 'Датчик измерения атмосферного давления БРС-1 (3340 м над уровнем моря);'
                            : 'Atmospheric pressure sensor BRS-1 (3340 m above sea level);'}
                    </p>
                </div>
                <div className="experimentalBaseThirdRight">
                    <img src={StationImg} alt="station" />
                    {i18n.language === 'kz'
                        ? 'Тянь-Шань жоғары таулы ғылыми станциясы'
                        : i18n.language === 'ru'
                        ? 'Тянь-Шанская высокогорная научная станция'
                        : 'Tien Shan High-Mountain Scientific Station'}
                </div>
            </div>

            <div className="experimentalBaseThirdBtm">
                {i18n.language === 'kz'
                    ? 'Жер сілкіністерінің дайындық процестерін зерттеуге байланысты тапсырмаларды шешу үшін Верный және Кемин апатты жер сілкіністерінің ошақтарының жанында көп параметрлі эксперименттік кешен жұмыс істейді (жетекші. ф.-м.ғ.к. Салихов Н.М.):'
                    : i18n.language === 'ru'
                    ? 'Для решения задач, связанных с изучением процессов подготовки землетрясений, вблизи очагов Верненского и Кеминского катастрофических землетрясений работает многопараметрический экспериментальный комплекс (рук. к.ф.-м.н. Салихов Н.М.):'
                    : 'To solve the problems related to studying the processes of earthquake preparation, a multiparametric experimental complex is operating near the epicenters of the catastrophic Verny and Kemin earthquakes (led by Ph.D. N.M. Salikhov):'}
            </div>
        </div>
    );
};

export default ExperimentalBaseThird;
