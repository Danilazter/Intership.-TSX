import React from 'react';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import { StyledPlaceIcon } from './components/SocialIcons/SocialIcons';
import { GlobalStyle } from './styles/Global'




function App() {
  return (
    <>
    <div className="App">
      <header>
        <div>
          <GlobalStyle />
          <Menu></Menu>
          <div className='header__left'>
              <h1 className='header__text'>Need for drive</h1>
              <div className='myPlace'>
              <StyledPlaceIcon />
                <p className='placeText'>Ульяновск</p>
                </div>
            </div>
          </div>
        </header>
        <main>
          <div className='heroBlock'>
          <h1 className="heroHeading">Каршеринг
            <br />
          <span className='secondHeading'>  Need for drive </span>
            </h1>
            <p className='heroText'> 
              Поминутная аренда авто твоего города
            </p>
            </div>
          <Button>Забронировать</Button>
          </main>
        <Footer />
        
        {/*
      <main>
        <h1>Каршеринг
          Need for drive
        </h1>
      </main>
      */}
      </div>
      </>
  );
}

export default App;
