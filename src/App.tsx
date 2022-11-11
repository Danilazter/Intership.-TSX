import React from 'react';
import { Slider } from './components/Slider/Slider';
import { GlobalStyle } from './styles/Global'
import image from './components/Assets/Images/ImagesSlider/pic-1.png'
import image2 from './components/Assets/Images/ImagesSlider/pic-2.png'
import image3 from './components/Assets/Images/ImagesSlider/pic-3.png'
import image4 from './components/Assets/Images/ImagesSlider/pic-4.png'
import Header from './blocks/Header';
import Main from './blocks/Main';
import Menu from './components/Menu/Menu';




function App() {
  return (
    <>
      <div className="App">
        <GlobalStyle />
        <Menu />
        <div className='mainPage'>
          <Header />
          <Main />
          <aside className='asideBlock'>
            <Slider      
              reviews={[
              { id: 1, heading: "Бесплатная парковка", text: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.", image },
              { id: 2, heading: "Страховка", text: "Полная страховка страховка автомобиля", image2 },
              { id: 3, heading: "Бензин", text: "Полный бак на любой заправке города за наш счёт", image3 },
              { id: 4, heading: "Обслуживание", text: "Автомобиль проходит еженедельное ТО", image4 },
            ]} />
          </aside>
        </div>
      </div>
    </>
  );
};

export default App;
