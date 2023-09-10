import React, { useEffect } from "react";

import { useTranslation } from "react-i18next";

import './ContactUs.css';

export const ContactUs = () => {
    const { t } = useTranslation();
    return (
        <div className="contactUsContainer">
            <div className="contactUsHeader">
                <h1 className="contactUsHeaderText">{t("contactUsHeader")}</h1>
            </div>
            <div className="contactUsForm">
                <div className='contactUsTop'>
                    {/* <div className='socialLinks'>
                            {socialLinks.map((social, index) => (
                                <div className='socialLink' key={index}>
                                    <Link to={social.link}><img className='socialIcon' src={social.img} /></Link>
                                </div>
                            ))}
                        </div> */}
                </div>
                <form  className="contactUsForm">
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
                    <div className="contactUsButtonDiv">
                        <button className='contactUsButton' type="submit">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    );
}