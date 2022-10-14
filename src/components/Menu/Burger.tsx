import React from 'react';

import { StyledBurger } from './BurgerStyled';



export type Props = {
    open: boolean;
    setOpen: (v: boolean) => void;
};

const Burger = (props: Props) => (
    <StyledBurger
        open={props.open}
        onClick={() => props.setOpen(!props.open)}>
        <div />
        <div />
        <div />
</StyledBurger>
)

export default Burger;