import React from 'react'
import '../css/Banner.css'
import IconAccount from '../assets/account.png'
import Logo from '../assets/logo_novo.png'
import SearchBox from './SearchBox'

const Banner = () => {
    return (
        <div className='banner'>

             <header className='header' id='header'>
                <img src={IconAccount} alt='account icon'/>
                <button> SEUS DADOS</button>
             </header>

             <div className='banner-info' id='banner-info'>
                    <div className='logo-session'>
                        <img src={Logo} alt='logo'/>
                    </div>

                    <div className='info-session'>
                        <span id='main-title'>Top Podcast</span>
                        <span> Rankings</span>
                    </div>

                    <div className='info-session-description'>
                        <span>Top podcasts from podcast charts and players worldwide</span>
                    </div>

                    <SearchBox/>
             </div>

        </div>
    )
} 

export default Banner