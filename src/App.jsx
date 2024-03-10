import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Reviews from './Components/Reviews/Reviews'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import About from './Components/About/About'
import Programs from './Components/Programs/Programs'

const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
        <Title subTitle='Courses' title='Check It & Join Now'/>
        <Courses/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Our Programs' title='Check It'/>
        <Programs/>
        <Title subTitle='Reviews' title='What Students Says'/>
        <Reviews/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App