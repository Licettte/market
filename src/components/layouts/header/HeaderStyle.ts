import styled from "styled-components";
import {Link} from "react-router-dom";
import {ReactComponent as Heart} from '../../../svg/heart.svg';
import {ReactComponent as Basket} from '../../../svg/basket.svg';
import {FONT_BOLD_25, FONT_MEDIUM_15} from "../../../styles/fonts";
import {BRIGHT_PRIMARY_COLOR, DARK_M_COLOR, DARK_XL_COLOR, LIGHT_COLOR} from "../../../styles/colors";
import {FlexStyle, mobile} from "../../../styles";

export const HeaderContainer = styled(FlexStyle)`
     @media (max-width: ${mobile}) {
        padding: 30px 0 0;
    }
`;

export const LogoLink = styled(Link)`
    @media (max-width: ${mobile}) {
        font-size: 40px;
        padding: 0;
    }
    ${FONT_BOLD_25}
    &:hover {
        color: ${BRIGHT_PRIMARY_COLOR};
    }
    @media (max-width: ${mobile}) {
        margin: 0 0 0 8px;
    }
`;

export const SVGLink = styled(Link)`
    margin: 22px;
    position: relative;
`;

export const Counter = styled.span<{ $payment?: boolean}>`
    @media (max-width: ${mobile}) {
        width: 36px;
        height: 33px;
        bottom: 32px;
        left: 34px;
        font-size: 24px;
        border-radius: 40px;
        padding: 3px;
    }

    border-radius: 10px;
    width: 18px;
    height: 18px;
    position: absolute;
    bottom: 15px;
    left: 15px;
    text-align: center;
    background-color: ${props => (props.$payment ? "#2690c5" : BRIGHT_PRIMARY_COLOR)};
    color: ${LIGHT_COLOR};
    ${FONT_MEDIUM_15}
`;

export const BasketSVG = styled(Basket)`
    @media (max-width: ${mobile}) {
        width: 50px;
        height: 50px;
    }
    
    fill: ${DARK_M_COLOR};
    ${SVGLink}:hover & {
        fill: ${DARK_XL_COLOR};
    }
`;

export const HeartSVG = styled(Heart)`
    @media (max-width: ${mobile}) {
        width: 50px;
        height: 50px;
    }
    fill: ${DARK_M_COLOR};

    ${SVGLink}:hover & {
        fill: ${DARK_XL_COLOR};
    }
`;
