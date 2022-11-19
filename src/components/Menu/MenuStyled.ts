import styled from "styled-components";
import { colors } from '../../styles/Global';


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

transition = transform 0.3s ease-in-out;
transform: ${({ open }) =>
    (open ? "translateX(0)" : "translateX(-100%)")};

    @media (min-width:768px){
        display: flex;
        justify-content: center;

}

    @media (min-width: 1024px){
        
        width:${({ open }) => (open ? "60%"  : "none") };
        opacity: ${({ open }) => (open ? "1"  : "none") };
        } 
        @media (min-width: 1440px){
        
        width:${({ open }) => (open ? "50%"  : "none") };
        opacity: ${({ open }) => (open ? "1"  : "none") };
        }
`;

export const StyledLink = styled.a`
padding: 0.5rem 2rem;
font-size: 2rem;
color: ${colors.White};
text-decoration: none;
display: flex;

@media (min-width:768px){
    position: relative;
margin-left: 5rem;
}

:hover{
    color: ${colors.mainaccent};
    cursor: pointer;
}
 `;

export const StyledRight = styled.div<{ open: boolean }>`
 display: flex;
 position: fixed;
justify-content: center;
width: 100%;
height: 100vh;
left: 100%;
background-color: ${colors.Black};
display: ${({ open }) => (open ? "flex" : "none")};

@media (min-width: 1024px){
        width:${({ open }) => (open ? "100%"  : "none") };
        opacity: ${({ open }) => (open ? ".81" : "none") };
        }
`;

