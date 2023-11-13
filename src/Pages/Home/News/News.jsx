import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import logo from '../../../media/ionos_logo-white.png';

import "./News.css";

export const News = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    (async () => {
      await axios.get('https://ionos-strapi.onrender.com/api/newss?populate=*', {
        headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
      })
        .then(response => {
          const resp = response.data.data;

          const sortedNewsData = resp
          .sort((a, b) => new Date(b.attributes.Publish_date) - new Date(a.attributes.Publish_date))
          .slice(0, 3)
          .map(n => ({
              id: n.id,
              date: new Date(n.attributes.Publish_date).toLocaleDateString(),
              img: n.attributes.Image.data ? n.attributes.Image.data.attributes.formats.small.url : logo,
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
    <div className="newsContainer">
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
