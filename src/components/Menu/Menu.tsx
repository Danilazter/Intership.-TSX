import React, { useRef, useState } from 'react';

import Burger from './Burger';
import { StyledMenu, StyledLink } from './MenuStyled';

import { StyledFacebookIcon } from '../SocialIcons/SocialIcons';
import { StyledTelegramIcon } from '../SocialIcons/SocialIcons';
import { StyledIntagramIcon } from '../SocialIcons/SocialIcons';

import { useOnClickOutside } from '../Hooks/Hooks';
import { colors } from '../../styles/Global';

const Menu = () => {
    const [open, setOpen] = useState<boolean>(false);
    const node = useRef<HTMLDivElement>(null);
    const close = () => setOpen(false);

    useOnClickOutside(node, () => setOpen(false));

    return (
        <div ref={node}>
            <StyledMenu open={open}>
                <StyledLink onClick={() => close()}>Парковка</StyledLink>
                <StyledLink onClick={() => close()}>Страховка</StyledLink>
                <StyledLink onClick={() => close()}>Бензин</StyledLink>
                <StyledLink onClick={() => close()}>Обслуживание</StyledLink>
                <div>
            <StyledFacebookIcon color={colors.White} />
            <StyledIntagramIcon color={colors.White} />
            <StyledTelegramIcon color={colors.White} />
              </div>
            </StyledMenu>
            <Burger open={open} setOpen={setOpen} />
            
        </div>
    );
};

export default Menu;