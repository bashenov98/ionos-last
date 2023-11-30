import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { useLocation, Link, useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "Layout/Carousel/Carousel";

import nav from "media/nav.png";

import logo from '../../../media/ionos_logo-white.png';

import "./Seminars.css";


export const Seminars = () => {
    const location = useLocation();
    const { t } = useTranslation();

    const [seminars, setSeminars] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const langs = {
            kz: "kk-Cyrl-KZ",
            en: "en",
            ru: "ru-RU",
        };
        const langKey = langs[i18n.language];
        const fetchSeminars = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/seminars?populate=*&locale=${langKey}`, {
                    headers: {
                        Authorization:
                            `Bearer ${process.env.REACT_APP_API_TOKEN}`
                        ,
                    },
                })
                .then((response) => {
                    const resp = response.data.data;

                    const seminarsData = resp.map((s) => ({
                        id: s.id,
                        Header: s.attributes.Header,
                        Description: s.attributes.Description,
                        Image: s.attributes.Images.data
                            ? `${process.env.REACT_APP_API_URL}:1337${s.attributes.Images.data[0].attributes.url}`
                            : logo,
                        Date: s.attributes.Date
                            ? new Date(s.attributes.Date)
                            : null,
                    }));

                    setSeminars(seminarsData);

                    setLoaded(true);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        };

        fetchSeminars();
    }, [i18n.language]);

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
                            <h1 className="newsNavbarPath">Главная</h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                        <h1 className="newsNavbarPage">Проекты</h1>
                    </div>
                </div>
                <div className="newsList">
                    {seminars.map((s, i) => (
                        <div key={i} className="newsItem">
                            <div className="projectItemLeft">
                                <img className="projectItemImg" src={s.Image} />
                            </div>
                            <div className="newsItemRight">
                                <h1 className="projectItemHeader">{s.Header}</h1>
                                <h1 className="projectItemHeadText">
                                    {s.Description}
                                </h1>
                                <h1 className="projectItemIRNText">
                                    {Intl.DateTimeFormat(i18n.language === "en"
                                        ? "en-US"
                                        : i18n.language === "ru" ? "ru-RU" : "kk-KZ", { dateStyle: 'medium', timeStyle: 'short' }).format(s.Date)}
                                </h1>
                                <Link
                                    className="projectItemMoreButtonLink"
                                    to={`/performance/seminars/${s.id}`}
                                >
                                    <button className="projectItemMoreButtonText">
                                        {t("more")}
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

export const SeminarDetail = () => {
    const [seminar, setSeminar] = useState();
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    let index = id;
    const { t } = useTranslation();


    useEffect(() => {
        const langs = {
            kz: "kk-Cyrl-KZ",
            en: "en",
            ru: "ru-RU",
        };
        const langKey = langs[i18n.language];
        const fetchSeminarDetail = async () => {
            await axios
                .get(`${process.env.REACT_APP_API_URL}/api/seminars/${index}?locale=${langKey}&populate=*`, {
                    headers: {
                        Authorization:
                            `Bearer ${process.env.REACT_APP_API_TOKEN}`
                        ,
                    },
                })
                .then((response) => {
                    const n = response.data.data;
                    console.log(n)
                    const imgs = [];
                    if (n.attributes.Images.data) {
                        n.attributes.Images.data.forEach(image => {
                            // Check if the image object and its URL are defined
                            if (image && image.attributes && image.attributes.url) {
                                // Push the URL into the imageUrls array
                                imgs.push(`${process.env.REACT_APP_API_URL}:1337${image.attributes.url}`);
                            }
                        });
                    }
                    setImages(imgs);
                    console.log(imgs)

                    setSeminar({
                        id: n.id,
                        Header: n.attributes.Header,
                        Description: n.attributes.Description
                    });
                    setLoaded(true);
                })
                .catch((error) => {
                    console.error("Error fetching data: ", error);
                });
        };

        fetchSeminarDetail();
    }, [i18n.language]);

    return (
        loaded && (
            <div>
                <div className="newsDetailHeader">
                    <h1 className="newsDetailHeaderText">{seminar.Header}</h1>
                </div>
                <div className="newsNavbarDiv">
                    <div className="newsNavbar">
                        <img src={nav} className="newsNavbarIcon" alt="" />
                        <h1 className="newsNavbarPath">/</h1>
                        <Link className="link" to="/">
                            <h1 className="newsNavbarPath">{t("main")}</h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                        <Link to="/performance/currentprojects" className="link">
                            <h1 className="newsNavbarPath">{t("seminars")}</h1>
                        </Link>
                        <h1 className="newsNavbarPath">/</h1>
                    </div>
                </div>
                <div className="projectDetailContainer">
                    <div>
                        <h1 className="projectDetailDescriptionText">{seminar.Header}</h1>
                    </div>
                    <div>
                        <h1 className="projectDetailSubheaderText">Описание:</h1>
                        <h1 className="projectDetailDescriptionText">{seminar.Description}</h1>
                    </div>
                    {images.length > 0 && (
                        <div className="projectCarosel">
                            <Carousel images={images} />
                        </div>
                    )}
                </div>
            </div>
        )
    );
};
