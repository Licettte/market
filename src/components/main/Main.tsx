import {MainCard} from "./MainCard";
import React, {useState, useEffect} from 'react';
import {ThreeColumn} from "../../styles";
import {MainCardType, URL_GET_ITEM }from "../../utils";
import {Modal} from "../layouts/modal/Modal";


export const Main = () => {


    const [wiredHeadphones, setWiredHeadphones] = useState<MainCardType[]>([])
    const [wirelessHeadphones, setWirelessHeadphones] = useState<MainCardType[]>([])
    const [isLoaded, setIsLoaded] = useState<boolean>(false)


    useEffect(
        () => {
            fetch(URL_GET_ITEM)
                .then(response => response.json())
                .then(data => {
                    return setWiredHeadphones(data.wiredHeadphones),
                        setWirelessHeadphones(data.wirelessHeadphones)
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setIsLoaded(true)
                });

        }, []);


    const getCards = (headphones: MainCardType[]) => {
        return (headphones.map(card => <MainCard key={card.id} {...card} />))
    }
    console.log(wiredHeadphones, "wiredHeadphones")
    return (
        <>
            {!isLoaded ? "Loading" :
                <>
                    <h2>Наушники</h2>
                    <ThreeColumn>
                        {getCards(wiredHeadphones)}
                    </ThreeColumn>

                    <h2>Беспроводные наушники</h2>
                    <ThreeColumn>
                        {getCards(wirelessHeadphones)}
                    </ThreeColumn>
                </>
            }
            <Modal />
        </>
    )
}
