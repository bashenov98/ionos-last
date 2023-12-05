import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AntikorLogo from "media/institute/anticorruption/antikor.png";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./Anticorruption.css";

import Files from "Layout/Files/Files";

const Anticorruption = () => {
  const [files, setFiles] = useState([]);
  const location = useLocation();
  const { t } = useTranslation();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/anticor-file?populate=*`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
      })
      .then((response) => {
        const resp = response.data.data.attributes.files.data;
        console.log(resp);
        const filesData = resp.map((s) => ({
          // url: `${process.env.REACT_APP_API_URL}:1337${s.attributes.url}`,
          url: s.attributes.url,
          name: s.attributes.name,
        }));
        setFiles(filesData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="anticorruptionContainer">
      <h1>{t(location.pathname.slice(11))}</h1>
      <div>
        Институт ионосферы реализует комплекс внутренних мероприятий по
        профилактике и противодействию коррупции. <br />
        <br />
        Мероприятия направлены на создание системы ценностных и моральных
        антикоррупционных ориентиров для сотрудников института, профилактику
        коррупционной деятельности и повышение эффективности применения
        антикоррупционного законодательства в деятельности института. <br />
        <br />В числе этих мероприятий – ежегодный внутренний анализ
        коррупционных рисков. По результатам анализа в институте принимаются все
        необходимые меры по устранению выявленных коррупционных рисков.
      </div>
      <br />
      <a
        style={{ color: "blue", cursor: "pointer" }}
        href="https://ionos.kz/sites/default/files/admin/Analytic%20letter%202023-1.PDF"
      >
        - Аналитическая справка по результатам внутреннего анализа коррупционных
        рисков в деятельности ДТОО «Институт ионосферы» за 1 квартал 2023 года
      </a>
      <br />
      <a
        style={{ color: "blue", cursor: "pointer" }}
        href="https://ionos.kz/sites/default/files/admin/Analytic%20letter%202023-1.PDF"
        target="_blank"
      >
        - Аналитическая справка по результатам внутреннего анализа коррупционных
        рисков в деятельности ДТОО «Институт ионосферы», 2022 год
      </a>
      <br />
      <br />
      <div>
        20 марта 2023 года на заседании административно-управленческого
        персонала и сотрудников института был проведен доклад на тему
        «Разъяснение Закона РК{" "}
        <a
          href="https://ionos.kz/sites/default/files/admin/explanatory%20report.PDF"
          target="_blank"
        >
          «О противодействии коррупции», «Реализация Антикоррупционной Стратегии
          Республики Казахстан на 2015-2025 годы».
        </a>
      </div>

      <h3 style={{ marginTop: "40px" }}>
        Коррупция — злоупотребление служебным положением в личных целях,
        использование должностным лицом своих властных полномочий и доверенных
        ему прав, а также связанных с этим официальным статусом авторитета,
        возможностей, связей в целях личной выгоды, противоречащее
        законодательству и моральным установкам.
      </h3>

      <div className="anticorBtm">
        <img src={AntikorLogo} alt="logo" />
        <p>
          Получить консультацию по вопросам противодействия коррупции можно в
          Едином Call-центре Антикоррупционной службы по телефону 1424 (звонок
          бесплатный).
        </p>
        Саll-центр 1424 консультирует граждан по вопросам: <br />
        - Противодействия коррупции; <br />
        - Поступления в Антикоррупционную службу; <br /> - О ходе рассмотрения
        заявлений и сообщений;
        <br /> - Иные вопросы, входящие в компетенцию Антикоррупционной службы.
      </div>
      <Files files={files} />
    </div>
  );
};

export default Anticorruption;
