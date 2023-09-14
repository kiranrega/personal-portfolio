import React from 'react'
import classNames from 'classnames'
import '../styles/aboutmenu.css'
const AboutMenuItem = ({title, active, onclick}) => {
  return (
    <div className={classNames('title', {active})} onClick={onclick}>
        <h2 className='title'>{title}</h2>
    </div>
  )
}

export default AboutMenuItem