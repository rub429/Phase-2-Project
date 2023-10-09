import React, { Children } from 'react'

function CustomLink({href,Children,...props}){
    const path = window.location.pathname
    
    return
    (
<li className={path ===href ? 'active':''}><a href= {href} {...props}>{Children}</a></li>
    )
}

const Navbar = () => {
    const path = window.location.pathname
  return (
    <nav className='nav'>
    <a href='/' className='site-title'>Shoelore</a>
    {/* Shoelore           Pricing     About */}
    <ul>
        <CustomLink href='/pricing'>Pricing</CustomLink>
        <CustomLink href='/about'>About</CustomLink>
    </ul>
    </nav>
  )
}

export default Navbar