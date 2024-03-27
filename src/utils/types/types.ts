import React, {Dispatch, ReactNode, SetStateAction} from "react";

export type BasketCardType = {
    img: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    id: number;
    quantity: number
}

export type MainCardType = {
    img: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    id: number;
    quantity: number;
    setOpenModal: React.Dispatch<React.SetStateAction<any>>;
    openModal: {
        isOpened: boolean,
        card: ModuleCardType
    }
}

export type BasketContextType = {
    headphones: any[];
    modalActive: boolean;
    currentHeadphones: any;
    addItem: (item: any) => void;
    removeItem: (id: number) => void;
    incrementItem: (id: number) => void,
    decrementItem: (id: number) => void,
}

export type BasketItem = {
    img: string;
    title: string;
    price: number;
    rate: number;
    id: number;
    quantity: number;
}

export type Children = {
    children: ReactNode
}

export type FlexType = {
    $direction?: string,
    $align?: string,
    $justify?: string,
    $margin?: string
    $padding?: string
}

export type FlexChildren = {
    children: ReactNode,
    $direction?: string,
    $align?: string,
    $justify?: string,
    $margin?: string
    $padding?: string
}
export type ModuleCardType = {
    img: string;
    title: string;
    price: number;
    discount: number;
    rating: number;
    id: number;
    quantity: number;
    setOpenInfoModal: any
}

export type ModalInfoType = {
    setOpenInfoModal: Dispatch<SetStateAction<any>>;
    openInfoModal: {
        isOpened: boolean,
        card: ModuleCardType
    }
}
