import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Labs.css';



const Labs = () => {
    const location = useLocation();

    const [lab, setLab] = useState();
    const [loaded, setLoaded] = useState(false);
    const { t } = useTranslation();
    const [data, setData] = useState();

    useEffect(() => {
        switch (location.pathname.slice(6)) {
            case "diagnosticlab":
                setLab(1);
                break;
            case "nonstationarylab":
                setLab(2);
                break;
            case "geomagneticlab":
                setLab(3);
                break;
            case "reliabilitylab":
                setLab(4);
                break;
            case "geodynamiclab":
                setLab(5);
                break;
            case "complexlab":
                setLab(6);
                break;
            case "cartographylab":
                setLab(7);
                break;
        }
        console.log(lab)
        const fetchLab = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/laboratories/${lab}?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {

                    const n = response.data.data

                    setData({
                        description : n.attributes.Description
                    })
                    
                    setLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchLab();
    }, []);

    return loaded && (
        <div className='lab'>
            <div>
                <h1 className='labHeaderText'>{t(location.pathname.slice(6))}</h1>
            </div>
            <div>
                <h1>{data.description}</h1>
            </div>
        </div>
    );
}

export default Labs;
