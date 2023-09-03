import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


import './Staff.css';



const Staff = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const [staff, setStaff] = useState([]);
    const employees = []

    useEffect(() => {
        (async () => {
            await axios.get('http://localhost:1337/api/employees?populate=*', {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const emps = response.data.data;
                    const employees = emps.map(emp => ({
                        id: emp.id,
                        name: `${emp.attributes.Name} ${emp.attributes.Last_Name}`,
                        job: emp.attributes.Position,
                        img: emp.attributes.Photo.data[0].attributes.formats.small.url
                    }));
                    console.log(employees)
                    setStaff(employees)
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });
        })();
    }, []);

    return (
        <div className='staff'>
            <div>
                <h1 className='header'>{t(location.pathname.slice(11))}</h1>
                <div className='employees'>
                    {staff.map((emp, index) => (
                        <Link className='link' to={`/institute/staff/${emp.id}`}>
                            <div className='employee' key={index}>
                                <div>
                                    <img className='employeePhoto' src={emp.img} />
                                    <h4>{emp.name}</h4>
                                    <p>{emp.job}</p>
                                </div>
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

    

    useEffect(() => {
        const fetchStaffDetail = async () => {
            await axios.get(`http://localhost:1337/api/employees/12?populate=*`, {
                headers: { Authorization: 'bearer d0c2c9e6d1e901cb8c7d394af03f7095912bdc63c760c08a41f3e370594bd3a023701f1dac6ae7d4a72e45893371f9333094ecbe57bef695102d42864c700787f3951f929aefcbbb7799c344a0b8ba0d37b5bc0bd68cffe1d7926c59631a24fce5928c2f1765662e466a7fa03c6709e5fd4df774ded6e36d3cb17ebaeab43d79' }
            })
                .then(response => {
                    const n = response.data.data

                    setEmployee({
                        id: n.id,
                        name: `${n.attributes.Name} ${n.attributes.Last_Name} `,
                        job: n.attributes.Position, 
                        email: n.attributes.Email,
                        orcid: n.attributes.Orcid_Link,
                        photo: n.attributes.Photo.data[0].attributes.formats.small.url
                    })
                })
                .catch(error => {
                    console.error('Error fetching data: ', error);
                });

        }

        fetchStaffDetail();
    }, []);

    return (
        <div className='staffDetail'>
            <div>
                <img src={employee.photo} />
            </div>
            <div >

            </div>
        </div>
    );
}

export default Staff;

