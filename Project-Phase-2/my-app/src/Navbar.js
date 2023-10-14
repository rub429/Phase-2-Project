import React, {  } from 'react'
import { NavLink } from 'react-router-dom'

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
    const path = window.location.pathname
  return (
    <nav className='nav'>
    <NavLink to='/' className='site-title'>Shoelore: Enjoy Your Feetware</NavLink>
    {/* Shoelore           Pricing     About */}
    <ul>
        {/* <CustomLink href='/pricing'>Pricing</CustomLink>
        <CustomLink href='/about'>About</CustomLink> */}
    </ul>
    </nav>
  )
}

export default Navbar