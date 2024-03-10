import React from 'react'
import './About.css'
import projects_img from '../../assets/projects.png'
import play_icon from '../../assets/play-icon.png'


const About = ({setPlayState}) => {
  return (
    <div className='project'>
        <div className="project-left">
            <img src={projects_img} alt="" className='projects_img'/>
            <img src={play_icon} alt="" className='play-icon'onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className="project-right">
            <h3>About Us</h3>
            <h2>check it</h2>
            
            <p>Our Python Development Institution provides comprehensive training and mentorship to cultivate a new generation of 
              proficient Python developers. With cutting-edge curriculum designed by industry experts, hands-on projects, 
              and personalized guidance, we equip learners with the skills and confidence to excel in today's tech-driven world. Join us and unlock your potential to create impactful solutions
               and drive innovation with Python.</p>
        </div>
    </div>
  )
}

export default About