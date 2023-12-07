import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AntikorLogo from "media/institute/anticorruption/antikor.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./Anticorruption.css";

import Files from "Layout/Files/Files";

const Anticorruption = () => {
    const [files, setFiles] = useState([]);
    const location = useLocation();
    const { t } = useTranslation();
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/anticor-file?populate=*`, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                },
            })
            .then((response) => {
                const resp = response.data.data.attributes.files.data;
                console.log(resp);
                const filesData = resp.map((s) => ({
                    // url: `${process.env.REACT_APP_API_URL}:1337${s.attributes.url}`,
                    url: s.attributes.url,
                    name: s.attributes.name,
                }));
                setFiles(filesData);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []);

    return (
        <div className="anticorruptionContainer">
            <h1>{t(location.pathname.slice(11))}</h1>
            <div>
                {t('anticor_1')}<br />
                <br />
                {t('anticor_2')}<br />
                <br />{t('anticor_3')}
            </div>
            <br />
            <a
                style={{ color: "blue", cursor: "pointer" }}
                href="https://ionos.kz/sites/default/files/admin/Analytic%20letter%202023-1.PDF"
            >
                - {t('anticor_4')}
            </a>
            <br />
            <a
                style={{ color: "blue", cursor: "pointer" }}
                href="https://ionos.kz/sites/default/files/admin/Analytic%20letter%202023-1.PDF"
                target="_blank"
            >
                - {t('anticor_5')}
            </a>
            <br />
            <br />
            <div>
                {t('anticor_6')}{" "}
                <a
                    href="https://ionos.kz/sites/default/files/admin/explanatory%20report.PDF"
                    target="_blank"
                >
                    {t('anticor_7')}
                </a>
            </div>

            <h3 style={{ marginTop: "40px" }}>
            {t('anticor_8')}
            </h3>

            <div className="anticorBtm">
                <img src={AntikorLogo} alt="logo" />
                <p>
                {t('anticor_9')}
                </p>
                {t('anticor_10')}<br />
                - {t('anticor_11')}<br />
                - {t('anticor_12')}<br /> 
                - {t('anticor_13')}
                <br /> - {t('anticor_14')}
            </div>
            <Files files={files} />
        </div>
    );
};

export default Anticorruption;
