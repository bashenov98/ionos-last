import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "./Labs.css";

const Labs = () => {
  const langs = {
    kz: "kk-Cyrl-KZ",
    en: "en",
    ru: "ru-RU",
  };

  const labIndices = {
    'diagnosticlab': 3,
    'nonstationarylab': 5,
    'geomagneticlab': 8,
    'reliabilitylab': 11,
    'geodynamiclab': 14,
    'complexlab': 17,
    'cartographylab': 20,
  };

  const Indices = {
    'diagnosticlab': {
      'kz': 4,
      'en': 3,
      'ru': 2
    },
    'nonstationarylab': {
      'kz': 7,
      'en': 5,
      'ru': 6
    },
    'geomagneticlab': {
      'kz': 10,
      'en': 8,
      'ru': 9
    },
    'reliabilitylab': {
      'kz': 13,
      'en': 11,
      'ru': 12
    },
    'geodynamiclab': {
      'kz': 16,
      'en': 14,
      'ru': 15
    },
    'complexlab': {
      'kz': 18,
      'en': 17,
      'ru': 19
    },
    'cartographylab': {
      'kz': 22,
      'en': 20,
      'ru': 21
    }
  };

  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [lab, setLab] = useState(null);
  const [data, setData] = useState(null);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [head, setHead] = useState(0);

  const fetchLabData = async () => {
    setLoading(true);
    const langKey = langs[i18n.language];
    let labIndex = labIndices[currentPath] || 0;
    switch (i18n.language) {
      case "en":
        labIndex = labIndex;
        break;
      case "ru":
        labIndex = labIndex + 1;
        break;
      case "kz":
        labIndex = labIndex + 2;
        break;

    }

    console.log(labIndex)
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiToken = process.env.REACT_APP_API_TOKEN;
    const index = Indices[currentPath][i18n.language];

    try {
      const labResponse = await axios.get(`${apiUrl}/api/laboratories/${index}?populate=*&locale=${langKey}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      });

      setData(labResponse.data.data);
      console.log(labResponse.data.data)

      const headId = labResponse.data.data.attributes.Head.data
        ? labResponse.data.data.attributes.Head.data.id
        : 0;
      console.log(headId)
      setHead(headId)
      if (headId !== 0) {
        const employeeResponse = await axios.get(`${apiUrl}/api/employees/${headId}?populate=*`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        });

        const photoUrl = employeeResponse.data.data.attributes.Photo
          ? `${employeeResponse.data.data.attributes.Photo.data[0].attributes.url}`
          : "";

        setImage(photoUrl);
      }
    } catch (err) {
      console.error("Error fetching data: ", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const currentPath = location.pathname.slice(6);

  useEffect(() => {
    fetchLabData();
  }, [currentPath, i18n.language]);



  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    data && (
      <div className="lab">
        <h1 className="labHeaderText">{t(currentPath)}</h1>

        <div className="labMain">
          {(head != 0) && <div className="labMainPerson">
            <img src={image} alt="person-img" width="136px" />
            <h3>
              {data.attributes.Head.data.attributes.Name}{" "}
              {data.attributes.Head.data.attributes.Last_Name}
            </h3>
            {data.attributes.Head.data.attributes.Position}
          </div>}
          <div className="labMainDescription">
            {data.attributes.Description.split(";").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>

        <div className="labActionButtons">
          <button onClick={() => navigate(`/labs/${currentPath}/projects`)}>Проекты</button>
          <button onClick={() => navigate(`/labs/${currentPath}/employees`)}>Сотрудники</button>
        </div>
      </div>
    )
  );
};

export default Labs;
