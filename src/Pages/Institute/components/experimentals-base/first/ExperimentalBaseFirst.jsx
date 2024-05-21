import './ExperimentalBaseFirst.css';

import { useTranslation } from 'react-i18next';

import ObservatoryImg from '../../../../../media/institute/experimental-base/observatory.png';

const ExperimentalBaseFirst = () => {
    const { i18n } = useTranslation();
    return (
        <div className="experimentalBaseFirstMain">
            <p>
                {i18n.language === 'kz'
                    ? 'Ионосфера институтының дамыған және заманауи ғылыми-зерттеу инфрақұрылымы бар, оның ішінде биік таулы ғарыштық сәулелер станциясы, «Орбита» радиостанция полигоны, геомагниттік обсерватория және жергілікті GPS желісі (CORS network)::'
                    : i18n.language === 'ru'
                    ? 'Институт ионосферы располагает развитой и современной научно-исследовательской инфраструктурой, включающей высокогорную станцию космических лучей, радиополигон «Орбита», геомагнитную обсерваторию, локальную GPS сеть (CORS network):'
                    : 'The Institute of Ionosphere has a developed and modern research infrastructure, including a high-mountain cosmic ray station, the Orbita radio test site, a geomagnetic observatory, and a local GPS network (CORS network):'}
            </p>

            <div className="experimentalBaseFirstMid">
                <div className="experimentalBaseFirstMidLeft">
                    <img src={ObservatoryImg} alt="observatory" />
                    {i18n.language === 'kz'
                        ? '«Алма-Ата» геомагниттік обсерваториясы'
                        : i18n.language === 'ru'
                        ? 'Геомагнитная обсерватория «Алма-Ата»'
                        : 'Geomagnetic observatory "Alma-Ata"'}
                </div>

                <div className="experimentalBaseFirstMidRight">
                    <p>
                        {i18n.language === 'kz'
                            ? 'Геомагниттік обсерватория келесі жабдықты пайдаланады: флюсгейт магнитометр LEMI-008; портативті бір компонентті магнитометр LEMI-203; POS-1 процессорының қайта өңдеу сенсоры.'
                            : i18n.language === 'ru'
                            ? 'В геомагнитной обсерватории используется оборудование: феррозондовый    магнитометр LEMI-008; портативный однокомпонентный магнитометр LEMI-203; процессорный оверхаузеровский датчик POS-1.'
                            : 'The geomagnetic observatory uses the following equipment: fluxgate magnetometer LEMI-008; portable single-component magnetometer LEMI-203; processor overhauser sensor POS-1.'}
                    </p>
                    <p style={{ fontStyle: 'italic' }}>
                        {i18n.language === 'kz'
                            ? '2005 жылдың соңында Алматы геомагниттік обсерваториясы INTERMAGNET халықаралық ұйымының сапа сертификатын алды.'
                            : i18n.language === 'ru'
                            ? 'В конце 2005 г Геомагнитная обсерватория «Алма-Ата» получила сертификат качества Международной организации INTERMAGNET.'
                            : 'At the end of 2005, the Alma-Ata Geomagnetic Observatory received a quality certificate from the International Organization INTERMAGNET.'}
                    </p>
                </div>
            </div>

            <div className="experimentalBaseFirstBottom">
                {i18n.language === 'kz'
                    ? 'Алма-Ата геомагниттік обсерваториясы теңіз деңгейінен 1300 м биіктікте, Тянь-Шань тау етегінде, Алматыдан шамамен 10 км жерде орналасқан, географиялық координаттары [43,10ºС; 76,57ºE], обсерваторияның геомагниттік координаттары [34,3ºС.; 152,7ºE]. Обсерватория геомагниттік өрістің үздіксіз мониторингін жүзеге асырады: геомагниттік өріс векторының X, Y, Z құраушылары, векторлық өрістің амплитудасы F. Өлшеулер Нұсқаулыққа және INTERMAGNET стандартына сәйкес жүргізіледі.'
                    : i18n.language === 'ru'
                    ? 'Геомагнитная обсерватория «Алма-Ата» расположена на высоте 1300м над уровнем моря, в предгорьях Тянь-Шаня, примерно в 10 км от г. Алматы, географические координаты [43,10ºN; 76,57ºE], геомагнитные координаты обсерватории [34,3ºN; 152,7ºE]. Обсерватория осуществляет непрерывный мониторинг геомагнитного поля: X, Y, Z компонент вектора геомагнитного поля, амплитуды векторного поля F. Измерения проводятся в соответствие с Инструкцией и стандартом INTERMAGNET.'
                    : 'The Alma-Ata geomagnetic observatory is located at an altitude of 1300m above sea level, in the foothills of the Tien Shan, approximately 10 km from Almaty, geographical coordinates [43.10ºN; 76.57ºE], geomagnetic coordinates of the observatory [34.3ºN; 152.7ºE]. The observatory carries out continuous monitoring of the geomagnetic field: X, Y, Z components of the geomagnetic field vector, amplitude of the vector field F. Measurements are carried out in accordance with the Instructions and the INTERMAGNET standard.'}
            </div>
        </div>
    );
};

export default ExperimentalBaseFirst;
