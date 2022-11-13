import React, { useState, useEffect} from 'react'
import './navbar.css'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen == true) {
      document.body.parentElement.style.overflow = 'hidden';
    }
    else {
      document.body.parentElement.style.overflow = 'scroll';
    }
  }, [isOpen])

  
  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }
  let open = isOpen ? 'open' : '';
  let modalBg = () => isOpen ? <div className='modal'></div> : '';

  return (
    <header className='flex nav--container'>
        {modalBg()}
        <div className='logo--container'>
            <img src="/images/logo.svg" alt="logo" />
        </div>
        <nav className={`nav-links--container flex ${open}`}>
            <a href="#">Home</a>
            <a href="#">Place to stay</a>
            <a href="#">NFTS</a>
            <a href="#">Community</a>
        </nav>
        <div className={`connect--wallet ${open}`}>
          <a href="#" className='btn btn--connect-wallet'>Connect wallet</a>
        </div>
        <div className='menu--container flex' onClick={handleClick}>
            <div className={`menu--btn ${open}`}></div>
        </div>
    </header>
  )
}

export default Navbar