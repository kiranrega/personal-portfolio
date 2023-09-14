import React from 'react'
import classNames from 'classnames'
import '../styles/aboutmenu.css'

const AboutSubHeading = ({title, content, menuItem, onClick, active}) => {
    const subContainerClass = `sub-container-${menuItem}`
  return (
    <div className={classNames(subContainerClass, {'active-subheading':active})} onClick={onclick}>
        <h3 onClick={onClick}>{title}</h3>
        <div className="p-container">{content}</div>
    </div>
  )
}

export default AboutSubHeading