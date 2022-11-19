import React, { useRef, useState } from 'react';

import Burger from './Burger';
import { StyledMenu, StyledLink, StyledRight} from './MenuStyled';

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
                <StyledLink onClick={() => close()}>ПАРКОВКА</StyledLink>
                <StyledLink onClick={() => close()}>СТРАХОВКА</StyledLink>
                <StyledLink onClick={() => close()}>БЕНЗИН</StyledLink>
                <StyledLink onClick={() => close()}>ОБСЛУЖИВАНИЕ</StyledLink>
                <div>
            <StyledTelegramIcon color={colors.White} />
            <StyledFacebookIcon color={colors.White} />
            <StyledIntagramIcon color={colors.White} />
                </div>
                <StyledRight open={open}
                onClick={() => close()}
                />
            </StyledMenu>
            <Burger open={open} setOpen={setOpen} />
        </div>
    );
};

export default Menu;