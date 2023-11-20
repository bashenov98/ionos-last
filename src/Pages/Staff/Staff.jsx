import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import job from "../../media/portfolio.png";
import email from "../../media/contactIcons/email.png";
import orcid from "../../media/digital-identity.png";

import "./Staff.css";
import { StepForwardFilled } from "@ant-design/icons";

const Staff = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [staff, setStaff] = useState([]);
  const employees = [];
  const langs = {
    kz: "kk-Cyrl-KZ",
    en: "en",
    ru: "ru-RU",
  }

  const getLocale = (key) => {
    return langs[key];
  }

  useEffect(() => {
    (async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/api/employees?populate=*&locale=${getLocale(i18n.language)}`, {
          headers: {
            Authorization:
              `bearer ${process.env.REACT_APP_API_TOKEN}`
,
          },
        })
        .then((response) => {
          const emps = response.data.data;
          const employees = emps.map((emp) => ({
            id: emp.id,
            name: `${emp.attributes.Name} ${emp.attributes.Last_Name}`,
            job: emp.attributes.Position ? emp.attributes.Position : "",
            isScienceWorker: emp.attributes.isScienceWorker ? emp.attributes.isScienceWorker : false,
            img: emp.attributes.Photo.data
              ? emp.attributes.Photo.data[0].attributes.formats.small
                ? emp.attributes.Photo.data[0].attributes.formats.small.url
                : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png"
              : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png",
          }));
          console.log(employees)

          setStaff(employees);
        })
        .catch((error) => {
          console.log("url" +process.env.REACT_APP_API_URL)
          console.error("Error fetching data: ", error);
        });
    })();
  }, [i18n.language]);

  return (
    <div className="staffBackground">
      <div className="staffContainer">
        <div className="staffHeader">
          <h1 className="staffHeaderText">{t('mainScienceStaff')}</h1>
        </div>
        <div className="staffList">
          {staff.filter((employee) => employee.isScienceWorker == true).map((emp, index) => (
            <Link
              className="link"
              to={`/institute/staff/${emp.id}`}
              key={index}
            >
              <div className="staffItem">
                <img className="employeePhoto" src={emp.img} />
                <h4 className="employeeNameText">{emp.name}</h4>
                <p className="employeePositionText">{emp.job}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="staffHeader">
          <h1 className="staffHeaderText">{t('adminAndTechnicalStaff')}</h1>
        </div>
        <div className="staffList">
          {staff.filter((employee) => employee.isScienceWorker == false).map((emp, index) => (
            <Link
              className="link"
              to={`/institute/staff/${emp.id}`}
              key={index}
            >
              <div className="staffItem">
                <img className="employeePhoto" src={emp.img} />
                <h4 className="employeeNameText">{emp.name}</h4>
                <p className="employeePositionText">{emp.job}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const StaffDetail = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState();
  const [publications, setPublications] = useState([]);
  const [projects, setProjects] = useState([]);

  console.log(employee);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchStaffDetail = async () => {
      await axios
        .get(
          `${process.env.REACT_APP_API_URL}/api/employees/${id}?populate[publications][populate][0]=Authors&populate[Photo][populate][1]=data&populate[projects][populate][2]=Image&populate[laboratory][populate][3]=data`,
          {
            headers: {
              Authorization:
                `Bearer ${process.env.REACT_APP_API_TOKEN}`
,
            },
          }
        )
        .then((response) => {
          const n = response.data.data;
          // console.log(n.attributes.Photo.data[0].attributes.formats.small.url)

          setEmployee({
            id: n.id,
            name: `${n.attributes.Name} ${n.attributes.Last_Name} `,
            job: n.attributes.Position,
            email: n.attributes.Email ? n.attributes.Email : "",
            orcid: n.attributes.Orcid_Link ? n.attributes.Orcid_Link : "",
            photo: n.attributes.Photo.data
              ? n.attributes.Photo.data[0].attributes.formats.small.url
              : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png",
          });
          const pubs = n.attributes.publications.data;
          const p = pubs.map((pub) => ({
            year: pub.attributes.Year,
            authors: pub.attributes.Authors.data.map((author) => ({
              last_name: author.attributes.Last_Name,
              name: author.attributes.Name,
              middle_name: author.attributes.Middle_Name
                ? author.attributes.Middle_Name
                : "",
              id: author.id,
            })),
            title: pub.attributes.Title,
            journal: pub.attributes.Journal,
            volume: pub.attributes.Volume,
            number: pub.attributes.Number,
            pages: pub.attributes.Pages,
            url: pub.attributes.url,
          }));
          const pros = n.attributes.projects.data;
          const ps = pros.map((pro) => ({
            header: pro.attributes.Header,
            date_end: pro.attributes.Date_End,
            image: pro.attributes.Image.data
              ? pro.attributes.Image.data.url
              : null,
          }));
          setProjects(ps);
          setPublications(p);
          setLoaded(true);
          console.log(ps);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    fetchStaffDetail();
  }, []);

  return (
    loaded && (
      <div className="staffDetail">
        {employee.photo && <img src={employee.photo} className="staffDetailPersonImg" />}

        <div className="staffDetailRight">

          <div className="staffDetailRightContacts">
            <h2 style={{marginBottom: "20px"}}>{employee.name}</h2>
            <div className="employeeParam">
              <img className="employeeIcon" src={job} />
              <p>{employee.job}</p>
            </div>
            <div className="employeeParam">
              <img className="employeeIcon" src={email} />
              <p>
                Email: <a href="">{employee.email}</a>
              </p>
            </div>
            <div className="employeeParam">
              <img className="employeeIcon" src={orcid} />
              <p>
                ORCID:{" "}
                <a href={employee.orcid}>{employee.orcid.substring(18)}</a>
              </p>
            </div>
          </div>

          <div className="staffDetailRightSection">
            <h2>Участие в проектах</h2>
            <div>
              <h6>Текущие проекты</h6>
              {projects
                .filter((project) => {
                  let currentDate = new Date();
                  currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for a fair comparison

                  let itemDate = new Date(project.date_end);
                  return itemDate >= currentDate;
                })
                .map((p, k) => (
                  <div key={k}>{p.header}</div>
                ))}
            </div>
            <div>
              <h6>Завершенные проекты</h6>
              {projects
                .filter((project) => {
                  let currentDate = new Date();
                  currentDate.setHours(0, 0, 0, 0); // Set the time to 00:00:00 for a fair comparison

                  let itemDate = new Date(project.date_end);
                  return itemDate <= currentDate;
                })
                .map((p, k) => (
                  <div key={k}>{p.header}</div>
                ))}
            </div>
          </div>

          <div className="staffDetailRightSection">
              <h2 >Публикации</h2>
              <ul>
                {publications.map((pub, i) => (
                  <li key={i}>
                    {pub.authors.map((author, j) => (
                      <Link
                        to={`/institute/staff/${author.id}`}
                      >{`${author.last_name} ${author.name[0]}, `}</Link>
                    ))}
                    {pub.title}
                    {`. // ${pub.journal} - ${pub.Year}. - Vol. ${pub.volume}. – No. ${pub.number}. – P. ${pub.pages}.`}
                    {pub.url && <Link to={pub.url}>{` DOI ${pub.URL}`}</Link>}
                  </li>
                ))}
              </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Staff;
