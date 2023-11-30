import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LabsProjects.css";

import logo from '../../media/ionos_logo-white.png';

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

const LabsEmployees = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);


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

  const fetchProjects = async () => {
    setLoaded(false);
    const currentPath = pathname.split('/').filter(Boolean)[1]; // Get the second segment after the first '/'
    let labIndex = labIndices[currentPath] || 0;
    console.log(labIndex)

    labIndex += i18n.language === "ru" ? 1 : i18n.language === "kz" ? 2 : 0;

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/laboratories/${labIndex}?populate[0]=projects&populate[1]=employees.Photo&locale=${langs[i18n.language]}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      });
      console.log(response.data.data.attributes.projects.data)
      const pros = response.data.data.attributes.projects.data.map((pro) => ({
        id: pro.id,
        Header: pro.attributes.Header,
        IRN: pro.attributes.IRN,
        Image: pro.attributes.Image
          ? `http://89.250.82.210:1337${pro.attributes.Image.data[0].attributes.url}`
          : logo,
        Start_Date: pro.attributes.Start_Date
          ? new Date(pro.attributes.Start_Date)
          : null,
        Date_End: pro.attributes.Date_End
          ? new Date(pro.attributes.Date_End)
          : null,
        Head: pro.attributes.Supervisor
          ? `${pro.attributes.Supervisor.data.attributes.Name} ${pro.attributes.Supervisor.data.attributes.Last_Name} `
          : "",
      }));
      setProjects(pros);

    } catch (err) {
      console.error("Error fetching data: ", err);
      setError(err.message);
    } finally {
      setLoaded(true);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchProjects();
    })();
    console.log(pathname.substring(6, pathname.length - 9))
    // В зависимости добавляется fetchEmployees, чтобы избежать проблемы замыкания
  }, [pathname, i18n.language]);


  if (!loaded) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    loaded && (
      <div className="projectsDiv">
        <div className="newsHeader">
          <h1 className="newsHeaderText">{t(pathname.substring(6, pathname.length - 9))}</h1>
        </div>
        <div className="newsList">
          {projects.map((p, i) => (
            <div key={i} className="newsItem">
              <div className="projectItemLeft">
                <img className="projectItemImg" src={p.Image} />
              </div>
              <div className="newsItemRight">
                <h1 className="projectItemHeader">{p.Header}</h1>
                <h1 className="projectItemHeadText">
                  {p.Head ? `${t("head")}: ${p.Head}` : ""}
                </h1>
                <h1 className="projectItemIRNText">
                  {p.IRN ? `${t("grantproject")} ${i18n.language === "en" ? "IRN" : "ИРН"} ${p.IRN}` : ""}{" "}
                  {p.IRN ? ", " : ""}{" "}
                  {p.Start_Date && p.Date_End
                    ? `${p.Start_Date.getFullYear()}-${p.Date_End.getFullYear()} ${i18n.language === "en"
                      ? "years"
                      : i18n.language === "ru" 
                        ? "гг."
                        : "жж."} (${monthDiff(
                        p.Start_Date,
                        p.Date_End
                      )} ${t("months")})`
                    : ""}
                </h1>
                <Link
                  className="projectItemMoreButtonLink"
                  to={`/performance/currentprojects/${p.id}`}
                >
                  <button className="projectItemMoreButtonText">
                    {t("more")}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default LabsEmployees;
