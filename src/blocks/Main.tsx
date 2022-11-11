import React from 'react'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

const Main = () => {
    return (
        <div>
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
        </main>
        <Footer />
        </div>
  )
}

export default Main