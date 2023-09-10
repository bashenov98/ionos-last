import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react';
import './Home.css';
import arrleft from '../../media/arrow-left.png';
import arrright from '../../media/right-arrow.png';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

import address from '../../media/contactIcons/maps-and-flags.png';
import phone from '../../media/contactIcons/phone-call.png';
import fax from '../../media/contactIcons/fax.png';
import email from '../../media/contactIcons/email.png';
import time from '../../media/contactIcons/clock.png';

import linkedin from '../../media/social/linkedin.png';
import inst from '../../media/social/instagram.png';
import { Administration } from './Administration';

import { VideoComponent } from './Video/Video';
import { Map } from './Map/Map';


const Home = () => {
    const { t } = useTranslation();
    const [news, setNews] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [otherNews, setOtherNews] = useState([]);

    const [administration, setAdministration] = useState([]);

    const socialLinks = [
        {
            img: linkedin,
            link: "https://kz.linkedin.com/company/ionos-kz"
        },
        {
            img: inst,
            link: "https://www.instagram.com/nurzhvnovv/"
        }
    ]


    useEffect(() => {
        setLatestNews([
            {
                id: 5,
                header: "Празднование 30-летия казахстанской космонавтики",
                description: "",
                author: "",
                publish_date: (new Date("2023-05-27"))
            },
            {
                id: 6,
                header: "Перерегистрация Института ионосферы и изменение наименования",
                description: "",
                author: "Dani",
                publish_date: (new Date("2023-06-30"))
            }
        ]);
        setOtherNews([
            {
                id: 1,
                header: "GIS DAY 2022",
                description: "",
                author: "",
                publish_date: (new Date("2023-01-14"))
            },
            {
                id: 2,
                header: "Празднование 30-летия казахстанской космонавтики",
                description: "",
                author: "",
                publish_date: (new Date("2023-02-17"))
            },
            {
                id: 3,
                header: "Перерегистрация Института ионосферы и изменение наименования",
                description: "",
                author: "",
                publish_date: (new Date("2023-03-20"))
            },
            {
                id: 4,
                header: "GIS DAY 2022",
                description: "",
                author: "",
                publish_date: (new Date("2023-04-23"))
            }
        ]);
    }, []);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className='homeWrapper'>
            <div className='homeBanner'>
                <div className='homeBannerOverlay'>
                    <h1 className='homeBannerHeader'>Институт ионосферы</h1>
                    <p className='homeBannerText'>Мы являемся одним из старейших научно-исследовательских институтов в Казахстане и единственным в Средней Азии специализированным институтом, занимающийся изучением состояния ионосферы. </p>
                </div>
            </div>
            <Administration />
            <div className='homeMainNews'>
                <div>
                    <div className='newsHeader'>
                        <h1 className='header'>{t("latestNewsHeader")}</h1>
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
            </div>
            <div className='homeMainTeam'>

            </div>
            <div className='homeMainMap'>
                <Map />
            </div>
            <div className='contactUs'>
                <h1 className='header'>{t("contactUsHeader")}</h1>
                <div>
                    <div className='contactUsTop'>
                        {/* <div className='socialLinks'>
                            {socialLinks.map((social, index) => (
                                <div className='socialLink' key={index}>
                                    <Link to={social.link}><img className='socialIcon' src={social.img} /></Link>
                                </div>
                            ))}
                        </div> */}
                    </div>
                    <form>
                        <div className='contactUsNameEmail'>
                            <div className='contactUsName'>
                                <input className='contactUsInput' type="text" id="name" name="name" required placeholder='name' />
                            </div>
                            <div className='contactUsEmail'>
                                <input className='contactUsInput' type="email" id="email" name="email" placeholder='email' required />
                            </div>
                        </div>
                        <div className='contactUsMessage'>
                            <textarea className='contactUsInput' id="message" name="message" placeholder='message' required></textarea>
                        </div>
                        <button className='contactUsButton' type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <VideoComponent />
        </div>
    );
}

export default Home;
