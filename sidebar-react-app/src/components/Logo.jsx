import React from 'react'
import "../style/logo.css"
import LogoSite from '../assets/image/logo.png'
  
const Logo = () => {
  return (
    <div className='logo'>
     <div className="logo-sidebar">
      <img
        src={LogoSite}
        alt="Logo Site"
        className="logo-site"
        />
    </div>
</div>
  )
}

export default Logo
