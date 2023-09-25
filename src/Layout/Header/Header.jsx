import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Logo from "../../media/ionos_logo-white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import headerData from "./header.data";
import languagesData from "./languages.data";

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
          <div className="headerTopContact">8(727) 380-30-54</div>
          <div className="headerTopContact">ionos@ionos.kz</div>
          {/* <p className="headerTopContact">8(727) 380-30-54</p>
          <p className="headerTopContact">ionos@ionos.kz</p> */}
        </div>
        <div className="headerTopLinks">
          <Link
            className="headerTopLink"
            to="https://www.gov.kz/memleket/entities/kazcosmos"
          >
            {t("committee")}
          </Link>
          <Link
            className="headerTopLink"
            to="https://dialog.egov.kz/blogs/1376256/posts"
          >
            {t("blog")}
          </Link>
        </div>
        <div className="headerLanguageButtons">
          {languagesData.map((item, i) => (
            <a onClick={() => changeLanguage(`${item}`)}>
              <div className="headerLanguageButton">
                <p
                  className="headerLanguageButtonText"
                  key={i}
                >
                  {item.toLocaleUpperCase()}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="headerBot">
        <div className="headerLogoDiv">
          <Link to="/"><img src={Logo} className='headerLogo' alt="logo" /></Link>
        </div>
        <div style={{width: "100%"}}>
          <nav>
            <ul className="headerBotTabs">
              {headerData.map((item, i) => (
                <li
                  onMouseEnter={() => setDropdownVisibility(item.index)}
                  onMouseLeave={() => setDropdownVisibility(0)}
                  key={i}
                >
                  <a class="dropdown-toggle" className="headerBotTab">{t(item.section)}</a>
                  <ul
                    class="dropdown-menu no-border-radius fadeIn animated"
                    style={{
                      display:
                        isDropdownVisible === item.index ? "block" : "none",
                      marginLeft: i===2? "0px" : i===3 && "-570px"
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
