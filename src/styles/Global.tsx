import { createGlobalStyle } from "styled-components";

export const colors = {
  yellowmellow: "#fbe69b",
  lightbrown: "#be8b7b",
  pearl: "#fdf2e9",
  lightblue: "#93CEF0",
  mainaccent: "#0EC261",
  Blue: "#007BFF",
  Black: "#121212",
  Gray: "#999999",
  Gray_light: "#EEEEEE",
  White: "#FFF",
};

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


/* Header Block   */

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
  align-items: flex-end;
}

.myPlace{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 0.5rem;
}

.placeText{
  font-size: 1rem;
  font-weight: normal;
  color: ${colors.Gray};
}

/* Hero Block   */


.heroBlock{
padding: 0 2rem;
}

.heroHeading{
  font-size: 32px;
  font-weight: bold;
  color: ${colors.Black};
}

.secondHeading{
  color: ${colors.mainaccent};
}

.heroText{
  padding-top: 16px;
  font-size: 18px;
  font-weight: lignt;
  color: ${colors.Gray};
}


/* MEDIA Hero Block   */


@media (min-width:768px){
  .header__text{
    position: absolute;
    margin-left: 5rem;
  }

  .myPlace{
    position: relative;
    right: 1rem;
    
  }

  .heroBlock{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4rem;
    margin-top: 228px;
  }

  .heroHeading{
    font-size: 70px;
  }

  .heroText{
    font-size: 26px;
    margin-left: 2px;
  }
}

@media (min-width: 1024px){
  .mainPage{
  display: flex;
  flex-direction: row;
}

/* Aside Block   */

.asideBlock{
  position: absolute;
  display: flex;
  height: 100%;
  width: 40%;
  right: 0px;
}

  .myPlace{
    left: 30rem;
    top: 0.2rem;
    @media (min-width:1150px){
      left: 34rem;
    }
    @media (min-width: 1280px){
      left: 38rem;
    }
    @media (min-width:1370px){
      left:41rem;
    }
  }

  .heroBlock{
    position: relative;
   right: 7.8rem;
  }
}
 @media (min-width:1440px){

  .asideBlock{
    width: 50%;
  }
  
  .header__text{
    left : 3rem;
  }
  
  .myPlace{
    left: 35rem;
  }

  .heroBlock{
    right: 6rem;
  }

 }
`

