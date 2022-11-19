import React from 'react';

import { StyledBurger } from './BurgerStyled';


export type UBurgerProps = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

const Burger = (props: UBurgerProps) => (
    <StyledBurger
        open={props.open}
        onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
        <p>Eng</p>
    </StyledBurger>
)

export default Burger;