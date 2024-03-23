import styled from "styled-components";
import {ReactComponent as Star} from '../../svg/star.svg';
import {ReactComponent as Information} from '../../svg/info.svg';
import {
   BRIGHT_PRIMARY_COLOR,
   DARK_2XL_COLOR,
   DARK_M_COLOR,
   DARK_XL_COLOR,
   LIGHT_COLOR,
   PRIMARY_COLOR, FONT_SEMI_BOLD_17, mobile
} from "../../styles";
import {SVGLink} from "../layouts/header/HeaderStyle";

export const Wrapper = styled.div`
   @media (max-width: ${mobile}) {      
      margin: 15px 0 0 0;
   }
 
    background: ${LIGHT_COLOR};
    width: 334px;
    height: 400px;
    border-radius: 30px;
    padding: 15px 22px 32px;
    margin-top: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    ${FONT_SEMI_BOLD_17}
`;
export const Img = styled.img`
    width: 220px;
    height: 240px;
    display: block;
    margin: 0 auto;
`;
export const StarSVG = styled(Star)`
   fill: ${PRIMARY_COLOR};
   ${SVGLink}:hover & {
      fill: ${DARK_XL_COLOR};
   }
`;


export const InfoSVG = styled(Information)`
   cursor: pointer;
   width: 30px;
   height: 30px;
   margin: -4px 10px;
   fill: ${PRIMARY_COLOR};
   &:hover {
      fill: ${BRIGHT_PRIMARY_COLOR};
   }
`;


export const ButtonSVG = styled.button`
   
`;
export const Button = styled.button`
    color: ${DARK_2XL_COLOR};
    &:hover {
        color: ${BRIGHT_PRIMARY_COLOR};
    }
`;

type Color = {
   [key: string]: {color: string};
};

const color: Color = {
   brightPrimary: {color: BRIGHT_PRIMARY_COLOR},
   primary: { color: PRIMARY_COLOR},
   darkM: {color: DARK_M_COLOR},
   dark2XL: {color: DARK_2XL_COLOR},
}

export const Span = styled.span<{ $type: string }>`
    ${props => color[props.$type]};
`;

export const Div = styled.div`
    @media (max-width: ${mobile}) {
        margin: 30px 0 -2px 0;
       font-size: 22px;    
    }
    display: flex;
    justify-content: space-between;
    margin: 50px 0 -24px 0;
`;

export const SpanDiscount = styled.div`
   @media (max-width: ${mobile}) {
      font-size: 20px;
   }
    font-size: 13px;
    color: ${PRIMARY_COLOR};
    text-decoration: line-through;
    text-decoration-thickness: 0.5px;
    position: absolute;
    top: 20px;
    right: 2px;
`;
export const Discount = styled.div`
    display: flex;
    position: relative;
`;
