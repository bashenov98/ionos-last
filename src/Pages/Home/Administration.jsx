import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import dir from '../../media/admins/dir.png';
import zamdir from '../../media/admins/zamdir.png';
import zamdirOV from '../../media/admins/zamdir_ov.png';
import secretary from '../../media/admins/secretary.png';

import './Administration.css';

export const Administration = () => {
    const { t } = useTranslation();
    

    const administration = [
        {
            id: 1,
            lastName: "НУРАКЫНОВ",
            name: "СЕРИК",
            middleName: "МАРАТОВИЧ",
            position: "Директор",
            img: dir
        },
        {
            id: 2,
            lastName: "ИСКАКОВ",
            name: "БЕРИК",
            middleName: "АМАНГЕЛЬДЫЕВИЧ",
            position: "Заместитель директора по НИР",
            img: zamdir
        },
        {
            id: 3,
            lastName: "КУДАЙБЕРГЕНОВ",
            name: "МУРАТБЕК",
            middleName: "КАСИМБЕКОВИЧ",
            position: "Заместитель директора по ОВ",
            img: zamdirOV
        },
        {
            id: 4,
            lastName: "ИСКАКОВА",
            name: "ГУЛЬНАРА",
            middleName: "",
            position: "Ученый секретарь",
            img: secretary
        }
    ];

    return (
        <div className='administration'>
            <div className='administrationHeader'>
                <h1 className='header'>{t("adminsheader")}</h1>
            </div>
            <div className='administrationList'>
                {administration.map((admin, index) => (
                    <div className='administrationItem' key={index}>
                        <img className='administrationItemImg' src={admin.img} />
                        <h4 className='administrationItemName'>{`${admin.lastName} ${admin.name} ${admin.middleName} `}</h4>
                        <p className='administrationItemPosition'>{admin.position}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}