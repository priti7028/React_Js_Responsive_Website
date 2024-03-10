import React,{useEffect, useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from'../../assets/menu-icon.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const[sticky,setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })

    },[]);

  const [mobileMenu , setMobileMenu] = useState(false);
  const toggleMenu = () =>{
      mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`conatiner ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} className='logo'/>
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
        
            <li><Link to='part' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='jobs' smooth={true} offset={-260} duration={500}>Courses</Link></li>
            <li><Link to='project' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='Int_question' smooth={true} offset={-260} duration={500}>Programs</Link></li>
            <li><Link to='coding' smooth={true} offset={-260} duration={500}>Reviews</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar