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
    <header>
      <div className="headerContainer">
        <div className="headerBot-left">
          <Link className="headerLogoLink" to='/' >
            <img className="logo" src={Logo} />
          </Link>
        </div>
        <div className="headerRight">

          <div>
            <div className="headerTop-right">
              <Link
                className="header-bastyk-links"
                to="https://www.gov.kz/memleket/entities/kazcosmos"
              >
                {t("committee")}
              </Link>
              <Link
                className="header-bastyk-links"
                to="https://dialog.egov.kz/blogs/1376256/posts"
              >
                {t("blog")}
              </Link>
            </div>
          </div>
          <div className="headerRightTop">
            <div>
              <nav>
                <ul className="links">
                  {headerData.map((item, i) => (
                    <li
                      onMouseEnter={() => setDropdownVisibility(item.index)}
                      onMouseLeave={() => setDropdownVisibility(0)}
                      key={i}
                    >
                      <a class="dropdown-toggle" className="tabs">{t(item.section)}</a>
                      <ul
                        class="dropdown-menu no-border-radius fadeIn animated"
                        style={{
                          display:
                            isDropdownVisible === item.index ? "block" : "none",
                        }}
                      >
                        {item.subSection.map((subsection, i) => (
                          <li className="droptab" key={i}>
                            <Link
                              className="droptab-link"
                              to={`/institute/${subsection}`}
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
            <div>
              <div className="headerTop-left">
                {languagesData.map((item, i) => (
                  <button
                    className="headerLangswitch"
                    onClick={() => changeLanguage("en")}
                    key={i}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="headerTop">

      <div className="headerBot-left">
          <Link className="headerLogoLink" to='/' >
            <img className="logo" src={Logo} />
          </Link>
        </div>
        
        <div className="headerTop-right">
          <Link
            className="header-bastyk-links"
            to="https://www.gov.kz/memleket/entities/kazcosmos"
          >
            {t("committee")}
          </Link>
          <Link
            className="header-bastyk-links"
            to="https://dialog.egov.kz/blogs/1376256/posts"
          >
            {t("blog")}
          </Link>
        </div>
      </div>
      <div className="headerBot">
        <div className="headerBot-left">
          <nav>
            <ul className="links">
              {headerData.map((item, i) => (
                <li
                  onMouseEnter={() => setDropdownVisibility(item.index)}
                  onMouseLeave={() => setDropdownVisibility(0)}
                  key={i}
                >
                  <a class="dropdown-toggle" className="tabs">{t(item.section)}</a>
                  <ul
                    class="dropdown-menu no-border-radius fadeIn animated"
                    style={{
                      display:
                        isDropdownVisible === item.index ? "block" : "none",
                    }}
                  >
                    {item.subSection.map((subsection, i) => (
                      <li className="droptab" key={i}>
                        <Link
                          className="droptab-link"
                          to={`/institute/${subsection}`}
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
        <div className="headerTop-left">
          {languagesData.map((item, i) => (
            <button
              className="headerLangswitch"
              onClick={() => changeLanguage("en")}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}
    </header>
  );
};

export default Header;
