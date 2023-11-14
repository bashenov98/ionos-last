import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./Labs.css";

const Labs = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.slice(6);

  const [lab, setLab] = useState();
  const [img, setImg] = useState("");
  const [empId, setEmpId] = useState("");
  const { t } = useTranslation();
  const [data, setData] = useState();

  const fetchLab = async () => {
    const res = await axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/laboratories/${lab}?populate=*`,
        {
          headers: {
            Authorization:
              `Bearer ${process.env.REACT_APP_API_TOKEN}`
,
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
        setEmpId(response.data.data.attributes.Head.data.id);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    return res;
  };

  const fetchImg = async () => {
    const res = await axios
      .get(
        `${process.env.REACT_APP_API_URL}/api/employees/${empId}?populate=*`,
        {
          headers: {
            Authorization:
              `Bearer ${process.env.REACT_APP_API_TOKEN}`
,
          },
        }
      )
      .then((response) => {
        setImg(response.data.data.attributes.Photo ? response.data.data.attributes.Photo.data[0].attributes.url : "");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    return res;
  };

  const dataHandler = () => {
    switch (currentPath) {
      case "diagnosticlab":
        return setLab(1);
      case "nonstationarylab":
        return setLab(2);
      case "geomagneticlab":
        return setLab(3);
      case "reliabilitylab":
        return setLab(4);
      case "geodynamiclab":
        return setLab(5);
      case "complexlab":
        return setLab(6);
      case "cartographylab":
        return setLab(7);
      default:
        return setLab("");
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  useEffect(() => {
    fetchLab();
  }, [lab]);

  useEffect(() => {
    fetchImg();
  }, [empId]);

  return (
    data && (
      <div className="lab">
        <h1 className="labHeaderText">{t(location.pathname.slice(6))}</h1>

        <div className="labMain">
          <div className="labMainPerson">
            <img src={img} alt="person-img" width="136px" />
            <h3>
              {data.attributes.Head.data.attributes.Name}{" "}
              {data.attributes.Head.data.attributes.Last_Name}
            </h3>
            {data.attributes.Head.data.attributes.Position}
          </div>
          <div className="labMainDescription">
            {data.attributes.Description.split(";").map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
            ))}
          </div>
        </div>

        <div className="labActionButtons">
          <button onClick={()=>navigate(`/labs/${currentPath}/projects`)}>Проекты</button>
          <button onClick={()=>navigate(`/labs/${currentPath}/employees`)}>Сотрудники</button>
        </div>
      </div>
    )
  );
};

export default Labs;
