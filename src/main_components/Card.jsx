import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import './card.css'


const Card = ({image}) => {
  return (
    <div className='card'>
        <img src={image} alt="nft" />
        
        <div className='card-info flex'>
            <p>Desert king</p>
            <h5>1MBT per night</h5>
        </div>
        
        <div className='card-time flex'>
            <p>2345km away</p>
            <p>available for two weeks stay</p>
        </div>
        
        <div className='ratings'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
    </div>
  )
}

export default Card