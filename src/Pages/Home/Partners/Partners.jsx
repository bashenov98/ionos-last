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
            await axios.get('https://ionos-strapi.onrender.com/api/local-partners?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const resp = response.data.data;
                    const partners = resp.map(part => ({
                        img: part.attributes.Logo.data.attributes.formats.small ? part.attributes.Logo.data.attributes.formats.small.url : part.attributes.Logo.data.attributes.formats.thumbnail.url
                    }));

                    setLocal(partners)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();

        (async () => {
            await axios.get('https://ionos-strapi.onrender.com/api/international-partners?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const resp = response.data.data;
                    const partners = resp.map(part => ({
                        img: part.attributes.Logo.data.attributes.formats.small ? part.attributes.Logo.data.attributes.formats.small.url : part.attributes.Logo.data.attributes.formats.thumbnail.url
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