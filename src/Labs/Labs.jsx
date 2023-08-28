import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useLocation } from 'react-router-dom';



const Labs = () => {
    const location = useLocation();

    const [lab, setLab] = useState(1);
    const { t } = useTranslation();

    return (
        <div>
                <h2>{t(location.pathname.slice(6))}</h2>
        </div>
    );
}

export default Labs;
