import React from 'react'
import '../css/Banner.css'
import IconAccount from '../assets/account.png'
import Logo from '../assets/logo_novo.png'
import SearchBox from '../sections/SearchBox'

const Banner = () => {

    const handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }

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

                    <div className='info-session-values'>
                        <div>
                            <h1>8514</h1>
                            <span>Podcasts</span>
                        </div>

                        <div>
                            <h1>6077</h1>
                            <span>Produtores</span>
                        </div>

                        <div>
                            <h1>1339</h1>
                            <span>Episódios</span>
                        </div>

                        <div>
                            <h1>19</h1>
                            <span>Categorias</span>
                        </div>
                       
                    </div>

                    {/* <h3>Primeiro update: <span> 20/07/2022</span> - Último update: <span>31/08/2022</span></h3> */}

                    <form className="search-box">


                    </form>
             </div>

        </div>
    )
} 

export default Banner