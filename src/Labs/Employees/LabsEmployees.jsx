import './LabsEmployees.css';

import ProfileImg from 'media/labs/empty-profile.png';

const LabsEmployees = () => {
  return (
    <div className='labsEmployees'>
      <h1>СОТРУДНИКИ</h1>
      <div className='labsEmployeesMain'>
        <img src={ProfileImg} alt='profile-img'/>
        <img src={ProfileImg} alt='profile-img'/>
        <img src={ProfileImg} alt='profile-img'/>
        <img src={ProfileImg} alt='profile-img'/>
        <img src={ProfileImg} alt='profile-img'/>
      </div>
    </div>
  )
}

export default LabsEmployees
