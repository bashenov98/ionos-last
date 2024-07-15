import React from 'react';
import { useTranslation } from 'react-i18next';
import dir from '../../media/admins/2.png';
import zamdir from '../../media/admins/4.png';
import zamdirOV from '../../media/admins/3.png';
import secretary from '../../media/admins/16.png';
import './Administration.css';
import { Link } from 'react-router-dom';

import i18n from '../../../i18n';

export const Administration = () => {
    const { t } = useTranslation();

    const administration = [
        { id: 3, img: dir, id_kaz: 4, id_en: 1 },
        { id: 5, img: zamdir, id_kaz: 6, id_en: 2 },
        { id: 11, img: zamdirOV, id_kaz: 12, id_en: 10 },
        { id: 14, img: secretary, id_kaz: 15, id_en: 13 },
    ];

    return (
        <div className="administration">
            <div className="administrationHeader">
                <h1 className="administrationHeaderText">{t('adminsheader')}</h1>
            </div>
            <div className="administrationList">
                {administration.map((admin) => (
                    <div className="administrationItem" key={i18n.language === 'kz' ? admin.id_kaz : i18n.language === 'ru' ? admin.id : admin.id_en}>
                        <div className="administrationItemImgDiv">
                            <img
                                style={{
                                    objectPosition: admin.id === 59 ? '100% 40%' : '100% 15%',
                                }}
                                className="administrationItemImg"
                                src={admin.img}
                                alt="admin"
                            />
                        </div>
                        <div className="administrationItemDiv">
                            <Link
                                style={{ textDecoration: 'none', color: 'inherit' }}
                                to={`/institute/staff/${admin.id}`}>
                                <h4 className="administrationItemName">
                                    {`${t(`admin.${admin.id}.lastName`)} ${t(
                                        `admin.${admin.id}.name`,
                                    )} ${t(`admin.${admin.id}.middleName`)}`}
                                </h4>
                            </Link>
                            <p className="administrationItemPosition">
                                {t(`admin.${admin.id}.position`)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
