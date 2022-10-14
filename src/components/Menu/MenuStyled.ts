import styled from "styled-components";
import { colors } from '../../Global';

export const StyledMenu = styled.nav<{ open: boolean }>`
top: 0;
left: 0;
height:100vh;
width: 100vw;
position: fixed;
background-color: ${colors.Black};
z-index: 1;
padding : 6rem 0;
flex-direction: column;
display: ${({ open }) => (open ? "flex" : "none")}

transition: transform 0.3s ease-in-out;
transform: ${({ open }) =>
    (open ? "translateX(0)" : "translateX(-100%)")};
`;



export const StyledLink = styled.a`
padding: 0.5rem 2rem;
font-size: 2rem;
color: ${colors.White};
text-decoration: none;
display: flex;
display-direction: column;

:hover{
    color: ${colors.mainaccent};
    cursor: pointer;
}
 `;
