import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation } from 'react-router-dom';



const Patents = () => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div>
                <h2>{t(location.pathname.slice(13))}</h2>
        </div>
    );
}

export default Patents;
