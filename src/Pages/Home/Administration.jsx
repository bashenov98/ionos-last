import React from 'react';
import { useTranslation } from 'react-i18next';
import dir from '../../media/admins/2.png';
import zamdir from '../../media/admins/4.png';
import zamdirOV from '../../media/admins/3.png';
import secretary from '../../media/admins/16.png';
import './Administration.css';
import { Link } from 'react-router-dom';

export const Administration = () => {
    const { t } = useTranslation();

    const administration = [
        { id: 3, img: dir },
        { id: 6, img: zamdir },
        { id: 59, img: zamdirOV },
        { id: 7, img: secretary },
    ];

    return (
        <div className="administration">
            <div className="administrationHeader">
                <h1 className="administrationHeaderText">{t('adminsheader')}</h1>
            </div>
            <div className="administrationList">
                {administration.map((admin) => (
                    <div className="administrationItem" key={admin.id}>
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
