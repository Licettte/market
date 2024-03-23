import  {createContext, useEffect, useState} from 'react';
import {BasketContextType, Children, MainCardType} from "../utils";

const defaultState = {
    headphones: [],
    modalActive: false,
    currentHeadphones: [],
    addItem: (item: any) => {
    },
    removeItem: (id: number) => {
    },
    incrementItem: (id: number) => {
    },
    decrementItem: (id: number) => {
    },
};

export const BasketContext = createContext<BasketContextType>(defaultState);
export const ContextProvider = ({children}: Children) => {

    const [headphones, setHeadphones] = useState<MainCardType[]>([])
    const [modalActive, setModalActive] = useState<boolean>(false)
    const [currentHeadphones, setCurrentHeadphones] = useState<MainCardType | undefined>()

    useEffect(() => {
        const timeId = setTimeout(() => {
            setModalActive(false)
        }, 700)
        return () => {
            clearTimeout(timeId)
        }
    }, [headphones]);
    const addItem = (item: MainCardType) => {
        setModalActive(true)
        setCurrentHeadphones(item)
        const itemIndex = headphones.findIndex(
            (card) => card.id === item.id
        );
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setHeadphones([...headphones, newItem])
        } else {
            const newOrder = headphones.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setHeadphones(newOrder);
        }
    }
    const removeItem = (id: any) => {
        setHeadphones(headphones.filter(item => item.id !== id))
    }

    const incrementItem = (id: number) => {
        const newOrder = headphones.map((el) => {
            if (el.id === id) {
                const newQuantity = el.quantity + 1;
                return {
                    ...el,
                    quantity: newQuantity,
                };
            } else {
                return el;
            }
        });
        setHeadphones(newOrder);
    }
    const decrementItem = (id: number) => {
        const newOrder = headphones.map((itemOrder) => {
            if (
                itemOrder.id === id &&
                itemOrder.quantity > 1
            ) {
                const newQuantityItemOrder = itemOrder.quantity - 1;
                return {
                    ...itemOrder,
                    quantity: newQuantityItemOrder,
                };
            } else {
                return itemOrder;
            }
        });
        setHeadphones(newOrder);
    }

    const value: BasketContextType = {
        headphones,
        modalActive,
        currentHeadphones,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
    }
    return (
        <BasketContext.Provider value={value}>
            {children}
        </BasketContext.Provider>
    );
};

