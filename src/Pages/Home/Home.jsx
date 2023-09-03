import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react';
import './Home.css';
import arrleft from '../../media/arrow-left.png';
import arrright from '../../media/right-arrow.png';
import dir from '../../media/admins/Nurakynov_Serik_Maratovich.jpg';
import DG from '2gis-maps';

import address from '../../media/contactIcons/maps-and-flags.png';
import phone from '../../media/contactIcons/phone-call.png';
import fax from '../../media/contactIcons/fax.png';
import email from '../../media/contactIcons/email.png';
import time from '../../media/contactIcons/clock.png';

import linkedin from '../../media/social/linkedin.png';
import inst from '../../media/social/instagram.png';

const Map = () => {
    useEffect(() => {
        let map
        map = DG.map("map-container", {
            center: [43.1760, 76.9535],
            zoom: 20
        })



        DG.marker([43.1759, 76.9535]).addTo(map)
        return () => map && map.remove();
    }, []);
    return (
        <div className='mapMain'>
            <div className='map' id='map-container'>

            </div>
            <div className='mapContacts'>
                <div className='contact'>
                    <img className='contactIcon' src={address} />
                    <p className='contactText'>050020, Республика Казахстан, г.Алматы, Каменское плато, Садоводческое товарищество «Ионосфера» д.117</p>
                </div>
                <div className='contact'>
                    <img className='contactIcon' src={phone} />
                    <p className='contactText'>8(727) 380-30-54</p>
                </div>
                <div className='contact'>
                    <img className='contactIcon' src={fax} />
                    <p className='contactText'>8(727) 380-30-53</p>
                </div>
                <div className='contact'>
                    <img className='contactIcon' src={email} />
                    <p className='contactText'>ionos@ionos.kz, admion1@mail.ru</p>
                </div>
                <div className='contact'>
                    <img className='contactIcon' src={time} />
                    <p className='contactText'>пн-пт с 09:00 до 17:00, перерыв с 13:00 до 13:30</p>
                </div>
            </div>
        </div>
    );
}

const Home = () => {
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
        setAdministration([
            {
                id: 1,
                lastName: "Нуракынов",
                name: "Серик",
                middleName: "Маратович",
                img: dir,
                position: "Директор"
            },
            {
                id: 2,
                lastName: "Искаков",
                name: "Берик",
                middleName: "Амангельдыевич",
                img: dir,
                position: "Заместитель директора по НИР"
            },
            {
                id: 3,
                lastName: "Искакова",
                name: "Гульнара",
                middleName: "",
                img: dir,
                position: "Ученый секретарь"
            },
        ]);
    }, []);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className='homeWrapper'>
            <div className='homeBanner'>
                <h1>Welcome to Our Website!</h1>
                <p>Enjoy your stay here.</p>
            </div>
            <div className='homeEmployees'>
                <div>
                    <h2>Администрация универститета</h2>
                </div>
                <div className='employeesList'>
                    {administration.map((admin, index) => (
                        <div className='employeesItem' key={index}>
                            <img className='employeesImg' src={admin.img} />
                            <h4>{`${admin.lastName} ${admin.name} ${admin.middleName} `}</h4>
                            <p>{admin.position}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='homeMainNews'>
                <div>
                    <div className='newsHeader'>
                        <h2>Последние новости</h2>
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
                        <div className='otherNewsItem' key={index}>
                            <div><h5>{news.header}</h5></div>
                            <div>{`${news.publish_date.getDate()} ${months[news.publish_date.getMonth()]} ${news.publish_date.getYear()}`}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='homeMainTeam'>

            </div>
            <div className='homeMainMap'>
                <Map />
            </div>
            <div className='contactUs'>
                <div>
                    <div className='contactUsTop'>
                        <h1>Contact us</h1>
                        <div className='socialLinks'>
                            {socialLinks.map((social, index) => (
                                <div className='socialLink' key={index}>
                                    <Link to={social.link}><img className='socialIcon' src={social.img} /></Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <form>
                        <div className='contactUsNameEmail'>
                            <div>
                                <input type="text" id="name" name="name" required placeholder='name'/>
                            </div>
                            <div>
                                <input type="email" id="email" name="email" placeholder='email' required />
                            </div>
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder='message' required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
