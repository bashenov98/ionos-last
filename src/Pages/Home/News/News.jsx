import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

import logo from '../../../media/ionos_logo-white.png';

import "./News.css";

export const News = () => {
  const { t } = useTranslation();

  const [news, setNews] = useState([]);
  const langs = {
    kz: "kk-Cyrl-KZ",
    en: "en",
    ru: "ru-RU",
  }

  const getLocale = (key) => {
    return langs[key];
  }
  
  useEffect(() => {
    (async () => {
      await axios.get(`${process.env.REACT_APP_API_URL}/api/newss?populate=*&locale=${getLocale(i18n.language)}`, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
 }
      })
        .then(response => {
          const resp = response.data.data;

          const sortedNewsData = resp
          .sort((a, b) => new Date(b.attributes.Publish_date) - new Date(a.attributes.Publish_date))
          .slice(0, 3)
          .map(n => ({
              id: n.id,
              date: new Date(n.attributes.Publish_date).toLocaleDateString(),
              img: n.attributes.Image.data ? `http://89.250.82.210:1337${n.attributes.Image.data.attributes.url}` : logo,
              header: n.attributes.Header
          }));


          setNews(sortedNewsData)
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    })();
  }, []);

  return (
    <div className="homeNewsContainer">
      <div className="newsHeader">
        <h1 className="newsHeaderText">ПОСЛЕДНИЕ НОВОСТИ</h1>
      </div>
      <div className="newsHomeList">
        {news.map((newsItem, i) => (
          <div className="newsHomeItem" key={i}>
            <div className="newsItemTop">
              <div className="newsItemDate">
                <p className="newsItemDateText">{newsItem.date}</p>
              </div>
              <div className="newsHomeItemImgDiv">
                <img className="newsHomeItemImg" src={newsItem.img} />
              </div>
              <div className="newsItemButtonDiv">
                <Link to={`/institute/news/${newsItem.id}`}>
                  <button className="newsItemButton">ПОДРОБНЕЕ</button>
                </Link>
              </div>
            </div>
            <div className="newsItemBot">
              <h1 className="newsItemHeader">{newsItem.header}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="newsBot">
        <Link to="/institute/news">
          <button className="newsBotButton">ВСЕ НОВОСТИ</button>
        </Link>
      </div>
    </div>
  );
};
