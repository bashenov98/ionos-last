import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import job from '../../media/portfolio.png';
import email from '../../media/contactIcons/email.png';
import orcid from '../../media/digital-identity.png';


import './Staff.css';



const Staff = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [staff, setStaff] = useState([]);
    const employees = []

    useEffect(() => {
        (async () => {
            await axios.get('https://ionos-strapi.onrender.com/api/employees?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const emps = response.data.data;
                    const employees = emps.map(emp => ({
                        id: emp.id,
                        name: `${emp.attributes.Name} ${emp.attributes.Last_Name}`,
                        job: emp.attributes.Position ? emp.attributes.Position : "",
                        img: emp.attributes.Photo.data ? (emp.attributes.Photo.data[0].attributes.formats.small ? emp.attributes.Photo.data[0].attributes.formats.small.url : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png") : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png"
                    }));

                    setStaff(employees)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();
    }, []);

    return (
        <div className='staffBackground'>
            <div className='staffContainer'>
                <div className='staffHeader'>
                    <h1 className='staffHeaderText'>{t(location.pathname.slice(11))}</h1>
                </div>
                <div className='staffList'>
                    {staff.map((emp, index) => (
                        <Link className='link' to={`/institute/staff/${emp.id}`} key={index}>
                            <div className='staffItem' >
                                <img className='employeePhoto' src={emp.img} />
                                <h4 className='employeeNameText' >{emp.name}</h4>
                                <p className='employeePositionText'>{emp.job}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export const StaffDetail = () => {
    const { id } = useParams();

    const [employee, setEmployee] = useState();

    console.log(employee)

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchStaffDetail = async () => {
            await axios.get(`https://ionos-strapi.onrender.com/api/employees/${id}?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {

                    const n = response.data.data
                    console.log(n.attributes.Photo.data[0].attributes.formats.small.url)

                    setEmployee({
                        id: n.id,
                        name: `${n.attributes.Name} ${n.attributes.Last_Name} `,
                        job: n.attributes.Position,
                        email: n.attributes.Email ? n.attributes.Email : "",
                        orcid: n.attributes.Orcid_Link ? n.attributes.Orcid_Link : "",
                        photo: n.attributes.Photo.data ? n.attributes.Photo.data[0].attributes.formats.small.url : "https://res.cloudinary.com/ddsakxfcm/image/upload/v1693151526/small_1_335533421b.png"
                    })
                    setLoaded(true);
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchStaffDetail();
    }, []);

    return loaded && (
        <div className='staffDetail'>
            <div>
                {employee.photo && <img src={employee.photo} />}
            </div>
            <div className='employeeParams'>
                <h2>{employee.name}</h2>
                <div className='employeeParam'>
                    <img className='employeeIcon' src={job} />
                    <p>{employee.job}</p>
                </div>
                <div className='employeeParam'>
                    <img className='employeeIcon' src={email} />
                    <p>Email: <a href="">{employee.email}</a></p>
                </div>
                <div className='employeeParam'>
                    <img className='employeeIcon' src={orcid} />
                    <p>ORCID: <a href={employee.orcid}>{employee.orcid.substring(18)}</a></p>
                </div>
            </div>
        </div>
    );
}

export default Staff;

