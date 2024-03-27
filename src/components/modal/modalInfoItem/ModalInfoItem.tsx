import React from 'react';
import {ModalCard} from "./ModalCard";
import {ModalContainer, ModalContent} from "./modalInfoItemStyle";
import {ModalInfoType} from "../../../utils";

export const ModalInfoItem = ({setOpenInfoModal, openInfoModal}: ModalInfoType) => {
    return (
        <ModalContainer $align='center' $justify='center' onClick={() => setOpenInfoModal(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <ModalCard key={openInfoModal.card.id} {...openInfoModal.card} setOpenInfoModal={setOpenInfoModal}/>
            </ModalContent>
        </ModalContainer>
    );
};
