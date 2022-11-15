import React from 'react'
import Card from '../main_components/Card'

import './place_to_stay.css'

const PlaceToStay = () => {
    // This returns places to stay cards
    const placeCards = () => {
        let cardsArr = []
        for(let i = 0; i < 16; i++){
            let card = <Card 
                            key={i}
                            image={`/images/NFTs/place/nft_${i}.png`} />
            cardsArr.push(card);
        }
        return cardsArr;
    }

  return (
    <div>
        <div className='categories--container flex'>
            <ul className='categories flex'>
                <li>Resturant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast City</li>
                <li>beach</li>
                <li>Cabin</li>
                <li>Off-grid</li>
                <li>Farm</li>
            </ul>
            <button className='btn btn-location flex'>
                location
                <img src="/images/settings.svg" alt="" />
            </button>
        </div>
        <div className='cards--container flex'>
                {placeCards()}
        </div>
    </div>
  )
}

export default PlaceToStay