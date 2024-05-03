import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import Logo from "../../media/logo_new_white.png";
import "bootstrap/dist/css/bootstrap.min.css";
import headerData from "./header.data";
import languagesData from "./languages.data";

import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import YoutubeIcon from "../../media/social/youtube-fill.svg";
import InstagramIcon from "../../media/social/instagram-fill.svg";
import FacebookIcon from "../../media/social/facebook-box-fill.svg";
import LinkedInIcon from "../../media/social/linkedin-box-fill.svg";

const Header = () => {
  const { t } = useTranslation();

  const [isDropdownVisible, setDropdownVisibility] = useState(0);

  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const windowWidth = window.innerWidth;

  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onMouseLeaveMobile = () => {
    setDropdownVisibility(0);
    setDrawerOpen(false);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = header.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      {windowWidth > 1080 && (
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
      )}
      <div className={`headerBot ${isSticky ? 'sticky' : ''}`} id="myHeader">
        <div className="headerLogoDiv">
          <Link to="/">
            <img src={Logo} className="headerLogo" alt="logo" />
          </Link>
        </div>

        {windowWidth > 1080 ? (
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
        ) : (
          <div style={{ width: "100%" }} className="drawerMobile">
            <Button
              type="primary"
              onClick={showDrawer}
              size="large"
              style={{ marginLeft: "100%", background: "white" }}
            >
              <MenuOutlined
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                }}
              />
            </Button>
            <Drawer
              placement="right"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              width={"80%"}
            >
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
              {headerData.map((item, i) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <a
                    key={i}
                    style={{
                      fontSize: "40px",
                      fontWeight: "500",
                      marginTop: "30px",
                    }}
                    onMouseEnter={() => setDropdownVisibility(item.index)}
                  // onMouseLeave={onMouseLeaveMobile}
                  >
                    {t(item.section)}
                  </a>
                  {isDropdownVisible === item.index &&
                    // {/* {isDropdownVisible === isDropdownVisible && */}
                    item.subSection.map((subsection, j) => (
                      <Link
                        className="droptab-link"
                        to={`/${item.section}/${subsection}`}
                        key={j}
                      >
                        <div key={j}>
                          {t(subsection)}
                        </div>
                      </Link>
                    ))}
                </div>
              ))}


              <div className="headerTopLinks">
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
                <Link
                  className="headerTopLink"
                  to="https://www.gov.kz/memleket/entities/kazcosmos/about?lang=ru"
                >
                  {t("committee")}
                </Link>
              </div>
              {isDropdownVisible === 0 && (
                <div className="footerMobile">
                  <p className="footerMobileText">Адрес: 050020, Республика Казахстан, г.Алматы,Каменское плато, Садоводческое товарищество «Ионосфера» д.117</p>
                  <p className="footerMobileText">Время работы: пн-пт с 09:00 до 17:00, перерыв с 13:00 до 13:30</p>
                  <p className="footerMobileText">Телефон: 8(727) 380-30-54</p>
                  <p className="footerMobileText">Факс: 8(727) 380-30-53</p>
                  <p className="footerMobileText">E-mail: ionos@ionos.kz</p>
                  <p className="footerMobileText">admion1@mail.ru</p>
                </div>)}
            </Drawer>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
