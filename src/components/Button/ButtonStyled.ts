import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

const ButtonColor = {
    primary: css`
    color: #fff;
    background: linear-gradient(to right, #0EC261 0%, #039F67 100%);
    `,
}

const DISABLED = css`
cursor: not-allowed;
background: #d4d4d4;
color:#f5f5f5;
`;

export const Container = styled.button<ButtonProps> `
margin-top: 32px;
cursor: pointer;
width: 320px;
height:50px;
text-decoration: none;
border:none;
font-weight: medium;
font-size:18px;
outline:none;

${(props) => props.color && ButtonColor[props.color]}
${(props) => props.disabled && DISABLED}
`