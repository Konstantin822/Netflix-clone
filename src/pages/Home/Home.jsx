import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/Play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className='home__hero'>
                <img src={hero_banner} className='home__hero-banner' />
                <div className='home__hero_caption'>
                    <img src={hero_title} className='home__hero_caption-img' />
                    <p>Discovering his ties to a secret ancient order, a young
                        man living in modern Istanbul embarks on a quest to save the
                        city from an immortal enemy.
                    </p>
                    <div className='home__hero_caption_btns'>
                        <button className='btn'><img src={play_icon} />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className='home__more-cards'>
                <TitleCards title={"Blockbuster Movies"} />
                <TitleCards title={"Only on Netflix"} />
                <TitleCards title={"Upcoming"} />
                <TitleCards title={"Tip Pics for You"} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
