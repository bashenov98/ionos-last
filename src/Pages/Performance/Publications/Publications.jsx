import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Publications.css";

const Publications = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [loaded, setLoaded] = useState(false);
  const [publications, setPublications] = useState([]);

  const yearsData = ["2023", "2022", "2021", "2020"];

  useEffect(() => {
    const fetchPublications = async () => {
      await axios
        .get(`https://ionos-strapi.onrender.com/api/publications?populate=*`, {
          headers: {
            Authorization:
              "bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79",
          },
        })
        .then((response) => {
          const n = response.data.data;
          // console.log(n)
          // console.log(n.attributes.Photo.data[0].attributes.formats.small.url)

          // const pubs = n.attributes.publications.data
          const p = n.map((pub) => ({
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
          setPublications(p);
          setLoaded(true);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    };

    fetchPublications();
  }, []);

  // useEffect(() => {
  //     const fetchPublications = async () => {
  //         await axios.get('https://ionos-strapi.onrender.com/api/publications?populate=*', {
  //             headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
  //         })
  //             .then(response => {
  //                 const resp = response.data.data;

  //                 const publicationsData = resp.map(p => ({
  //                     id: p.id,
  //                     Citation: p.attributes.Citation,
  //                     Year: p.attributes.Year
  //                 }));
  //                 setPublications(publicationsData);

  //                 setLoaded(true);
  //             })
  //             .catch(error => {
  //                 console.error('Error fetching data: ', error);
  //             });
  //     }
  //     fetchPublications();
  // }, []);

  return (
    loaded && (
      <div>
        <div className="publicationsHeader">
          <h1 className="publicationsHeaderText">
            {t(location.pathname.slice(13))}
          </h1>
        </div>

        <div className="publications">
          {yearsData.map((year, i) => (
            <div key={i}>
              <h1 className="publicationYearText">{`${year} год:`}</h1>
              <ul className="publicationCitationText">
                {
                  publications
                    .filter((publication) => publication.year == year)
                    .map((pub, i) => (
                      <li key={i}>
                        {pub.authors.map((author, j) => (
                          <Link
                            to={`/institute/staff/${author.id}`}
                            key={j}
                          >{`${author.last_name} ${author.name[0]}, `}</Link>
                        ))}
                        {pub.title}
                        {`. // ${pub.journal} - ${pub.Year}. - Vol. ${pub.volume}. – No. ${pub.number}. – P. ${pub.pages}.`}
                        {pub.url && (
                          <Link to={pub.url}>{` DOI ${pub.URL}`}</Link>
                        )}
                      </li>
                    ))}
              </ul>

              {/* <ol>
                            {publications.filter((pub) => pub.Year == year).map((p, index) => (
                                <div key={index}>
                                    <li className='publicationCitationText'>{p.Citation}</li>
                                </div>
                            ))}
                        </ol> */}
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Publications;
