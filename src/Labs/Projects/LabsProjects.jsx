import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import './LabsProjects.css';
import EmptyProfile from "media/labs/empty-profile.png";
import axios from "axios";

const LabsProjects = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.slice(6);

  console.log(currentPath);

  const [lab, setLab] = useState();
  const [img, setImg] = useState("");
  const [empId, setEmpId] = useState("");
  const { t } = useTranslation();
  const [data, setData] = useState();

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

  const fetchLab = async () => {
    
  }

  return (
    <div className="labsProjects">
      <h1>ПРОЕКТЫ</h1>
      <div className="labsProjectsMain">
        
      </div>
    </div>
  );
};

export default LabsProjects;
