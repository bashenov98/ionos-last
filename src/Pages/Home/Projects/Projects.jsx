import React, { useEffect } from "react";

import "./Projects.css";

import maxm from "../../../media/projects/maxm.png";
import planet from "../../../media/projects/planet.png";
import landslides from "../../../media/projects/landslides.png";

import logo from "../../../media/projects/ionos-logo.png";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      img: maxm,
      header: "«МАКСМ» Многоцелевая аэрокосмическая система мониторинга",
    },
    {
      id: 2,
      img: planet,
      header:
        "Разработка системы мониторинга за сдвижением земной поверхности на основе данных ДЗЗ",
    },
    {
      id: 3,
      img: landslides,
      header:
        "Разработка интеллектуальной системы прогнозирования оползневых процессов",
    },
  ];

  return (
    <div className="projectsContainer">
      <div className="projectsHeader">
        <h1 className="projectsHeaderText">Выполняемые проекты</h1>
      </div>
      <div className="projectList">
        {projects.map((project, i) => (
          <div className="projectItem" key={i}>
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
          </div>
        ))}
      </div>
      <div className="projectsButtonDiv">
        <button className="projectsButton">ВСЕ ПРОЕКТЫ</button>
      </div>
    </div>
  );
};
