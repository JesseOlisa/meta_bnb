import React, { useState, useEffect} from 'react'
import WalletModal from './WalletModal';
import './navbar.css'



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [walletOpen, setWalletOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    if (isOpen == true) {
      document.body.parentElement.style.overflow = 'hidden';
    }
    else {
      document.body.parentElement.style.overflow = 'scroll';
    }
  }, [isOpen])

  let openNav = navOpen ? 'open' : '';
  let showWallet = walletOpen ? 'open-wallet' : '';

  // functions
  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }
  let modalBg = () => isOpen ? <div className='modal'></div> : '';
  let toggleNav = () => {
    handleClick();
    setNavOpen(prev => !prev)
  }
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
              <img src="/images/logo.svg" alt="logo" />
          </div>
          <nav className={`nav-links--container flex ${openNav}`}>
              <a href="#">Home</a>
              <a href="#">Place to stay</a>
              <a href="#">NFTS</a>
              <a href="#">Community</a>
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