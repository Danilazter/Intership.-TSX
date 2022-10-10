import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`

function App() {
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      <header>
      <Menu></Menu>
        <div className='nav'>
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
      <Footer/>
    </div>
  );
}

export default App;
