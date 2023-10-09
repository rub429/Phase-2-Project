import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
    <a href='/' className='site-title'>Business Site</a>
    {/* Business site           pricing     about */}
    <ul>
        <li><a href='/pricing'>pricing</a></li>
        <li><a href='/about'>about</a></li>
    </ul>
    </nav>
  )
}

export default Navbar