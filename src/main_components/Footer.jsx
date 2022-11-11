import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer--container'>
        <div className='footer-links--container flex'>
            
            <div className='flex footer-logo--container'>
                <img src="/images/logo_white.svg" alt="logo" />
                <div>
                    <ul className='socials flex'>
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaInstagram /></a>
                        </li>
                        <li><a href="#"><FaTwitter /></a></li>
                    </ul>
                </div>
            </div>

            <div>
                <h3>Community</h3>
                <ul>
                    <li><a href="#">NFT</a></li>
                    <li><a href="#">Tokens</a></li>
                    <li><a href="#">Landlords</a></li>
                    <li><a href="#">Discord</a></li>
                </ul>
            </div>

            <div>
                <h3>Places</h3>
                <ul>
                    <li><a href="#">Castle</a></li>
                    <li><a href="#">Farms</a></li>
                    <li><a href="#">Beach</a></li>
                    <li><a href="#">Learn more</a></li>
                </ul>
            </div>

            <div>
                <h3>About us</h3>
                <ul>
                    <li><a href="#">Road map</a></li>
                    <li><a href="#">Creators</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>
        </div>
        <p>&copy; 2022 Metabnb</p>
    </footer>
  )
}

export default Footer