import styled from "styled-components";
import {ReactComponent as DeleteBtn} from '../../svg/delete.svg';
import {
    FlexStyle,
    DARK_XL_COLOR,
    LIGHT_COLOR,
    FONT_SEMI_BOLD_15,
    FONT_SEMI_BOLD_17, PRIMARY_COLOR, BRIGHT_PRIMARY_COLOR, DARK_2XL_COLOR
} from "../../styles";

import {Link} from "react-router-dom";
export const Button = styled.button`
  color: DARK_2XL_COLOR;
`;
export const TotalContainer = styled(FlexStyle)`
    border-radius: 30px;
    width: 350px;
    height: 120px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    color: ${DARK_XL_COLOR};
    background: ${LIGHT_COLOR};
       
`;

export const LinkToPayment = styled(Link)`
    margin-top: 16px;
    width: 350px;
    height: 65px;
    color: ${LIGHT_COLOR};
    background: ${DARK_XL_COLOR};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    ${FONT_SEMI_BOLD_17};
    cursor: pointer;
    text-align: center;
    padding: 21px;
`;

export const Total = styled(FlexStyle)`
    ${FONT_SEMI_BOLD_15}
`;

export const CardBasketContainer = styled(FlexStyle)`
    margin: 20px 0 0 0;
`;

export const TotalPriceItem = styled.p`
    width: 74px;
    ${FONT_SEMI_BOLD_15}
`;
export const CardWrapper = styled.div`
    padding: 14px 28px 18px 20px;
    margin-bottom: 2.2rem;
    display: flex;
    justify-content: space-between;
    width: 633px;
    height: 218px;
    left: 165px;
    top: 126px;
    background: ${LIGHT_COLOR};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
`;
export const CardLeft = styled.div`
    display: flex;
    justify-content: space-between;
    justify-content: flex-start;
`;

export const CardCount = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CardImg = styled.img`
    width: 146px;
    height: 136px;
`;

export const Counter = styled.div`
    display: flex;
    align-items: center;
`;
export const ButtonMinus = styled.button`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: linear-gradient(#fff, #fff), ${PRIMARY_COLOR};    
    background-size: 50% 2px, 2px 50%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    margin: 0 25px 0 0;
    &:hover:enabled {
        background-color: ${BRIGHT_PRIMARY_COLOR};
        cursor: pointer;
    }
`;
export const QuantityItem = styled.h3`
    width: 10px;
    color: ${DARK_2XL_COLOR};
`;
export const ButtonPlus = styled.button`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),
    ${PRIMARY_COLOR};
    background-position: center;
    background-repeat: no-repeat;
    background-size: 50% 2px, 2px 50%;    
    border-radius: 50%;
    margin: 0 0 0 25px;
    &:hover {
        background-color: ${BRIGHT_PRIMARY_COLOR};
    }
    cursor: pointer;
`;

export const CardDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;
`;

export const CardTitle = styled.h4`
    margin-bottom: 12px;
`;
export const CardPrice = styled.h6`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CardRight = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;
    align-items: flex-end;
`;
export const ButtonDelete = styled.button`
    cursor: pointer;
    border-radius: 20px;
`;

export const DeleteImg = styled(DeleteBtn)`
    fill: #df6464;
    ${ButtonDelete}:hover & {
        fill: #df2222;
    }
`;

