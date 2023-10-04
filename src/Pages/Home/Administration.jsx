import React, { useEffect, useState } from 'react';
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
        {
            id: 3,
            lastName: "НУРАКЫНОВ",
            name: "СЕРИК",
            middleName: "МАРАТОВИЧ",
            position: "Директор",
            img: dir
        },
        {
            id: 6,
            lastName: "ИСКАКОВ",
            name: "БЕРИК",
            middleName: "АМАНГЕЛЬДЫЕВИЧ",
            position: "Заместитель директора по НИР",
            img: zamdir
        },
        {
            id: 59,
            lastName: "КУДАЙБЕРГЕНОВ",
            name: "МУРАТБЕК",
            middleName: "КАСИМБЕКОВИЧ",
            position: "Заместитель директора по ОВ",
            img: zamdirOV
        },
        {
            id: 7,
            lastName: "ИСКАЛИЕВА",
            name: "ГУЛЬНАРА",
            middleName: "",
            position: "Ученый секретарь",
            img: secretary
        }
    ];

    return (
        <div className='administration'>
            <div className='administrationHeader'>
                <h1 className='administrationHeaderText'>{t("adminsheader")}</h1>
            </div>
            <div className='administrationList'>
                {administration.map((admin, index) => (
                    <div className='administrationItem' key={index}>
                        <div className='administrationItemImgDiv'>
                            <img style={{
                                objectPosition: index === 2 ? '100% 40%' : '100% 15%'
                            }} className='administrationItemImg' src={admin.img} />
                        </div>
                        <div className='administrationItemDiv'>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/institute/staff/${admin.id}`}><h4 className='administrationItemName'>{`${admin.lastName} ${admin.name} ${admin.middleName} `}</h4></Link>
                            <p className='administrationItemPosition'>{admin.position}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}