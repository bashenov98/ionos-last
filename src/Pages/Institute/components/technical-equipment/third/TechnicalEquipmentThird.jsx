import React from 'react';
import BplaImg from 'media/institute/technical-equipment/bpla.png';
import './TechnicalEquipmentThird.css';
import { useTranslation } from 'react-i18next';

const TechnicalEquipmentThird = () => {
    const { i18n } = useTranslation();

    return (
        <div className="technicalEquipmentThird">
            <div className="technicalEquipmentThirdLeft">
                <h3>
                    {i18n.language === 'kz'
                        ? 'БПЛА Delair UX 11'
                        : i18n.language === 'ru'
                        ? 'БПЛА Delair UX 11'
                        : 'UAV Delair UX 11'}
                </h3>

                <p>
                    {i18n.language === 'kz'
                        ? 'Қалалық аумақтардың жергілікті учаскелерінде георадиолокациялық зондтау.'
                        : i18n.language === 'ru'
                        ? 'Георадиолокационное зондирование локальных участках городских территорий.'
                        : 'GPR surveying of local areas of urban territories.'}
                </p>

                <div className="technicalEquipmentThirdTxtBox">
                    <p>
                        {i18n.language === 'kz'
                            ? 'БПЛА МҮМКІНДІКТЕРІ'
                            : i18n.language === 'ru'
                            ? 'ВОЗМОЖНОСТИ БПЛА'
                            : 'UAV CAPABILITIES'}
                    </p>
                    {i18n.language === 'kz'
                        ? 'Аэросуреттің ажыратымдылығы 2,0 см/пикселге дейін; Әрбір суретке телеметрия деректері қоса беріледі: орталық нүктенің координаттары, биіктік пен түсіру бұрыштары, курс, еңкейту, жылдамдық және тангаж; Дайындалмаған кішігірім алаңдардан, соның ішінде таулы және тау бөктеріндегі аудандардан ұшу мүмкіндігі; Автоматты және жартылай автоматты ұшыру, ұшу және қону мүмкіндігі; Байланыс жоғалған жағдайда автоматты қайтару жүйесі БПЛА-ның ұшу нүктесіне оралуын қамтамасыз етеді; Жердегі кең ауқымды аэрофототүсірілімді геодезиялық дәлдік класындағы жердегі GNSS кешенімен алып жүру; Көп спектрлі камераны орнату мүмкіндігі'
                        : i18n.language === 'ru'
                        ? 'Разрешение аэрофотоснимка до 2,0 см/пиксел; Каждый снимок сопровождается данными телеметрии: координаты центральной точки, высота и углы съемки, курс, крен, скорость и тангаж; Возможность старта с неподготовленных площадок малого размера, включая горные и предгорные районы; Возможность автоматического и полуавтоматического старта, полета и посадки; При потере связи система автоматического возврата обеспечивает возврат БПЛА на точку старта; Наземное сопровождение крупномасштабной аэрофотосъемки осуществляется наземным GNSS комплексом геодезического класса точности; Возможность дополнительной установки мультиспектральной камеры'
                        : 'Aerial photo resolution up to 2.0 cm/pixel; Each photo is accompanied by telemetry data: coordinates of the central point, height and angles of shooting, course, roll, speed, and pitch; The ability to start from unprepared small areas, including mountainous and foothill areas; The ability for automatic and semi-automatic takeoff, flight, and landing; In case of loss of communication, the automatic return system ensures the UAV returns to the starting point; Ground support for large-scale aerial photography is carried out by a ground-based GNSS complex of geodetic accuracy class; The ability to install a multispectral camera'}
                </div>

                <div className="technicalEquipmentThirdTxtBox">
                    <p>
                        {i18n.language === 'kz'
                            ? 'БПЛА ҚОЛДАНУ САЛАЛАРЫ'
                            : i18n.language === 'ru'
                            ? 'СФЕРЫ ПРИМЕНЕНИЯ БПЛА'
                            : 'UAV APPLICATION AREAS'}
                    </p>
                    {i18n.language === 'kz'
                        ? '1:25 000-нан 1:2 000-ға дейінгі масштабта аэрофототопографиялық түсіру. Екі жиілікті GPS қабылдағышын қолданған кезде 1:500-ге дейінгі масштабта түсіру; 1:25 000-нан 1:2 000-ға дейінгі масштабта жоғары ажыратымдылықтағы ортофотоплан жасау. Екі жиілікті GPS қабылдағышты пайдаланған кезде 1:500-ге дейін; Жер учаскелерінің шекараларын анықтау үшін жер кадастрлық жұмыстары. Сандық жергілікті модельдерді (ЦММ) және сандық рельеф модельдерін (ЦМР) құру; Сандық векторлық карталарды құру, өндірістік объектілерді түгендеу және карталау.'
                        : i18n.language === 'ru'
                        ? 'Аэрофототопографическая съемка в масштабе от 1:25 000 до 1:2 000. При использовании двухчастотного GPS приемника проведение съемки в масштабе до 1:500; Создание ортофотопланов высокого разрешения в масштабе 1:25 000 до 1:2 000. При использовании двухчастотного GPS приемника до 1:500; Земельно-кадастровые работы для определения границ земельных участков. Создание цифровых моделей местности (ЦММ) и цифровых моделей рельефа (ЦМР); Создание цифровых векторных карт, инвентаризация и картирование производственных объектов.'
                        : 'Aerial photo survey at a scale from 1:25 000 to 1:2 000. When using a dual-frequency GPS receiver, surveying at a scale of up to 1:500; Creating high-resolution orthophotoplans at a scale of 1:25 000 to 1:2 000. When using a dual-frequency GPS receiver, up to 1:500; Land cadastral works to determine the boundaries of land plots. Creating digital terrain models (DTM) and digital elevation models (DEM); Creating digital vector maps, inventory, and mapping of industrial facilities.'}
                </div>
            </div>

            <div className="technicalEquipmentThirdRight">
                <img src={BplaImg} alt="bpla" />
            </div>
        </div>
    );
};

export default TechnicalEquipmentThird;
