import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation, Link, useParams } from 'react-router-dom';

import logo from '../../media/ionos_logo-white.png';
import nav from '../../media/nav.png';
import dateLogo from '../../media/date.png';


import axios from 'axios';

import './News.css';


const News = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [news, setNews] = useState([]);

    useEffect(() => {
        (async () => {
            await axios.get('https://ionos-strapi.onrender.com/api/newss?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const resp = response.data.data;
                    console.log(resp)
                    const newsData = resp.map(n => ({
                        id: n.id,
                        header: n.attributes.Header,
                        img: n.attributes.Image.data ? n.attributes.Image.data.attributes.formats.small.url : logo
                    }));

                    setNews(newsData)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();
    }, []);

    return (
        <div className='newsContainer'>
            <div className='newsHeader'>
                <h1 className='newsHeaderText'>{t(location.pathname.slice(11))}</h1>
            </div>
            <div className='newsNavbarDiv'>
                <div className='newsNavbar'>
                    <img src={nav} className='newsNavbarIcon' alt="" />
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link className="link" to="/"><h1 className='newsNavbarPath'>Главная</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                    <h1 className='newsNavbarPage'>Новости</h1>
                </div>
            </div>
            <div className='newsList'>
                {news.map((n, i) => (
                    <div key={i} className='newsItem'>
                        <div className='newsItemLeft'>
                            <img className='newsItemImg' src={n.img} />
                        </div>
                        <div className='newsItemRight'>
                            <h1 className='newsItemHeaderTop'>{n.header}</h1>
                            <h1 className='newsItemHeaderBot'>{n.header}</h1>
                            <Link className='newsItemMoreButtonLink' to={`/institute/news/${n.id}`}>
                                <div className='newsItemMoreButton'>
                                    <button className='newsItemMoreButtonText'>Подробнее</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const NewsDetail = () => {
    const [news, setNews] = useState();
    const [loaded, setLoaded] = useState(false);
    const [date, setDate] = useState();

    const { id } = useParams();

    useEffect(() => {
        console.log()
        const fetchNewsDetail = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/newss/${id}?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const n = response.data.data
                    console.log(n.attributes.Publish_date)
                    const newDate = new Date(n.attributes.Publish_date)
                    const formattedDate = new Intl.DateTimeFormat('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                      }).format(newDate);

                    setNews({
                        header: n.attributes.Header,
                        description: n.attributes.Description,
                        date: formattedDate,
                        // author: n.attributes.Author ? `${n.attributes.Author.data.attributes.Name} ${n.attributes.Author.data.attributes.Last_Name}` : "",
                        // authorId: n.attributes.Author ? n.attributes.Author.data.id : "",
                        image: n.attributes.Image.data ? n.attributes.Image.data.attributes.formats.small.url : logo
                    });
                
                    setDate(formattedDate);      
                    setLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchNewsDetail(); 
    }, []);

    return loaded && (
        <div className='newsDetail'>
            <div className='newsDetailHeader'>
                <h1 className='newsDetailHeaderText'>{news.header}</h1>
            </div>

            <div className='newsNavbarDiv'>
                <div className='newsNavbar'>
                    <img src={nav} className='newsNavbarIcon' alt="" />
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link className="link" to="/"><h1 className='newsNavbarPath'>Главная</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link to="/institute/news" className='link'><h1 className='newsNavbarPath'>Новости</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                    <h1 className='newsNavbarPage'>{news.header}</h1>
                </div>
            </div>
            <div className='newsDate'>
                <img src={dateLogo} className='newsDateImg'/> 
                <h1 className='newsDateText'>{`Опубликовано:   ${news.date}`}</h1>
            </div>
            <div className='newsImageParams'>
                <div className='newsImage'>
                    {news.image && <img className='newsDetailImage' src={news.image} />}
                </div>
            </div>
            <div className='newsDetailDescription'>
                <h1 className='newsDetailDescriptionText'>{news.description}</h1>
            </div>
        </div>
    );
}

export default News;
