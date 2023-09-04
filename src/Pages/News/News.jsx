import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation, Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import './News.css';


const News = () => {
    const location = useLocation();
    const { t } = useTranslation();

    return (
        <div>
            <h2>{t(location.pathname.slice(11))}</h2>
        </div>
    );
}

export const NewsDetail = () => {
    const [news, setNews] = useState();
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        console.log()
        const fetchNewsDetail = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/newss/${id}?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const n = response.data.data
                    console.log(n.attributes)
                    setNews({
                        header: n.attributes.Header,
                        description: n.attributes.Description,
                        date: (new Date(n.attributes.Publish_date)),
                        author: `${n.attributes.Author.data.attributes.Name} ${n.attributes.Author.data.attributes.Last_Name}`,
                        authorId: n.attributes.Author.id,
                        image: n.attributes.Image.data.attributes.formats.small.url
                    });
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
            <h1 className='newsHeader'>{news.header}</h1>
            <div className='newsImageParams'>
                <div className='newsImage'>
                    {news.image && <img src={news.image} />}
                </div>
                <div className='newsParams'>
                    <Link to={`/institute/staff/${news.authorId}`}>{news.author}</Link>
                    <h3>{news.date.toLocaleDateString("ru")}</h3>
                </div>
            </div>
            <div className='newsDescription'>
                <p>{news.description}</p>
            </div>
        </div>
    );
}

export default News;
