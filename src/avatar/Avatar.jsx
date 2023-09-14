import React from 'react'
import PropsTypes from 'prop-types'
import '../styles/avatar.css'
import avatarImage from '../assets/avatar-image.png'

const Avatar = ({page}) => {
  const avatarClass = `avatar ${page}`
  const spanClass = `shadow-overlay-${page}`
  return (
    <>
    <span className={spanClass}></span>
    <img src={avatarImage} className={avatarClass} alt='avatar' />
    </>
  )
}

Avatar.PropsTypes = {
  page: PropsTypes.string.isRequired
}

export default Avatar