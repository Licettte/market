import React, {useContext} from "react";
import {BasketContext} from "../../context/context";
import {BasketItem} from "../../utils";
import {
    ButtonDelete,
    ButtonMinus,
    ButtonPlus,
    CardCount, CardDescription,
    CardImg,
    CardLeft, CardPrice, CardRight, CardTitle,
    CardWrapper,
    Counter, DeleteImg,
    QuantityItem, TotalPriceItem
} from "./BasketCardStyle";

export const BasketCard = () => {

    const {removeItem, incrementItem, decrementItem, headphones} = useContext(BasketContext)

    return (
        <>
            {headphones.map((card: BasketItem) => (
                <CardWrapper key={card.id}>
                    <CardLeft>
                        <CardCount>
                            <CardImg src={card.img} alt={card.title}/>
                            <Counter>
                                <ButtonMinus
                                    disabled={card.quantity === 1}
                                    aria-label='button to decrease the amount of goods in the cart'
                                    onClick={() => decrementItem(card.id)}
                                ></ButtonMinus>
                                <QuantityItem> {card.quantity}</QuantityItem>
                                <ButtonPlus
                                    aria-label='button to increase the amount of goods in the cart'
                                    onClick={() => incrementItem(card.id)
                                    }
                                ></ButtonPlus>
                            </Counter>
                        </CardCount>
                        <CardDescription>
                            <CardTitle> {card.title}</CardTitle>
                            <CardPrice>        {card.price} ₽ </CardPrice>
                        </CardDescription>
                    </CardLeft>

                    <CardRight>
                        <ButtonDelete
                            aria-label='button to delete goods in the cart'
                            onClick={() => removeItem(card.id)}
                        >
                            <DeleteImg/>
                        </ButtonDelete>
                        <TotalPriceItem>
                            {card.quantity * card.price} ₽
                        </TotalPriceItem>
                    </CardRight>
                </CardWrapper>
            ))}
        </>
    )
}
