import React from 'react';
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import { Slider2 } from './components/Slider/Slider';
import { StyledPlaceIcon } from './components/SocialIcons/SocialIcons';
import { GlobalStyle } from './styles/Global'
import image from './components/Assets/Images/ImagesSlider/pic-1.png'
import image2 from './components/Assets/Images/ImagesSlider/pic-2.png'
import image3 from './components/Assets/Images/ImagesSlider/pic-3.png'
import image4 from './components/Assets/Images/ImagesSlider/pic-4.png'




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
          <span className='secondHeading'>Need for drive</span>
            </h1>
            <p className='heroText'> 
              Поминутная аренда авто твоего города
            </p>
            </div>
          <Button>Забронировать</Button>
          <aside className='asideBlock'>
            <Slider2 reviews={[
              { id: 1, heading:"Бесплатная парковка", text:"Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.", image},
              { id: 2, heading:"Страховка", text:"Полная страховка страховка автомобиля", image2},
              { id: 3, heading:"Бензин", text:"Полный бак на любой заправке города за наш счёт", image3},
              { id: 4, heading:"Обслуживание", text:"Автомобиль проходит еженедельное ТО", image4},
            ]} />
            {/* <Slider></Slider> */}
          </aside>
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
