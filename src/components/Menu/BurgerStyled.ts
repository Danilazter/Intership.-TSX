import styled from "styled-components";

import { colors } from "../../styles/Global";

export const StyledBurger = styled.button<{ open: boolean }>`
position: fixed;
left: 9vw;
top: 9vw;
width: 100%;
height: 2rem;
padding:0;
background: transparent;

display: flex;
flex-direction: column;
justify-content: space-around;
border:none;
cursor: pointer;
outline: none;
z-index: 1;

//  @media (max-width: 600px){
//         left: ${({ open }) => (open ? "initial" : "3vw")};
//         right: ${({open}) => (open ? "2vw" : "initial")}
//     }


div{
    position: relative;
    width: 1.5rem;
    height: 0.25rem;
    border-radius: 1rem;
    background-color: ${({ open }) =>
        open ? colors.White : colors.Black};
        
    transition: all 0.3s linear;
    transform-origin: -3px;

    :first-child {
        transform: ${({ open }) =>
    (open  ? "rotate(45deg)" : "rotate(0)")  };
    }
    :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1") };
    transform: ${({ open }) => 
        (open ? "translateX(5px)":"translateX(0)")};
    }
    :nth-child(3) {
        transform: ${({ open }) =>
            (open  ? "rotate(-45deg)" : "rotate(0)")}
    }
   
}`;

