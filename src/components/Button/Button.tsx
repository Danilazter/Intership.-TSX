import React from 'react'
import { Container } from './ButtonStyled' 


export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    color?: 'primary';
    disabled?: boolean;
}

const Button = ({
    onClick,
    children,
    color = "primary",
    disabled,
}: ButtonProps) => {
    return (
        <Container onClick={onClick} color={color} disabled={disabled}>
          {children}
        </Container>
    );
};

export default Button;