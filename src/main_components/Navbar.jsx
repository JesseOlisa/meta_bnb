import React, { useState, useEffect} from 'react'
import WalletModal from './WalletModal';
import { Link } from 'react-router-dom';
import './navbar.css'



const Navbar = () => {
  // State Declations
  const [isOpen, setIsOpen] = useState(false); //This state represents modal background
  const [walletOpen, setWalletOpen] = useState(false); //This state represents wallet modal
  const [navOpen, setNavOpen] = useState(false); //This state represents mobile nav

  // USE EFFECTS 
  // This effect prevents scrolling when modal is open
  useEffect(() => {
    if (isOpen == true) {
      document.body.parentElement.style.overflow = 'hidden';
    }
    else {
      document.body.parentElement.style.overflowY = 'scroll';
    }
  }, [isOpen])

  // This effect closes modal when click outside
  useEffect(() => {
    const closeOnClick = (e) => {
      let target = e.target.className
      if(target == 'link' || target == 'modal') {
        setIsOpen(false);
        setNavOpen(false);
        setWalletOpen(false);
      }
    }
    document.addEventListener('mousedown', closeOnClick)

    return () => document.removeEventListener('mousedown', closeOnClick)
  })

  //Dynamic style declaration
  let openNav = navOpen ? 'open' : '';
  let showWallet = walletOpen ? 'open-wallet' : '';

  // FUNCTION
  // This two function toggles modal background
  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }
  let modalBg = () => isOpen ? <div className='modal'></div> : '';
  
  // This toggles nav
  let toggleNav = () => {
    handleClick();
    setNavOpen(prev => !prev)
  }
  
  // This two function toggles wallet modal
  let openWalletModal = () => {
    setWalletOpen(true);
    setNavOpen(false);
    setIsOpen(true);
  }
  
  let closeWalletModal = () => {
    setWalletOpen(false);
    setIsOpen(false);
  }

  return (
    <>
      <header className='flex nav--container'>
          {modalBg()}
          <div className='logo--container'>
              <img src="/images/logo.png" alt="logo" />
          </div>
          <nav className={`nav-links--container flex ${openNav}`}>
              <Link to="/" className='link'>Home</Link>
              <Link to="place-to-stay" className='link'>Place to stay</Link>
              <Link to="/" className='link'>NFTS</Link> 
              <Link to="/" className='link'>Community</Link>
          </nav>
          <div className={`connect--wallet ${openNav}`}>
            <button className='btn btn--connect-wallet' onClick={openWalletModal}>Connect wallet</button>
          </div>
          <div className='menu--container flex' onClick={toggleNav}>
              <div className={`menu--btn ${openNav}`}></div>
          </div>
      </header>
        {/* wallet modal */}
        <WalletModal 
          closeModal={closeWalletModal}
          showWallet={showWallet}
          /> 
    </>
  )
}

export default Navbar