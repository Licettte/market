import React, {useContext} from 'react';
import {ModuleCardType} from "./ModalInfoItem";
import {
    Img,
    Span,
    SpanDiscount,
    StarSVG,
} from "../../main/MainCardStyle";
import {BasketContext} from "../../../context/context";
import {Flex} from "../../../styles";
import {ModalButton, ModalWrapper} from "./modalInfoItemStyle";


export const ModalCard = (card: ModuleCardType) => {
    const {addItem} = useContext(BasketContext)
    const {img, title, price, discount, rating,} = card
    return (
        <Flex>
            <ModalWrapper>
                <Img src={img} alt={img}/>
            </ModalWrapper>

            <Flex $direction='column' $margin='24px 78px' $justify='space-between'>
                <Span $type={"dark2XL"}> {title} </Span>
                <Span $type={"brightPrimary"}> {price}₽ </Span>
                {discount ? <SpanDiscount> {discount}₽</SpanDiscount> : ''}

                <div>
                    <StarSVG/>
                    <Span $type={"darkM"}> {rating}</Span>
                </div>
                Вес: 50.8 г
                <br/>
                Гарантия: 1 год
                <br/>
                Страна: Китай
                <br/>
                Сочетание тщательно продуманного дизайна, передовых технологий и кристально чистого звука.
                <br/>
                Благодаря чипу H1 могут работать в режиме телефонного разговора до 3 часов без подзарядки.
                <Flex>
                    <ModalButton onClick={() => addItem(card)}> Купить</ModalButton>
                </Flex>
            </Flex>

        </Flex>
    );
};

