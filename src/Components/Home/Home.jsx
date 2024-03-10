import React from 'react'
import './Home.css';
import arrow from '../../assets/arrow.png';

const Home = () => {
  return (
    <div className='part container'>
        <div className='part-text'>
            <h1>Start learning and best practice with us.</h1>
            <p>Welcome to our Python Development Institution! We're dedicated to empowering individuals with the skills and knowledge needed to thrive in the world of Python programming.</p>
            <button className='btn'>Explore more <img src={arrow} alt="" /></button>    
        </div>
    </div>
  )
}

export default Home