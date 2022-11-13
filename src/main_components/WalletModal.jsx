import React from 'react'
import { GrClose } from 'react-icons/gr'
import { BsChevronRight } from 'react-icons/bs'
import './walletmodal.css'

const WalletModal = ({closeModal, showWallet}) => {
  return (
    <div className={`wallet--modal ${showWallet}`}>
        <div className='wallet--header flex'>
          <h3>Connect Wallet</h3>
          <GrClose className='close--btn' onClick={() => {closeModal()}}/>
        </div>
        <div className='wallet--body'>
          <p>Choose your preferred wallet:</p>
          {/* {metamask wallet} */}
          <a href="#" className='wallet-card flex'>
            <img src="/images/metamask_icon.svg" alt="metamask" />
            <h3>Metamask</h3>
            <BsChevronRight className='chevron'/>
          </a>
          {/* wallet connect */}
          <a href="#" className='wallet-card flex'>
            <img src="/images/wallet_connect.svg" alt="wallet connect" />
            <h3>WalletConnet</h3>
            <BsChevronRight className='chevron'/>
          </a>
        </div>
      </div>
  )
}

export default WalletModal