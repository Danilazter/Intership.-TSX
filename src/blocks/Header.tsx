import React from 'react'
import { StyledPlaceIcon } from '../components/SocialIcons/SocialIcons';

const Header = () => {
    return (
        <header>
             <div className='header__left'>
              <h1 className='header__text'>Need for drive</h1>
              <div className='myPlace'>
              <StyledPlaceIcon/>
                <p className='placeText'>Ульяновск</p>
                </div>
            </div>
        </header>
    );
};

export default Header;