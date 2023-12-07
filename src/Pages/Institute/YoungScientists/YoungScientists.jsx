import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./YoungScientists.css";
import Files from "Layout/Files/Files";

const YoungScientists = () => {
  const location = useLocation();
  const [files, setFiles] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/young-scientists-file?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      )
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
    <div className="youngSci">
      <h2>{t(location.pathname.slice(11))}</h2>
      <div>
        {t('young_scientists_1')}
        <br />
        <br />
        {t('young_scientists_2')}
        <br />
        <br />
        {t('young_scientists_3')}
        <br />
        <br />
        {t('young_scientists_4')}
      </div>

      <div className="youngSciGoals">
        <h3>{t('young_scientists_5')}</h3>
        {t('young_scientists_6')}
      </div>

      <div className="youngSciTasks">
        <h3>{t('young_scientists_7')}</h3>
        {t('young_scientists_8')}
        <br />
        {t('young_scientists_9')}
        <br />
        {t('young_scientists_10')}
        <br />
        {t('young_scientists_12')}
        <br />
        {t('young_scientists_13')}
        <br />
        {t('young_scientists_14')}
        <br />
        {t('young_scientists_15')}
        <br />
        {t('young_scientists_16')}
        <br />
        {t('young_scientists_17')}
        <br />
        {t('young_scientists_18')}
        <br />
        {t('young_scientists_20')}
        <br />
        {t('young_scientists_21')}
        <br />
        {t('young_scientists_22')}
        <br />
        {t('young_scientists_23')}
        <br />
        {t('young_scientists_24')}
      </div>

      <Files files={files} />
    </div>
  );
};

export default YoungScientists;
