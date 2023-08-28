import React, { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelop from '../assets/envelope.png'


import '../styles/nav.css'

export default function Nav ()  {
  const location = useLocation()

  const getNavPostionStyle = () => {
    switch(location.pathname){
      case '/':
        return 'nav-about';
        case '/skills':
        return 'nav-skills';
        case '/projects':
        return 'nav-projects';
        case '/contact':
        return 'nav-contact';
        default:
          return ''
    }
  }

  const getNavTitle = () => {
    switch(location.pathname){
      case '/':
        return 'About';
        case '/skills':
        return 'Skills';
        case '/projects':
        return 'Projects';
        case '/contact':
        return 'contact';
        default:
          return ''
    }
  }

  const navPostionClass = getNavPostionStyle()
  const navTitle = getNavTitle()

  const isCurrentPage = (navClass) => {
    return navClass === navPostionClass
  }

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass)
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link'
      return(
        <Link to={to} className={linkClass}>
          <img src={imgSrc} alt={altText}/>
          {isCurrent && <h1 className='page-title'>{navTitle}</h1>}
        </Link>
      )
  }
    return(
      <nav className={`nav ${navPostionClass}`}>
        { renderNavLink(
          '/',
          astronautHelmet,
          'astronaut helmet icon',
          'nav-about'
        )}
         { renderNavLink(
          '/skills',
          deadEye,
          'deadeye icon',
          'nav-skills'
        )}
         { renderNavLink(
          '/projects',
          stack,
          'stack icon',
          'nav-projects'
        )}
         { renderNavLink(
          '/contact',
          envelop,
          'envlop icon',
          'nav-contact'
        )}
      </nav>
    )
  }

