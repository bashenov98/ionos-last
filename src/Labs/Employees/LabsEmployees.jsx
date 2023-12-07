import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LabsEmployees.css";

const LabsEmployees = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [employees, setEmployees] = useState([]);

  const labIndices = {
    diagnosticlab: 3,
    nonstationarylab: 5,
    geomagneticlab: 8,
    reliabilitylab: 11,
    geodynamiclab: 14,
    complexlab: 17,
    cartographylab: 20,
  };

  const langs = {
    kz: "kk-Cyrl-KZ",
    en: "en",
    ru: "ru-RU",
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

  const fetchEmployees = async () => {
    setLoading(true);
    const currentPath = pathname.split('/').filter(Boolean)[1]; // Get the second segment after the first '/'
    let labIndex = labIndices[currentPath] || 0;
    const index = Indices[currentPath][i18n.language];

    labIndex += i18n.language === "ru" ? 1 : i18n.language === "kz" ? 2 : 0;

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/laboratories/${index}?populate[0]=employees&populate[1]=employees.Photo&locale=${langs[i18n.language]}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      const emps = response.data.data.attributes.employees.data.map((emp) => ({
        id: emp.id,
        name: `${emp.attributes.Name} ${emp.attributes.Last_Name}`,
        job: emp.attributes.Position ? emp.attributes.Position : "",
        img: emp.attributes.Photo.data
          ? `http://89.250.82.210:1337${emp.attributes.Photo.data[0].attributes.url}`
          : "",
      }));
      setEmployees(emps);

    } catch (err) {
      console.error("Error fetching data: ", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchEmployees();
    })();
    console.log(employees)
    // В зависимости добавляется fetchEmployees, чтобы избежать проблемы замыкания
  }, [pathname, i18n.language]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return employees && (
    <div className="labsEmployees">
      <h1>{t('staff')}</h1>
      <div className="labsEmployeesMain">
        {employees.map((emp, index) => (
          <Link
            className="link"
            to={`/institute/staff/${emp.id}`}
            key={index}
          >
            <div className="staffItem">
              <img className="employeePhoto" src={emp.img} />
              <h4 className="labEmployeeNameText">{emp.name}</h4>
              <p className="labEmployeePositionText">{emp.job}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LabsEmployees;
