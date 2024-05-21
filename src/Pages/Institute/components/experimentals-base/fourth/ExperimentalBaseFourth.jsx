import './ExperimentalBaseFourth.css';

import { useTranslation } from 'react-i18next';

import GpsImg from 'media/institute/experimental-base/gps.png';
import GpsMapImg from 'media/institute/experimental-base/map.png';

const ExperimentalBaseFourth = () => {
    const { i18n } = useTranslation();

    return (
        <div className="experimentalBaseFourth">
            <p>
                {i18n.language === 'kz'
                    ? '2009 жылдан бастап ғарыш қызметі саласындағы қолданбалы ғылыми зерттеулер бойынша Республикалық бюджет бағдарламасы аясында құрылған 5 жеке және 5 жалға алынған қабылдау станциясынан тұратын GPS желісінің бірінші кезегі құрылып, жұмыс істейді. GPS қабылдағыштарының түрі — Leica GRX1200GGPRO, TurboRogue SNR 8000, TRIMBLE 4000SST, ASHTECH Z18.'
                    : i18n.language === 'ru'
                    ? 'Начиная с 2009 г. создана и действует первая очередь GPS-сети, состоящая из 5-и собственных и 5- арендованных приемных станций непрерывного режима наблюдений, созданная в рамках Республиканской бюджетной программы 002 «Прикладные научные исследования в области космической деятельности». Тип GPS приемников — Leica GRX1200GGPRO, TurboRogue SNR 8000, TRIMBLE 4000SST, ASHTECH Z18.'
                    : 'Since 2009, the first stage of the GPS network has been created and operates, consisting of 5 own and 5 leased receiving stations for continuous observation, created within the framework of the Republican budget program 002 "Applied scientific research in the field of space activities". Types of GPS receivers are Leica GRX1200GGPRO, TurboRogue SNR 8000, TRIMBLE 4000SST, ASHTECH Z18.'}
            </p>
            <div className="experimentalBaseFourthCenter">
                <div className="experimentalBaseFourthCenterImg">
                    <img src={GpsImg} alt="gps-img" />
                    <img src={GpsMapImg} alt="gps-map-img" />
                </div>
                {i18n.language === 'kz'
                    ? 'Жергілікті GPS желісі'
                    : i18n.language === 'ru'
                    ? 'Локальная GPS сеть'
                    : 'Local GPS network'}
            </div>

            <p>
                {i18n.language === 'kz'
                    ? 'GPS қабылдағыштар желісі Алматы болжау полигоны шегінде Сейсмология институтының жерүсті сейсмикалық станциялар желісімен біріктірілген. GPS деректерін бастапқы өңдеу кешенінде GAMIT/GLOBK лицензиялық бағдарламалық кешендерінің заманауи нұсқалары қолданылады. GPS бақылауларының нәтижелерін түсіндіру және көрсету және жер қыртысының ауысу өрістері мен кернеулі күй элементтерінің есептік параметрлерін анықтау үшін бағдарламалар кешені жасалды.'
                    : i18n.language === 'ru'
                    ? 'Сеть GPS приемников совмещена с сетью наземных сейсмостанций Института сейсмологии в пределах Алматинского прогностического полигона. В комплексе первичной обработки данных GPS используются современные версии лицензионных программных комплексов GAMIT/GLOBK. Разработан комплекс программ для интерпретации и отображения результатов GPS-наблюдений и определения расчетных параметров полей перемещений и элементов напряженного состояния земной коры.'
                    : 'The network of GPS receivers is combined with the network of ground-based seismic stations of the Institute of Seismology within the Almaty predictive polygon. The modern versions of the licensed software packages GAMIT/GLOBK are used in the complex of primary processing of GPS data. A set of programs has been developed for interpreting and displaying the results of GPS observations and determining the calculated parameters of displacement fields and elements of the stressed state of the earth’s crust.'}
            </p>
        </div>
    );
};

export default ExperimentalBaseFourth;
