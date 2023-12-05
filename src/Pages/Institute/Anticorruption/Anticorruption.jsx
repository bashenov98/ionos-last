import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

import './Anticorruption.css';

import Files from 'Layout/Files/Files';



const Anticorruption = () => {
    const [files, setFiles] = useState([]);
    const location = useLocation();
    const { t } = useTranslation();
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/api/anticor-file?populate=*`, {
            headers: {
                Authorization:
                    `Bearer ${process.env.REACT_APP_API_TOKEN}`
                ,
            },
        })
            .then((response) => {
                const resp = response.data.data.attributes.files.data;
                console.log(resp)
                const filesData = resp.map((s) => ({
                    // url: `${process.env.REACT_APP_API_URL}:1337${s.attributes.url}`,
                    url: s.attributes.url,
                    name: s.attributes.name,
                }))
                setFiles(filesData)

            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div className='anticorruptionContainer'>
            <h2>{t(location.pathname.slice(11))}</h2>
            <Files files={files} />
        </div>
    );
}

export default Anticorruption;
