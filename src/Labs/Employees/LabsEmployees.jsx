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
      .get(`https://ionos-strapi.onrender.com/api/employees?populate=*`, {
        headers: {
          Authorization:
            "bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79",
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
        `https://ionos-strapi.onrender.com/api/laboratories/${lab}?populate=*`,
        {
          headers: {
            Authorization:
              "bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79",
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
