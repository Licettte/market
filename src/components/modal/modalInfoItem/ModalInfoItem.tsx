import React, {Dispatch, SetStateAction} from 'react';
import styled from "styled-components";
import { FlexStyle,  LIGHT_COLOR} from "../../../styles";
import {ModalCard} from "./ModalCard";

export type ModuleCardType = {
    img: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    id: number;
    quantity: number;
}
export type ModalInfoType = {
    setOpenModal: Dispatch<SetStateAction<any>>;
    openModal: {
        isOpened: boolean,
        card: ModuleCardType
    }
}

export const ModalContainer = styled(FlexStyle)`
    background: rgba(0, 0, 0, 0.48);
    height: 100vh;
    width: 100vw;
    position: fixed;
    border: 0.2rem solid #1C1C27;
    font-size: 1.3em;
    font-weight: 600;
    top: 0;
    left: 0;
    pointer-events: all;
    cursor: pointer;
`;

export const ModalContent = styled(FlexStyle)`
    padding: 28px;
    border-radius: 80px;
    background-color: ${LIGHT_COLOR};
    height: 475px;
    width: 950px;
    cursor: default;
   
`;
export const ModalInfoItem = ({setOpenModal, openModal}: ModalInfoType) => {

    return (
        <ModalContainer $align='center' $justify='center' onClick={() => setOpenModal(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalCard key={openModal.card.id} {...openModal.card} />
            </ModalContent>

        </ModalContainer>
    );
};

