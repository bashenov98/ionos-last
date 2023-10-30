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
        `https://ionos-strapi.onrender.com/api/laboratories/${lab}?populate=*`,
        {
          headers: {
            Authorization:
              "bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79",
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
        `https://ionos-strapi.onrender.com/api/employees/${empId}?populate=*`,
        {
          headers: {
            Authorization:
              "bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79",
          },
        }
      )
      .then((response) => {
        setImg(response.data.data.attributes.Photo.data[0].attributes.url);
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
