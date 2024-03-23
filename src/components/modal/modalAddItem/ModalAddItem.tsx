import React, {useContext} from 'react';
import {BasketContext} from "../../../context/context";
import {Span, WrapperModal} from "./modalAddItem.Style";

export const ModalAddItem = () => {
    const {modalActive, currentHeadphones} = useContext(BasketContext)

    return (
        <WrapperModal $active={modalActive} $direction='column' $align='center' $justify='center'>
            Добавлено в корзину
            <br/>
            <Span>  {currentHeadphones?.title}</Span>
        </WrapperModal>
    );
};


