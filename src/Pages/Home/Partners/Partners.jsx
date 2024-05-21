import React, { useEffect, useRef, useState } from "react";

import { Carousel } from 'react-responsive-carousel';



import './Partners.css';

import kz from '../../../media/partners/kz.png';
import foreign from '../../../media/partners/foreign.png';

import axios from 'axios';


export const Partners = () => {
    const [local, setLocal] = useState([]);
    const [inter, setInter] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const carouselRef = useRef(null);

    const carouselRefInt = useRef(null);

    useEffect(() => {
        (async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/local-partners?populate=*`, {
                headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
 }
            })
                .then(response => {
                    const resp = response.data.data;
                    const partners = resp.map(part => ({
                        img: part.attributes.Logo.data ? `${part.attributes.Logo.data.attributes.url}` : ""
                    }));

                    setLocal(partners)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();

        (async () => {
            await axios.get(`${process.env.REACT_APP_API_URL}/api/international-partners?populate=*` , {
                headers: { Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
 }
            })
                .then(response => {
                    const resp = response.data.data;
                    const partners = resp.map(part => ({
                        img: part.attributes.Logo.data ? `${part.attributes.Logo.data.attributes.url}` : ""
                    }));

                    setInter(partners)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();

        setLoaded(true);

        let i = 1;

        const interval = setInterval(() => {
            if (carouselRef.current) {
                const carouselItems = carouselRef.current.children;

                Array.from(carouselItems).forEach((item) => {
                    if (i < carouselItems.length) {
                        item.style.transform = `translateX(-${i * 100}%)`
                    }
                })

                if (i < carouselItems.length) {
                    i++;
                }
                else {
                    i = 0;
                }
            }
            if (carouselRefInt.current) {
                const carouselItems = carouselRefInt.current.children;

                Array.from(carouselItems).forEach((item) => {
                    if (i < carouselItems.length) {
                        item.style.transform = `translateX(-${i * 80}%)`
                    }
                })

                if (i < carouselItems.length) {
                    i++;
                }
                else {
                    i = 0;
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, []);




    return loaded && (
        <div className="partnersContainer">
            <div className="partnersDiv">
                <div className="partnersHeader">
                    <h1 className="partnersHeaderText">КАЗАХСТАНСКИЕ ПАРТНЕРЫ</h1>
                </div>
                <div className="partnersList" ref={carouselRef}>
                    {local.map((partner, i) => (
                        <div className="partnersItem" key={i}>
                            <img className="partnersItemImg" src={partner.img} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="partnersDiv">
                <div className="partnersHeader">
                    <h1 className="partnersHeaderText">ЗАРУБЕЖНЫЕ ПАРТНЕРЫ</h1>
                </div>
                <div className="partnersList"  ref={carouselRefInt}>
                    {inter.map((partner, i) => (
                        <div className="partnersItem" key={i}>
                            <img className="partnersItemImg" src={partner.img} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}