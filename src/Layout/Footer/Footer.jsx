import React, { useEffect } from "react";

import './Footer.css';

export const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footerLeft">
                <p className="footerText">Адрес: 050020, Республика Казахстан, г.Алматы,Каменское плато, Садоводческое товарищество «Ионосфера» д.117</p>
                <p className="footerText">Время работы: пн-пт с 09:00 до 17:00, перерыв с 13:00 до 13:30</p>
            </div>
            <div className="footerBorder"/>
            <div className="footerCenter">
                <p className="footerText">Телефон: 8(727) 380-30-54</p>
                <p className="footerText">Факс: 8(727) 380-30-53</p>
            </div>
            <div className="footerBorder"/>
            <div className="footerRight">
                <p className="footerText">E-mail: ionos@ionos.kz</p>
                <p className="footerText">admion1@mail.ru</p>
            </div>
        </div>
    );
}