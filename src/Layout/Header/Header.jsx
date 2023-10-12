import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Logo from "../../media/ionos_logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import headerData from "./header.data";
import languagesData from "./languages.data";

import YoutubeIcon from "../../media/social/youtube-fill.svg";
import InstagramIcon from "../../media/social/instagram-fill.svg";
import FacebookIcon from "../../media/social/facebook-box-fill.svg";
import LinkedInIcon from "../../media/social/linkedin-box-fill.svg";

const Header = () => {
  const { t } = useTranslation();

  const [isDropdownVisible, setDropdownVisibility] = useState(0);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerTopContacts">
          <Link
            style={{ paddingRight: "18px" }}
            to="https://youtube.com/@Instituteofionosphere?si=Ql_V8WJWj0ItWEO9"
          >
            <img src={YoutubeIcon} />
          </Link>
          <Link
            style={{ paddingRight: "18px" }}
            to="https://instagram.com/ionoskz?igshid=MzRlODBiNWFlZA=="
          >
            <img src={InstagramIcon} />
          </Link>
          <Link
            style={{ paddingRight: "18px" }}
            to="https://www.linkedin.com/company/ionos-kz/"
          >
            <img src={LinkedInIcon} />
          </Link>
          <Link to="https://m.facebook.com/p/100081835389053/">
            <img src={FacebookIcon} />
          </Link>
        </div>
        <div className="headerTopLinks">
          <Link
            className="headerTopLink"
            to="https://www.gov.kz/memleket/entities/kazcosmos/about?lang=ru"
          >
            {t("committee")}
          </Link>
        </div>
        <div className="headerLanguageButtons">
          {languagesData.map((item, i) => (
            <a onClick={() => changeLanguage(`${item}`)}>
              <div className="headerLanguageButton">
                <h1 className="headerLanguageButtonText" key={i}>
                  {item.toLocaleUpperCase()}
                </h1>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="headerBot">
        <div className="headerLogoDiv">
          <Link to="/">
            <img src={Logo} className="headerLogo" alt="logo" />
          </Link>
        </div>
        <div style={{ width: "100%" }}>
          <nav>
            <ul className="headerBotTabs">
              {headerData.map((item, i) => (
                <li
                  onMouseEnter={() => setDropdownVisibility(item.index)}
                  onMouseLeave={() => setDropdownVisibility(0)}
                  key={i}
                >
                  <a class="dropdown-toggle" className="headerBotTab">
                    {t(item.section)}
                  </a>
                  <ul
                    class="dropdown-menu no-border-radius fadeIn animated"
                    style={{
                      display:
                        isDropdownVisible === item.index ? "block" : "none",
                      marginLeft: i === 2 ? "0px" : i === 3 && "-570px",
                    }}
                  >
                    {item.subSection.map((subsection, i) => (
                      <li className="droptab" key={i}>
                        <Link
                          className="droptab-link"
                          to={`/${item.section}/${subsection}`}
                          key={i}
                        >
                          {t(subsection)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
