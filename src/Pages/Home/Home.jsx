import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react";
import "./Home.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import { Administration } from "./Administration";

import { VideoComponent } from "./Video/Video";
import { Map } from "./Map/Map";
import { Projects } from "./Projects/Projects";
import { News } from "./News/News";
import { Partners } from "./Partners/Partners";
import { ContactUs } from "./ContactUs/ContactUs";
import axios from "axios";

import user from "media/search/user-fill.svg";
import search from "media/search/search-line.svg";
import newsLogo from "media/search/article-line.svg";
import project from "media/search/file-chart-line.svg";

const Home = () => {
  const { t } = useTranslation();
  const [inputText, setInputText] = useState("");

  const [isDropdownVisible, setDropdownVisibility] = useState(0);

  const [employees, setEmployees] = useState([]);
  const [news, setNews] = useState([]);
  const [projects, setProjects] = useState([]);

  const windowWidth = window.innerWidth;

  useEffect(() => {
    const search = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/fuzzy-search/search?query=${inputText}&locale=ru-RU`,
          {
            headers: {
              Authorization:
                `Bearer ${process.env.REACT_APP_API_TOKEN}`
,
            },
          }
        )
        .then((response) => {
          const resp = response.data;

          setEmployees(resp.employees);
          setNews(resp.newss);
          setProjects(resp.projects);
          setDropdownVisibility(1);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };
    if (inputText != "") search();
  }, [inputText]);

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="homeWrapper">
      <div className={`${windowWidth>1080 ? "homeBanner" : "homeBannerMobile"}`}>
        <div className="homeBannerOverlay">
          <div className="searchBar">
            <div
              className="searchBarMain"
              style={{
                borderRadius:
                  inputText === "" || employees.length === 0
                    ? "10px"
                    : "10px 10px 0 0",
              }}
            >
              <img src={search} />
              <input
                type="text"
                className="searchInput"
                onChange={inputHandler}
              />
            </div>

            <div
              className="searchResults"
              style={{ display: inputText != "" ? "block" : "none" }}
            >
              {employees.map((emp, i) => (
                <Link
                  className="searchResultLink"
                  to={`/institute/staff/${emp.id}`}
                  key={i}
                >
                  <div
                    className="searchResult"
                    style={{
                      borderBottom: "0.5px solid black",
                      borderTop: "0.5px solid black",
                    }}
                  >
                    <img src={user} />
                    <h1 className="searchResultText">{`${emp.Name} ${emp.Last_Name}`}</h1>
                  </div>
                </Link>
              ))}
              {news.map((n, i) => (
                <Link
                  className="searchResultLink"
                  to={`/institute/news/${n.id}`}
                  key={i}
                >
                  <div
                    className="searchResult"
                    style={{
                      borderBottom: "0.5px solid black",
                      borderTop: "0.5px solid black",
                    }}
                  >
                    <img src={newsLogo} />
                    <h1 className="searchResultText">{n.Header}</h1>
                  </div>
                </Link>
              ))}
              {projects.map((p, i) => (
                <Link
                  className="searchResultLink"
                  to={`/performance/currentprojects/${p.id}`}
                  key={i}
                >
                  <div
                    className="searchResult"
                    style={{
                      borderBottom: "0.5px solid black",
                      borderTop: "0.5px solid black",
                    }}
                  >
                    <img src={project} />
                    <h1 className="searchResultText">{p.Header}</h1>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <h1 className={`homeBannerHeader ${windowWidth>1080 && "blinking-text"}`}>{t('bannerheader')}</h1>
          <h1 className={`homeBannerText`}>{t('bannerbio')}</h1>
        </div>
      </div> 
      <Administration />
      <News />
      <Projects />
      <Map />
      {/* <div className='homeMainNews'>
                <div>
                    <div className='newsHeader'>
                        <h1>{t("latestNewsHeader")}</h1>
                    </div>
                    <div className='newsUnderHeader'>
                        <div><p>Узнайте о последних новостях</p></div>
                        <div className='arrows'>
                            <img className='arrow' src={arrleft} />
                            <img className='arrow' src={arrright} />
                        </div>
                    </div>
                </div>
                <div className='latestNews'>
                    {latestNews.map((news, index) => (
                        <div className='latestNewsItem' key={index}>
                            <div className='newsdate'>
                                <h3>{news.publish_date.getDate()}</h3>
                                <h4>{months[news.publish_date.getMonth()]}</h4>
                            </div>
                            <div>
                                <h5>{news.header}</h5>
                            </div>

                        </div>
                    ))}
                </div>
                <div className='otherNews'>
                    {otherNews.map((news, index) => (
                        <Link to={`/institute/news/${news.id}`}>
                            <div className='otherNewsItem' key={index}>
                                <div><h5>{news.header}</h5></div>
                                <div>{`${news.publish_date.getDate()} ${months[news.publish_date.getMonth()]} ${news.publish_date.getYear()}`}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}
      {/* <div className='homeMainTeam'>

            </div> */}
      {/* <div className='homeMainMap'>
                <Map />
            </div> */}
      {/* <div className='contactUs'>
                
            </div> */}
      <VideoComponent />

      <Partners />
    </div>
  );
};

export default Home;
