import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useLocation } from 'react-router-dom';



const Labs = () => {
    const location = useLocation();

    const [lab, setLab] = useState(1);
    const { t } = useTranslation();

    return (
        <div className='lab'>
                <h1 className='header'>{t(location.pathname.slice(11))}</h1>
                <div>
                    <div className='labEmployees'>
                        

                    </div>
                </div>
        </div>
    );
}

export default Labs;
