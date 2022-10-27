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
    top: -6px;
  }

  .myPlace{
    padding-right: 1rem;
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

@media (min-width:1024px){
  
/* Aside Block   */

.asideBlock{
  display: flex;
  height: 100vh;
}
}
`