import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';

import nav from 'media/nav.png';

import logo from 'media/ionos_logo-white 1.png'

import './Projects.css';

const ShortenedTextComponent = ({ text, maxLength }) => {
    return (
      <span style={{ overflow: "ellipsis", whiteSpace: "nowrap" }}>
        {text.substring(0, maxLength)}
      </span>
    );
  };

export const Projects = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchProjectDetail = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/projects`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const resp = response.data.data;

                    const projectsData = resp.map(p => ({
                        id: p.id,
                        Header: p.attributes.Header,
                        Goal: p.attributes.Goal
                    }));

                    setProjects(projectsData)

                    setLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchProjectDetail();
    }, []);

    return loaded && (
        <div>
            <div className='newsHeader'>
                <h1 className='newsHeaderText'>{t(location.pathname.slice(13))}</h1>
            </div>
            <div className='newsNavbarDiv'>
                <div className='newsNavbar'>
                    <img src={nav} className='newsNavbarIcon' alt="" />
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link className="link" to="/"><h1 className='newsNavbarPath'>Главная</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                    <h1 className='newsNavbarPage'>Проекты</h1>
                </div>
            </div>
            <div className='newsList'>
                {projects.map((p, i) => (
                    <div key={i} className='newsItem'>
                        <div className='newsItemLeft'>
                            <img className='newsItemImg' src={logo} />
                        </div>
                        <div className='newsItemRight'>
                            <h1 className='newsItemHeaderTop'>{p.Header}</h1>
                            <h1 className='newsItemHeaderBot'><ShortenedTextComponent text={p.Goal} maxLength={100} /></h1>
                            <Link className='newsItemMoreButtonLink' to={`/institute/news/${p.id}`}>
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


export const ProjectDetail = () => {
    const [project, setProject] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchProjectDetail = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/projects/${id}`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const n = response.data.data;
                    if (n.attributes.Start_Date && n.attributes.Date_End) {
                        const startDate = new Date(n.attributes.Start_Date);
                        const startDateFormatted = new Intl.DateTimeFormat('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(startDate);


                        const endDate = new Date(n.attributes.Date_End);
                        const endDateFormatted = new Intl.DateTimeFormat('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(endDate);
                        setProject({
                            id: n.id,
                            Header: n.attributes.Header,
                            Goal: n.attributes.Goal,
                            Descripton: n.attributes.Description,
                            Results: n.attributes.Results ? n.attributes.Results : "",
                            Start_Date: n.attributes.Start_Date ? startDateFormatted : "",
                            Date_End: n.attributes.Date_End ? endDateFormatted : ""
                        });
                    } else {
                        setProject({
                            id: n.id,
                            Header: n.attributes.Header,
                            Goal: n.attributes.Goal,
                            Descripton: n.attributes.Description,
                            Results: n.attributes.Results ? n.attributes.Results : "",
                        });
                    }
                    setLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchProjectDetail();
    }, []);

    return loaded && (
        <div>
            <div className='newsDetailHeader'>
                <h1 className='newsDetailHeaderText'>{project.Header}</h1>
            </div>
            <div className='newsNavbarDiv'>
                <div className='newsNavbar'>
                    <img src={nav} className='newsNavbarIcon' alt="" />
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link className="link" to="/"><h1 className='newsNavbarPath'>Главная</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                    <Link to="/performance/currentprojects" className='link'><h1 className='newsNavbarPath'>Проекты</h1></Link>
                    <h1 className='newsNavbarPath'>/</h1>
                </div>
            </div>
            <div>
                <h1 className='projectDetailSubheaderText'>Цель:</h1>
                <h1 className='projectDetailDescriptionText'>{project.Goal}</h1>
            </div>
            <div>
                <h1 className='projectDetailSubheaderText'>Описание:</h1>
                <h1 className='projectDetailDescriptionText'>{project.Descripton}</h1>
            </div>
            {
                project.Results &&
                <div>
                    <div>
                        <h1 className='projectDetailSubheaderText'>Результаты:</h1>
                        <h1 className='projectDetailDescriptionText'>{project.Results}</h1>
                    </div>
                </div>
            }
            <div>
            </div>
        </div>
    );
}

