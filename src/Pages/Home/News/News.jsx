import React, { useEffect } from "react";

import './News.css';

import image1 from '../../../media/news/image1.png';
import image2 from '../../../media/news/image2.png';
import image3 from '../../../media/news/image3.png';

export const News = () => {
    const news = [
        {
            id: 1,
            date: "26.11.2022",
            img: image1,
            header: "Конференция GIS day 2022 посвященная геоинформационным технологиям."
        },
        {
            id: 2,
            date: "06.03.2023",
            img: image3,
            header: "Празднование 30-летия казахстанской космонавтики"
        },
        {
            id: 3,
            date: "08.06.2023",
            img: image2,
            header: "Перерегистрация Института Ионосферы и изменение наименования"
        },
    ]

    useEffect(() => { news.reverse() }, []);

    return (
        <div className="newsContainer">
            <div className="newsHeader">
                <h1 className="newsHeaderText">ПОСЛЕДНИЕ НОВОСТИ</h1>
            </div>
            <div className="newsList">
                {news.map((newsItem, i) => (
                    <div className="newsItem" key={i}>
                        <div className="newsItemTop">
                            <div className="newsItemDate">
                                <p className="newsItemDateText">{newsItem.date}</p>
                            </div>
                            <div className="newsItemImgDiv">
                                <img className="newsItemImg" src={newsItem.img} />
                            </div>
                            <div className="newsItemButtonDiv">
                                <button className="newsItemButton">ПОДРОБНЕЕ</button>
                            </div>
                        </div>
                        <div className="newsItemBot">
                            <h1 className="newsItemHeader">{newsItem.header}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className="newsBot">
                <button className="newsBotButton">ВСЕ НОВОСТИ</button>
            </div>
        </div>
    );
}