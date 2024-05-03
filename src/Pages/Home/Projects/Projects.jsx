import React, { useEffect, useState } from "react";

import "./Projects.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import i18n from "../../../i18n";

import axios from "axios";

import maxm from '../../../media/projects/maxm.png';
import planet from '../../../media/projects/planet.png';
import landslides from '../../../media/projects/landslides.png';

import logo from "../../../media/logo_new_white.png";

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();

  const langs = {
    kz: "kk-Cyrl-KZ",
    en: "en",
    ru: "ru-RU",
  }

  const getLocale = (key) => {
    return langs[key];
  }

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/projects?populate=*&locale=${getLocale(i18n.language)}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
              ,
            },
          }
        );

        const resp = response.data.data;
        // Sort projects by Start_Date in descending order
        const sortedProjects = resp
          .sort((a, b) => new Date(b.attributes.Start_Date) - new Date(a.attributes.Start_Date))
          .slice(0, 3); // Take the top 3 projects

        // Map to new project structure
        const projectsData = sortedProjects.map((p, index) => ({
          id: p.id,
          img: [maxm, planet, landslides][index % 3], // Cycle through your provided images, adjust logic as needed
          header: p.attributes.Header,
        }));

        setProjects(projectsData);
        console.log(projects);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchProjectDetail();
  }, []);






  return (
    <div className="projectsContainer">
      <div className="projectsHeader">
        <h1 className="projectsHeaderText">Выполняемые проекты</h1>
      </div>
      <div className="projectList">
        {projects.map((project, i) => (
          <div className="projectItem" key={i}>
            <Link to = {`/performance/currentprojects/${project.id}`}>
              <div className="projectItemTop">
                <div className="projectIonosLogo">
                  <img className="projectIonosLogoImg" src={logo} />
                </div>
                <div className="projectLogo">
                  <img className="projectLogoImg" src={project.img} />
                </div>
              </div>
              <div className="projectItemBot">
                <h3 className="projectItemBotText">{project.header}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="projectsButtonDiv">
        <Link to="performance/currentprojects"><button className="projectsButton">ВСЕ ПРОЕКТЫ</button></Link>
      </div>
    </div>
  );
};
