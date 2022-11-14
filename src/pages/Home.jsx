import React from 'react'
import './home.css'
import Card from '../main_components/Card'

const Home = () => {

    const cards = () => {
        let cardsArr = []
        for(let i = 0; i < 8; i++){
            let card = <Card 
                            key={i}
                            image={`/images/NFTs/nft_${i}.png`} />
            cardsArr.push(card);
        }
        return cardsArr;
    }

  return (
    <main>
        <section className='intro--section flex'>
            <div className='intro-text--container'>
                <div className='intro-text'>
                    <h1>
                        Rent a <span>place</span> away from <span>Home</span> in the <span>metaverse</span> 
                    </h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                </div>
                
                {/* FOR FORMS */}
                <div className='form--container'>
                    <form action="#">
                        <label htmlFor="search">
                            <input 
                                type="text" 
                                name="search" 
                                id="search"
                                placeholder='Seach for locations' 
                            />
                        </label>
                        <button className='btn btn-search'>Search</button>
                    </form>
                </div>
            </div>
            
            {/* Hero section */}
            <div className='hero--container'>
                    <img src="/images/hero_1.png" alt="rent these places" />
            </div>
        </section>
        
        {/* PARTNERS */}
        <div className='partners--container flex'>
            <img src="/images/mbtoken.svg" alt="mbtoken" />
            <img src="/images/metamask.svg" alt="mbtoken" />
            <img src="/images/opensea.svg" alt="mbtoken" />
        </div>

        {/* SAMPLES SECTION */}
        <section className='sample--section'>
            <h2>Inspiration for your next adventure</h2>
            <div className='cards--container flex'>
                {cards()}
            </div>
        </section>

        {/* NFTS INTRO SECTION */}
        <section className='nft-intro--section flex'>
            <div className='intro-text'>
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <a href="#" className='btn btn-white'>Learn more</a>
            </div>
            <div className='hero--container'>
                <img src="/images/hero_2.svg" alt="#" />
            </div>
        </section>
    </main>
  )
}

export default Home