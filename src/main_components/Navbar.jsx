import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header className='flex nav--container'>
        <div className='logo--container'>
            <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav className='nav-links--container flex'>
            <a href="#">Home</a>
            <a href="#">Place to stay</a>
            <a href="#">NFTS</a>
            <a href="#">Community</a>
        </nav>
        <div className='connect--wallet'>
        <a href="#" className='btn btn--connect-wallet'>Connect wallet</a>
        </div>
    </header>
  )
}

export default Navbar