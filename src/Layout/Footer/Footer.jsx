import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n';

import './Footer.css';

export const Footer = () => {
    const { i18n } = useTranslation();

    useEffect(() => {
        console.log(i18n.language);
    }, [i18n.language]);

    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <p className="footerText">
                    {i18n.language === 'kz'
                        ? 'Мекен-жайы: 050020, Қазақстан Республикасы, Алматы қаласы, Каменское платосы, «Ионосфера» бағбандық серіктестігі № 117'
                        : i18n.language === 'ru'
                        ? 'Адрес: 050020, Республика Казахстан, г.Алматы,Каменское плато, Садоводческое товарищество «Ионосфера» д.117'
                        : 'Address: 050020, Republic of Kazakhstan, Almaty, Kamenskoye Plateau, Gardening Partnership "Ionosphere" no. 117'}
                </p>
                <p className="footerText">
                    {i18n.language === 'kz'
                        ? 'Жұмыс уақыты: дүйсенбі-жұма 09:00-ден 17:00-ге дейін, үзіліс 13:00-ден 13:30-ға дейін'
                        : i18n.language === 'ru'
                        ? 'Время работы: пн-пт с 09:00 до 17:00, перерыв с 13:00 до 13:30'
                        : 'Opening hours: Mon-Fri from 09:00 to 17:00, break from 13:00 to 13:30'}
                </p>
            </div>
            <div className="footerBorder" />
            <div className="footerCenter">
                <p className="footerText">
                    {i18n.language === 'kz'
                        ? 'Телефон: 8(727) 380-30-54'
                        : i18n.language === 'ru'
                        ? 'Телефон: 8(727) 380-30-54'
                        : 'Phone: 8(727) 380-30-54'}
                </p>
                <p className="footerText">
                    {i18n.language === 'kz'
                        ? 'Факс: 8(727) 380-30-53'
                        : i18n.language === 'ru'
                        ? 'Факс: 8(727) 380-30-53'
                        : 'Fax: 8(727) 380-30-53'}
                </p>
            </div>
            <div className="footerBorder" />
            <div className="footerRight">
                <p className="footerText">E-mail: ionos@ionos.kz</p>
                <p className="footerText">admion1@mail.ru</p>
            </div>
        </div>
    );
};
