import React, {  } from 'react'
import { Link } from 'react-router-dom'

function CustomLink({href,Children,...props}){
    const path = window.location.pathname
    
    return(
{/* <li className={path ===true ? 'active':''}>
    <Link to= {to} {...props}>{Children}</Link>
    </li> */}
    )
}

const Navbar = () => {
    const path = window.location.pathname
  return (
    <nav className='nav'>
    <Link to='/' className='site-title'>Shoelore: Enjoy Your Feetware</Link>
    {/* Shoelore           Pricing     About */}
    <ul>
        {/* <CustomLink href='/pricing'>Pricing</CustomLink>
        <CustomLink href='/about'>About</CustomLink> */}
    </ul>
    </nav>
  )
}

export default Navbar