import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';
import { useLocation, Link, useParams } from 'react-router-dom';
import axios from 'axios';

import nav from 'media/nav.png';

import logo from '../../../media/logo_new_white.png';

import './Projects.css';

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

export const Projects = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [projects, setProjects] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const langs = {
            kz: 'kk-Cyrl-KZ',
            en: 'en',
            ru: 'ru-RU',
        };
        const langKey = langs[i18n.language];
        const fetchProjectDetail = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/projects?populate=*&locale=${langKey}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                })
                .then((response) => {
                    const resp = response.data.data;

                    const projectsData = resp.map((p) => ({
                        id: p.id,
                        Header: p.attributes.Header,
                        Goal: p.attributes.Goal,
                        Image: p.attributes.Image.data
                            ? `${process.env.REACT_APP_API_URL}${p.attributes.Image.data.attributes.url}`
                            : logo,
                        IRN: p.attributes.IRN ? p.attributes.IRN : '',
                        Start_Date: p.attributes.Start_Date
                            ? new Date(p.attributes.Start_Date)
                            : null,
                        Date_End: p.attributes.Date_End ? new Date(p.attributes.Date_End) : null,
                        Head: p.attributes.Supervisor.data
                            ? `${p.attributes.Supervisor.data.attributes.Name} ${p.attributes.Supervisor.data.attributes.Last_Name} `
                            : '',
                    }));

                    setProjects(projectsData);

                    setLoaded(true);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        };

        fetchProjectDetail();
    }, [i18n.language]);

    const renderProjectInfo = (p, i18n) => {
        const projectDuration =
            p.Start_Date && p.Date_End
                ? `${p.Start_Date.getFullYear()}-${p.Date_End.getFullYear()} ${
                      i18n.language === 'kz' ? 'ж.' : i18n.language === 'ru' ? 'гг.' : 'years'
                  } (${monthDiff(p.Start_Date, p.Date_End)} ${
                      i18n.language === 'kz' ? 'ай' : i18n.language === 'ru' ? 'месяцев' : 'months'
                  })`
                : '';

        return i18n.language === 'kz'
            ? `${p.IRN ? `ЖТН гранттық жобасы ${p.IRN}` : ''} ${
                  p.IRN ? ', ' : ''
              } ${projectDuration}`
            : i18n.language === 'ru'
            ? `${p.IRN ? `Грантовый проект ИРН ${p.IRN}` : ''} ${
                  p.IRN ? ', ' : ''
              } ${projectDuration}`
            : `${p.IRN ? `Grant project IRN ${p.IRN}` : ''} ${
                  p.IRN ? ', ' : ''
              } ${projectDuration}`;
    };

    return (
        loaded && (
            <div className="projectsDiv">
                <div className="newsHeader">
                    <h1 className="newsHeaderText">{t(location.pathname.slice(13))}</h1>
                </div>
                <div className="newsNavbarDiv">
                    <div className="newsNavbar">
                        <img src={nav} className="newsNavbarIcon" alt="" />
                        <h1 className="newsNavbarPath">/</h1>
                        <Link className="link" to="/">
                            <h1 className="newsNavbarPath">
                                {i18n.language === 'kz'
                                    ? 'Басты бет'
                                    : i18n.language === 'ru'
                                    ? 'Главная'
                                    : 'Home'}
                            </h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                        <h1 className="newsNavbarPage">
                            {i18n.language === 'kz'
                                ? 'Жобалар'
                                : i18n.language === 'ru'
                                ? 'Проекты'
                                : 'Projects'}
                        </h1>
                    </div>
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
                                    {p.Head ? `${t('head')}: ${p.Head}` : ''}
                                </h1>
                                <h1 className="projectItemIRNText">{renderProjectInfo(p, i18n)}</h1>
                                <Link
                                    className="projectItemMoreButtonLink"
                                    to={`/performance/currentprojects/${p.id}`}>
                                    <button className="projectItemMoreButtonText">
                                        {i18n.language === 'kz'
                                            ? 'Толығырақ'
                                            : i18n.language === 'ru'
                                            ? 'Подробнее'
                                            : 'Read more'}
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

export const ProjectDetail = () => {
    const [project, setProject] = useState();
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    let index = id;

    useEffect(() => {
        const langs = {
            kz: 'kk-Cyrl-KZ',
            en: 'en',
            ru: 'ru-RU',
        };
        const langKey = langs[i18n.language];
        const fetchProjectDetail = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/projects/${id}?locale=${langKey}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
                    },
                })
                .then((response) => {
                    const n = response.data.data;
                    if (n.attributes.Start_Date && n.attributes.Date_End) {
                        const startDate = new Date(n.attributes.Start_Date);
                        const startDateFormatted = new Intl.DateTimeFormat('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                        }).format(startDate);

                        const endDate = new Date(n.attributes.Date_End);
                        const endDateFormatted = new Intl.DateTimeFormat('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit',
                        }).format(endDate);
                        setProject({
                            id: n.id,
                            Header: n.attributes.Header,
                            Goal: n.attributes.Goal,
                            Descripton: n.attributes.Description,
                            Results: n.attributes.Results ? n.attributes.Results : '',
                            Start_Date: n.attributes.Start_Date ? startDateFormatted : '',
                            Date_End: n.attributes.Date_End ? endDateFormatted : '',
                        });
                    } else {
                        setProject({
                            id: n.id,
                            Header: n.attributes.Header,
                            Goal: n.attributes.Goal,
                            Descripton: n.attributes.Description,
                            Results: n.attributes.Results ? n.attributes.Results : '',
                        });
                    }
                    setLoaded(true);
                })
                .catch((error) => {
                    console.error('Error fetching data: ', error);
                });
        };

        fetchProjectDetail();
    }, [i18n.language]);

    return (
        loaded && (
            <div>
                <div className="newsDetailHeader">
                    <h1 className="newsDetailHeaderText">{project.Header}</h1>
                </div>
                <div className="newsNavbarDiv">
                    <div className="newsNavbar">
                        <img src={nav} className="newsNavbarIcon" alt="" />
                        <h1 className="newsNavbarPath">/</h1>
                        <Link className="link" to="/">
                            <h1 className="newsNavbarPath">
                                {i18n.language === 'kz'
                                    ? 'Басты бет'
                                    : i18n.language === 'ru'
                                    ? 'Главная'
                                    : 'Home'}
                            </h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                        <Link to="/performance/currentprojects" className="link">
                            <h1 className="newsNavbarPath">
                                {i18n.language === 'kz'
                                    ? 'Жобалар'
                                    : i18n.language === 'ru'
                                    ? 'Проекты'
                                    : 'Projects'}
                            </h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                    </div>
                </div>
                <div className="projectDetailContainer">
                    <div>
                        <h1 className="projectDetailSubheaderText">
                            {i18n.language === 'kz'
                                ? 'Мақсаты:'
                                : i18n.language === 'ru'
                                ? 'Цель:'
                                : 'Goal:'}
                        </h1>
                        <h1 className="projectDetailDescriptionText">{project.Goal}</h1>
                    </div>
                    <div>
                        <h1 className="projectDetailSubheaderText">
                            {i18n.language === 'kz'
                                ? 'Сипаттамасы:'
                                : i18n.language === 'ru'
                                ? 'Описание:'
                                : 'Description:'}
                        </h1>
                        <h1 className="projectDetailDescriptionText">{project.Descripton}</h1>
                    </div>
                    {project.Results && (
                        <div>
                            <div>
                                <h1 className="projectDetailSubheaderText">
                                    {i18n.language === 'kz'
                                        ? 'Нәтижелері:'
                                        : i18n.language === 'ru'
                                        ? 'Результаты:'
                                        : 'Results:'}
                                </h1>
                                <h1 className="projectDetailDescriptionText">{project.Results}</h1>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
