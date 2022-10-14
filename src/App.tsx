import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { colors } from './Global';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header__left{
  display: flex;
  flex-direction:column;
  text-align: end;

  margin: 1.9rem 1rem;
}

.header__text{
  color: ${colors.mainaccent};
  display: flex;
  justify-content: flex-end;
  align-item: flex-end;
}

.mapPlace{
  margin: 0.5rem 0;
  background-image:url("./images/place.png")  ;
}
`

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <GlobalStyle></GlobalStyle>
          <div className='header__left'>
          <h1 className='header__text'>Need for drive</h1>
            <span className='mapPlace'><img src="./images/place.png" alt='place' />Ульяновск</span>
            </div>
          </div>
        </header>
      {/* <header> */}
      <Menu></Menu>
        {/* <div className='nav'>
          <div className='headerText'>
          <h1>Need for drive</h1>
          </div>          
        </div>
            <p>Ульяновск</p> 
      </header>
      <main>
        <h1>Каршеринг
          Need for drive
        </h1>
        <Button />
      </main>
      <Footer/> */}
    </div>
  );
}

export default App;
