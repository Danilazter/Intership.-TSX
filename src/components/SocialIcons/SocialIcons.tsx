import styled, { css } from "styled-components";

import { ReactComponent as FacebookIcon } from "../Assets/Images/Facebook_white.svg";
import { ReactComponent as InstagramIcon } from "../Assets/Images/Instagram_white.svg";
import { ReactComponent as TelegramIcon } from "../Assets/Images/Telegram_white.svg";
import { ReactComponent as PlaceIcon }  from "../Assets/Images/place.svg";

import { colors } from "../../styles/Global";


export type svgProps = {
    height?: string | number;
    color?: string;
    hoverColor?: string;
}


const svgSocialStyles = ({ height, color, hoverColor, ...props }: svgProps) => {
    return css`
        height: ${height || "32px"};
        & path {
            fill: ${color || colors.White};
        }
            &:hover path {
                fill: ${hoverColor || colors.mainaccent};
        }
        margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    `;
};

export type PlaceProps = {
    height?: string | number;
    color?: string;
}

const svgPlaceStyles = ({ height, color, ...props }: PlaceProps ) => {
    return css`
         height: ${height || "21px"};
        & path {
            fill: ${color || colors.White};
        }
        margin-right: 7px;
    `
}

export const StyledFacebookIcon = styled(FacebookIcon)`
${(props) => svgSocialStyles(props)};
`;

export const StyledIntagramIcon = styled(InstagramIcon)`
${(props) => svgSocialStyles(props)};
`;

export const StyledTelegramIcon = styled(TelegramIcon)`
${(props) => svgSocialStyles(props)};
`;
export const StyledPlaceIcon = styled(PlaceIcon)`
${(props) => svgPlaceStyles(props)};
`;
