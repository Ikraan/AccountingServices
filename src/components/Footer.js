import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <>
    <div className='footer-container'>
      <p>
      Contact Us </p>
      <ul className='links'>
        <Link 
        className='social-icon-link linkedin'
        to='https://www.linkedin.com/in/ikraanahmed/'
        target='_blank'
        aria-label='Linkedin' >
          <i className='fab fa-linkedin'/>
        </Link>
        <Link 
        className='social-icon-link github'
        to='https://github.com/Ikraan/'
        target='_blank'
        aria-label='Github' >
          <i className='fab fa-github'/>
        </Link>
        <Link 
        className='social-icon-link facebook'
        to='https://www.facebook.com/ikraam.ahmed.9/'
        target='_blank'
        aria-label='Facebook' >
          <i className='fab fa-facebook'/>
        </Link>
        <Link 
        className='social-icon-link address-book'
        to='mailto:Ikraan-Ahmed@outlook.com'
        target='_blank'
        aria-label='microsoft' >
          <i className='fa fa-address-book'/>
          
        </Link>
      </ul>
    </div>
    
    </> 
  )
}

export default Footer;