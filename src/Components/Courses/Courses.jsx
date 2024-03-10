import React from 'react'
import './Courses.css';
import jobs_1 from '../../assets/jobs_1.png';
import jobs_2 from '../../assets/jobs_2.png';
import jobs_3 from '../../assets/jobs_3.png';
import job_icon_1  from '../../assets/job_icon_1.png';
import job_icon_2 from '../../assets/job_icon_2.png';
import job_icon_3 from '../../assets/job_icon_3.png';

const Courses = () => {
  return (
    <div className='jobs' >
        <div className='job'>
            <img src={jobs_1} alt=""  />
            <div className='caption'>
              <img src={job_icon_1} alt="" />
              <p>Python Fullstack</p>
            </div>
        </div>

        <div className='job'>
            <img src={jobs_2} alt="" />
            <div className='caption'>
              <img src={job_icon_2} alt="" />
              <p>Java Fullstack</p>
            </div>
        </div>

        <div className='job'>
            <img src={jobs_3} alt="" />
            <div className='caption'>
              <img src={job_icon_3} alt="" />
              <p>C/C++</p>
            </div>
        </div>
        


    </div>
  )
}

export default  Courses