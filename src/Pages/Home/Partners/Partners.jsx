import React, { useEffect } from "react";

import './Partners.css';

import kz from '../../../media/partners/kz.png';
import foreign from '../../../media/partners/foreign.png';


export const Partners = () => {
    const kazakhPartners = [
        {
            img: kz
        },
        {
            img: kz
        },
        {
            img: kz
        },
        {
            img: kz
        },
        {
            img: kz
        },
        {
            img: kz
        }
    ]

    const foreignPartners = [
        {
            img: foreign
        },
        {
            img: foreign
        },
        {
            img: foreign
        },
        {
            img: foreign
        },
        {
            img: foreign
        },
        {
            img: foreign
        }
    ]

    return (
        <div className="partnersContainer">
            <div className="partnersDiv">
                <div className="partnersHeader">
                    <h1 className="partnersHeaderText">КАЗАХСТАНСКИЕ ПАРТНЕРЫ</h1>
                </div>
                <div className="partnersList">
                    {kazakhPartners.map((partner, i) => (
                        <div className="partnersItem">
                            <img className="partnersItemImg" src={partner.img} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="partnersDiv">
                <div className="partnersHeader">
                    <h1 className="partnersHeaderText">ЗАРУБЕЖНЫЕ ПАРТНЕРЫ</h1>
                </div>
                <div className="partnersList">
                    {foreignPartners.map((partner, i) => (
                        <div className="partnersItem">
                            <img className="partnersItemImg" src={partner.img} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}