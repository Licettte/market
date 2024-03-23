import {BasketContext} from "../../context/context";
import {BasketCard} from "./BasketCard";
import React, {useContext} from "react";
import {BasketCardType, PageRoutes} from "../../utils";
import {Flex,} from "../../styles";
import {LinkToPayment, Total, TotalContainer, TotalPriceItem, CardBasketContainer} from "./BasketCardStyle";


export const Basket = () => {
    const {headphones} = useContext(BasketContext)

    const totalPrice = headphones.reduce((accumulator: number, currentValue: BasketCardType) => accumulator + (currentValue.price * currentValue.quantity), 0)

    return (
        <div> {headphones.length > 0 ?
            <>
                <h2> Корзина </h2>
                <Flex $justify='space-between'>
                    <CardBasketContainer $direction="column">
                        <BasketCard/>
                    </CardBasketContainer>
                    <TotalContainer $direction="column">
                        <Flex $justify='space-between' $padding="22px 18px 0 22px">
                            <Total>ИТОГО</Total>
                            <TotalPriceItem> ₽ {totalPrice} </TotalPriceItem>
                        </Flex> <LinkToPayment to={PageRoutes.PAYMENT}>Перейти к оформлению</LinkToPayment>
                    </TotalContainer>
                </Flex>
            </>
            : <h3>нет добавленных товаров</h3>}
        </div>
    );
}
