import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <div className='nav'>
          <Navbar />
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
