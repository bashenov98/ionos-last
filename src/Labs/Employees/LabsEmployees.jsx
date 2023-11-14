import axios from "axios";
import "./LabsEmployees.css";

import ProfileImg from "media/labs/empty-profile.png";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LabsEmployees = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.slice(6).split("/")[0];

  const [lab, setLab] = useState();
  const [img, setImg] = useState("");
  const [empId, setEmpId] = useState("");
  const { t } = useTranslation();
  const [data, setData] = useState();
  const [employees, setEmployees] = useState([]);
  const [employeesId, setEmployeesId] = useState([]);


  const [labs, setLabs] = useState();

  console.log(employeesId)

  console.log(employees)

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

  const fetchEmployees = async () => {
    const res = await axios
      .get(`${process.env.REACT_APP_API_URL}/api/employees?populate=*`, {
        headers: {
          Authorization:
            `Bearer ${process.env.REACT_APP_API_TOKEN}`
,
        },
      })
      .then((res) => {
        setEmployees(res.data.data);
      });

    return res;
  };

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
        setEmployeesId(response.data.data.attributes.employees.data.map(item => item.id));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    return res;
  };

  useEffect(() => {
    dataHandler();
    fetchEmployees();
  }, []);

  useEffect(() => {
    fetchLab();
  }, [lab]);

  return (
    <div className="labsEmployees">
      <h1>СОТРУДНИКИ</h1>
      <div className="labsEmployeesMain">
        {employees.filter(item => employeesId.includes(item.id)).map((employee, i) => (
          <div key={i}>
         
            <img src={employee.attributes.Photo.data[0].attributes.url || ProfileImg} alt="profile-img" width={"130px"}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabsEmployees;
