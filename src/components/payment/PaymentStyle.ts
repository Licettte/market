import styled from "styled-components";
import {FlexStyle, FONT_MEDIUM_15, FONT_SEMI_BOLD_15, LIGHT_COLOR} from "../../styles";
import {ReactComponent as world} from '../../svg/world.svg';
import {ReactComponent as mir} from '../../svg/mir.svg';
export const Container = styled(FlexStyle)`
    ${FONT_SEMI_BOLD_15};
    font-family: 'Consolas', monospace;
`;
export const PaymentContainer = styled(FlexStyle)`
    position: relative;
    background: linear-gradient(rgba(39, 150, 206, 1), rgba(26, 75, 99, 1));
    padding: 25px;
    border-radius: 28px;
    max-width: 578px;
    width: 512px;
    height: 346px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.p`

`;
export const PaymentTitle = styled.p`
    padding: 15px;
    ${FONT_SEMI_BOLD_15};

`;
export const CartNumber = styled.input`
    text-align: center;
    border: none;
    background: rgb(255 255 255 / 65%);
    width: 270px;
    height: 40px;
    border-top-left-radius: 13px 13px;
    border-top-right-radius: 13px 13px;   ${FONT_MEDIUM_15};
    font-family: 'Consolas', monospace;
    z-index: 4;
`;
export const Month = styled.input`
    text-align: center;
    border: none;
    background: rgb(255 255 255 / 65%);
    width: 130px;
    height: 40px;
    margin: 0 10px 0 0;
    border-bottom-left-radius: 13px 13px;
    ${FONT_MEDIUM_15};
    font-family: 'Consolas', monospace;
    z-index: 4;
`;
export const CVC = styled.input`
    text-align: center;
    border: none;
    background: rgb(255 255 255 / 65%);
    width: 130px;
    height: 40px;
    border-bottom-right-radius: 13px 13px;
    ${FONT_MEDIUM_15};
    font-family: 'Consolas', monospace;
    z-index: 4;
`;

export const Pay = styled.button`
    margin: 15px 0 340px;
    width: 513px;
    height: 50px;
    border-radius: 15px;
    background-color: #1b4f68;   
    ${FONT_SEMI_BOLD_15};
    color: ${LIGHT_COLOR}
`;


export const Paid = styled(FlexStyle)`
    background-color: #2690c5;
    width: 350px;
    height: 350px;
    border-radius: 20px 20px;
    color: ${LIGHT_COLOR};;
`;

export const SpanNumber = styled.span`
    position: absolute;
    top: 95px;    
    color: #b8d1e5;
    font-size: 1em;
`;
export const SpanMonth = styled.span`    
    position: absolute;
    bottom: 90px;
    left: 122px;
    color: #b8d1e5;
    font-size: 1em;
    width: 134px;
`;


export const SpanCVC = styled.span`
    position: absolute;
    bottom: 90px; 
    right: 114px;
    color: #b8d1e5;
    font-size: 1em;
    width: 134px;
`;


export const CartInfo= styled(FlexStyle)`
    width: 268px;
`;

export const ImgCredit = styled(world)`
    position: absolute;
    width: 100%;
    z-index: 1;
`;
export const ImgMir = styled(mir)`
    position: absolute;
    width: 100%;
    z-index: 1;
    top: 28px;
    right: 160px
`;

