import React, {useContext} from "react";
import {BasketContext} from "../../../context/context";
import {SVGLink, BasketSVG, Counter, LogoLink, HeartSVG, HeaderContainer} from "./HeaderStyle";
import {PageRoutes} from "../../../utils";
import {useLocation} from "react-router-dom";

export const Header = () => {
    const path = useLocation();
    const {headphones} = useContext(BasketContext)

    const isPaymentPath =path.pathname === PageRoutes.PAYMENT

    return (
        <HeaderContainer $align='center' $padding='15px 0 0 0' $justify='space-between'>
            <LogoLink to='/'>QPICK</LogoLink>
            <nav>
                <SVGLink to={PageRoutes.FAVORITE}>
                    <HeartSVG to={PageRoutes.FAVORITE}/>
                    <Counter $payment={isPaymentPath}>2</Counter>
                </SVGLink>
                <SVGLink to={PageRoutes.BASKET}>
                    <BasketSVG/>
                    <Counter $payment={isPaymentPath}>{headphones.length}</Counter>
                </SVGLink>
            </nav>
        </HeaderContainer>
    );
}
