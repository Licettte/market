import styled from "styled-components";
import {
    BRIGHT_PRIMARY_COLOR,
    DARK_XL_COLOR,
    LIGHT_COLOR,
    FONT_BOLD_15,
    FONT_MEDIUM_15,
    FlexStyle,
    mobile
} from "../../../styles";
import {ReactComponent as VK} from '../../../svg/vk.svg';
import {ReactComponent as Telegram} from '../../../svg/telegram.svg';
import {ReactComponent as WhatsApp} from '../../../svg/whatsapp.svg';

export const FooterFlex = styled(FlexStyle)`
    @media (max-width: ${mobile}) {
        padding: 20px;
        gap: 14px;
        margin: 0 15px;
        font-size: 12px;
    }
    background: ${LIGHT_COLOR};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px 30px 0 0;
    height: 150px;
`;

export const Span = styled.span<{ $selected?: boolean }>`
    color: ${props => (props.$selected ? BRIGHT_PRIMARY_COLOR : DARK_XL_COLOR)};
    ${props => (props.$selected ? FONT_BOLD_15 : FONT_MEDIUM_15)};
    cursor: pointer;
    margin: 0 8px 0 0;
`;

export const Div = styled.div`
    @media (max-width: ${mobile}) {
        height: 88%;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

type SizeImage = {
    [key: string]: { width: string, height?: string, margin?: string };
};


const sizeImage: SizeImage = {
    default: {width: "30px", height: '30px', margin: "0 10px"},
    vk: {width: "38px", height: '30px', margin: "0 10px"},
    language: {width: "20px", height: "20px", margin: "0px 8px -5px 0px;"},
}


export const Img = styled.img<{ $type: string }>`
    @media (max-width: ${mobile}) {
        display: none;
    }
    ${props => sizeImage[props.$type]};
`;
export const SVGLink = styled.a`
`;

export const VKSVG = styled(VK)`
    @media (max-width: ${mobile}) {
        margin: 0 5px;
    }
    cursor: pointer;
    width: 38px;
    height: 30px;
    margin: 0 10px;
    fill: ${DARK_XL_COLOR};
    &:hover {
        fill: ${BRIGHT_PRIMARY_COLOR};
    }
`;
export const TelegramSVG = styled(Telegram)`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    fill: ${DARK_XL_COLOR};
    &:hover {
        fill: ${BRIGHT_PRIMARY_COLOR};
    }
`;
export const WhatsAppSVG = styled(WhatsApp)`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    fill: ${DARK_XL_COLOR};
    &:hover {
        fill: ${BRIGHT_PRIMARY_COLOR};
    }
`;

export const Logo = styled.h1`
    @media (max-width: ${mobile}) {
        display: none;
    }
`;
export const Language = styled.div`

`;
export const Social = styled.div`
    @media (max-width: ${mobile}) {
        display: flex;
        flex-direction: column;
        padding: 0;
    }
`;
