import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import FirstImg from 'media/services/x-component.png';
import SecondImg from 'media/services/y-component.png';
import ThirdImg from 'media/services/z-component.png';
import FourthImg from 'media/services/k-indexes.png';
import FifthImg from 'media/services/full-field.png';
import './Services.css';

const GeomagneticDimensions = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();

    return (
        <div className="geomagneticDimensions">
            <h2>{t(location.pathname.slice(10))}</h2>

            <div className="geomagneticDimensionsMain">
                <div className="geomagneticDimensionsMainImages">
                    <img src={FirstImg} alt="geo-img" />
                    <img src={SecondImg} alt="geo-img" />
                    <img src={ThirdImg} alt="geo-img" />
                    <img src={FourthImg} alt="geo-img" />
                    <img src={FifthImg} alt="geo-img" />
                </div>

                <h3>
                    {i18n.language === 'kz'
                        ? '«Алма-Ата» обсерваториясы туралы ақпарат'
                        : i18n.language === 'ru'
                        ? 'Информация об обсерватории «Алма-Ата»'
                        : 'Information about the "Alma-Ata" Observatory'}
                </h3>
                <div className="geomagneticDimensionsMainTxt">
                    <p>
                        {i18n.language === 'kz'
                            ? 'Орналасуы: Тянь-Шань тауларының етегінде, Алматы қаласынан шамамен 10 км жерде, теңіз деңгейінен 1300 м биіктікте орналасқан, географиялық координаттары [43,10ºN; 76,57ºE], обсерваторияның геомагниттік координаттары [34,3ºN; 152,7ºE].'
                            : i18n.language === 'ru'
                            ? 'Расположение: находится на высоте 1300м над уровнем моря, в предгорьях Тянь-Шаня, примерно в 10 км от г.Алматы, географические координаты [43,10ºN; 76,57ºE], геомагнитные координаты обсерватории [34,3ºN; 152,7ºE].'
                            : 'Location: it is located at an altitude of 1300m above sea level, in the foothills of the Tien Shan, about 10 km from Almaty, geographic coordinates [43.10ºN; 76.57ºE], geomagnetic coordinates of the observatory [34.3ºN; 152.7ºE].'}
                    </p>
                    <h4>
                        {i18n.language === 'kz'
                            ? 'Функциялар: геомагниттік өрісті үздіксіз бақылау.'
                            : i18n.language === 'ru'
                            ? 'Функции: непрерывный мониторинг геомагнитного поля.'
                            : 'Functions: continuous monitoring of the geomagnetic field.'}
                    </h4>
                    <p>
                        {i18n.language === 'kz'
                            ? 'Пайдаланылатын жабдықтың түрі: феррозонд магнитометрі LEMI-008, портативті бір компонентті магнитометр LEMI-203, процессорлық оверхаузерлік сенсор POS-1. Бұл жабдық заманауи халықаралық стандарттарға сәйкес келеді. 2005 жылдың соңында Геомагниттік обсерватория «Алма-Ата» халықаралық INTERMAGNET ұйымының сапа сертификатын алды.'
                            : i18n.language === 'ru'
                            ? 'Тип используемой аппаратуры: феррозондовый магнитометр LEMI-008, портативный однокомпонентный магнитометр LEMI-203, процессорный оверхаузеровский датчик POS-1. Данная аппаратура соответствует современным международным стандартам. В конце 2005 г Геомагнитная обсерватория «Алма-Ата» получила сертификат качества Международной организации INTERMAGNET.'
                            : 'Type of equipment used: ferroprobe magnetometer LEMI-008, portable single-component magnetometer LEMI-203, processor Overhauser sensor POS-1. This equipment meets modern international standards. At the end of 2005, the "Alma-Ata" Geomagnetic Observatory received a quality certificate from the international organization INTERMAGNET.'}
                    </p>
                    <h4>
                        {i18n.language === 'kz'
                            ? 'Бақыланатын шамалар және олардың өлшем бірліктері:'
                            : i18n.language === 'ru'
                            ? 'Наблюдаемые величины и их размерность:'
                            : 'Observed quantities and their units:'}
                    </h4>
                    <p>
                        {i18n.language === 'kz'
                            ? 'Геомагниттік өріс векторының үш компоненті: X (географиялық солтүстікке бағытталған), Y (шығысқа бағытталған, X осіне перпендикуляр) және Z (жоғары қарай бағытталған) өлшем бірлігі – нТл; вектор өрісінің амплитудасы F – өлшем бірлігі нТл. Өлшеулер INTERMAGNET нұсқаулығына және стандартына сәйкес жүргізіледі.'
                            : i18n.language === 'ru'
                            ? 'Три составляющие вектора геомагнитного поля: X (направлена на географический север), Y (направлена на восток, перпендикулярно оси X) и Z (направлена вверх) размерность – нТл; амплитуда векторного поля F – размерность нТл. Измерения проводятся в соответствие с Инструкцией и стандартом INTERMAGNET.'
                            : 'Three components of the geomagnetic field vector: X (directed to the geographic north), Y (directed to the east, perpendicular to the X-axis) and Z (directed upwards) dimension - nT; the amplitude of the vector field F - dimension nT. Measurements are carried out in accordance with the INTERMAGNET Instruction and standard.'}
                    </p>
                    <h4>
                        {i18n.language === 'kz'
                            ? 'Өлшеу жиілігі:'
                            : i18n.language === 'ru'
                            ? 'Частота измерений:'
                            : 'Measurement frequency:'}
                    </h4>
                    <p>
                        {i18n.language === 'kz'
                            ? 'Геомагниттік өрістің XYZ компоненттерінің өзгермелі өлшемдері 1 с жиілікпен жүргізіледі, F өлшемдері – 5 с жиілікпен, секундтық деректерден минуттық XYZF файлдары жасалады (деректер нақты уақыт режимінде жасалады), геомагниттік өрістің абсолюттік өлшемдері аптасына екі-үш рет жүргізіледі.'
                            : i18n.language === 'ru'
                            ? 'Вариационные измерения XYZ-компонент геомагнитного поля производятся с частотой 1с., измерения F – с частотой 5с., из секундных данных формируются минутные файлы XYZF (данные формируются в реальном масштабе времени), абсолютные измерения геомагнитного поля производятся два-три раза в неделю.'
                            : 'Variation measurements of the XYZ components of the geomagnetic field are carried out with a frequency of 1 s., measurements of F - with a frequency of 5 s., minute XYZF files are formed from second data (data is formed in real time), absolute measurements of the geomagnetic field are carried out two to three times a week.'}
                    </p>
                    <h4>
                        {i18n.language === 'kz'
                            ? 'Деректерді беру арналарының түрлері:'
                            : i18n.language === 'ru'
                            ? 'Типы каналов передачи данных:'
                            : 'Types of data transmission channels:'}
                    </h4>
                    <p>
                        {i18n.language === 'kz'
                            ? 'Нақты уақыт режимінде минуттық XYZF деректері «Алма-Ата» обсерваториясының http://geomag.ionos.kz сайтында көрсетілген және күн сайын стандартты форматта деректер алмасу үшін Эдинбургтегі (Англия) INTERMAGNET желісінің Дүниежүзілік деректер орталығына Интернет арқылы жіберіледі.'
                            : i18n.language === 'ru'
                            ? 'Минутные данные XYZF в реальном масштабе времени представлены на сайте обсерватории «Алма-Ата» http://geomag.ionos.kz и ежесуточно в стандартном формате передаются для взаимного обмена в Мировой центр данных сети INTERMAGNET, в Эдинбург (Англия) через Интернет.'
                            : 'Minute XYZF data in real time is presented on the "Alma-Ata" Observatory website http://geomag.ionos.kz and daily in standard format are transmitted for mutual exchange to the World Data Center of the INTERMAGNET network in Edinburgh (England) via the Internet.'}
                    </p>
                    <h4>
                        {i18n.language === 'kz'
                            ? 'Басқа пайдаланушылардың алынған ақпаратқа қол жетімділігі:'
                            : i18n.language === 'ru'
                            ? 'Доступ других пользователей к получаемой информации:'
                            : 'Access of other users to the received information:'}
                    </h4>
                    <p>
                        {i18n.language === 'kz'
                            ? 'INTERMAGNET сайтында www.intermagnet.org 2004 жылдан бастап Жердің магнит өрісінің өзгермелі деректері (XYZF компоненттері) сұраныс бойынша беріледі. Тікелей «Алма-Ата» геомагниттік обсерваториясында 1964 жылдан 2003 жылға дейінгі магнит өрісінің жағдайы туралы деректер (HDZF вариацияларының орташа сағаттық мәндері), 2003 жылдан қазіргі уақытқа дейінгі секундтық және минуттық вариациялық деректер XYZF, сұраныс бойынша беріледі. Ионосфера институтының сайтында (ionos.kz) 2003 жылдан қазіргі уақытқа дейінгі минуттық және сағаттық деректер XYZF және геомагниттік белсенділіктің k-индекстерінің мәндері ұсынылған, қол жетімді.'
                            : i18n.language === 'ru'
                            ? 'На сайте INTERMAGNET www.intermagnet.org представлены минутные данные вариаций магнитного поля Земли (XYZF-компоненты) с 2004 года, доступ по запросу. Непосредственно в геомагнитной обсерватории «Алма-Ата» имеются данные по состоянию магнитного поля, начиная с 1964г. по 2003г. (среднечасовые значения вариаций HDZF), с 2003г. по настоящее время секундные и минутные вариационные данные XYZF, доступ по запросу. На сайте Института ионосферы (ionos.kz) представлены минутные и часовые данные XYZF и значения k-индексов геомагнитной активности за период с 2003г. по настоящее время, доступ свободный.'
                            : 'The INTERMAGNET website www.intermagnet.org presents minute data on the variations of the Earth\'s magnetic field (XYZF components) since 2004, available upon request. Directly at the "Alma-Ata" geomagnetic observatory there are data on the state of the magnetic field, starting from 1964 to 2003 (average hourly values of HDZF variations), from 2003 to the present, second and minute variation data XYZF, available upon request. On the website of the Institute of Ionosphere (ionos.kz) minute and hourly data XYZF and values of k-indices of geomagnetic activity for the period from 2003 to the present are presented, access is free.'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GeomagneticDimensions;
