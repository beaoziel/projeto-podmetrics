import React, {useState} from 'react'
import SelectBox from '../components/SelectBox'
import '../css/SearchBox.css'
import Apple from '../assets/apple.png'
import Spotify from '../assets/spotify.png'
import Deezer from '../assets/deezer.png'
import Google from '../assets/google.png'
import Podmetrics from '../assets/podmetrics.png'
import Amazon from '../assets/amazon.png'




const SearchBox = () =>{
    const [isActive, setIsActive] = useState(false);
      
    return(
            <form className='search-box'>

                     <div id='checkbox-line'>
                        <div>
                        <input type="radio" id="input-pod" name="input-box" value="podcasts"/>
                        <label for="podcasts">Top podcasts</label>
                        </div>
                        
                        <div>
                        <input type="radio" id="input-ep" name="input-box" value="episodes"/>
                        <label for="episodes">Top episódios</label>
                        </div>
                 
                    </div>

                    <SelectBox/>

                    <div id='plataform-line'>

                        <div className='plataform-line-left'>
                            <span>Plataformas</span>

                            <label>
                                <input type='checkbox' className='checkbox' value="Podmetrics"/>
                                <div class="icon">
                                        <img src={Podmetrics}/>
                                </div>
                            </label>

                            <label>
                                <input type='checkbox' className='checkbox'/>
                                <div class="icon">
                                        <img src={Apple}/>
                                </div>
                            </label>

                            <label>
                                <input type='checkbox' className='checkbox'/>
                                <div class="icon">
                                        <img src={Spotify}/>
                                </div>
                            </label>

                            <label>
                                <input type='checkbox' className='checkbox'/>
                                <div class="icon">
                                        <img src={Deezer}/>
                                </div>
                            </label>

                            <label>
                                <input type='checkbox' className='checkbox'/>
                                <div class="icon">
                                        <img src={Google}/>
                                </div>
                            </label>

                            <label>
                                <input type='checkbox' className='checkbox'/>
                                <div class="icon">
                                        <img src={Amazon}/>
                                </div>
                            </label>

                        </div>

                        <div className='plataform-line-right'>
                            <button className='btn'> Buscar </button>
                        </div>         

                    </div>

            </form>

    )
}

export default SearchBox
