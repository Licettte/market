import {Route, useLocation} from 'react-router-dom';
import {
    Div,
    FooterFlex,
    Img,
    Language,
    Logo,
    Social,
    Span,
    SVGLink,
    TelegramSVG,
    VKSVG,
    WhatsAppSVG
} from "./FooterStyle";
import {language} from "../../../svg";
import React from "react";

export const Footer = () => {
    const path = useLocation();


    return (
        <FooterFlex $align='flex-start' $padding='32px' $justify='space-between'>

            <Logo> QPICK</Logo>
            <ul>
                <li>Избранное</li>
                <li>Корзина</li>
                <li>Контакты</li>
            </ul>

            <Div>
                <h6>Условия сервиса</h6>
                <Language>
                    <Img $type="language" src={language} alt="language"/>
                    {path.pathname === '/basket' ? <Span> Kaз</Span> : null}
                    <Span $selected={true}> Рус</Span>
                    <Span> Eng</Span>
                </Language>
            </Div>

            <Social>
                <a href="https://vk.com/neoflex_ru"  target="_blank"
                   rel="noopener noreferrer">
                    <VKSVG/>
                </a>
                <a href="https://web.telegram.org/a/"  target="_blank"
                   rel="noopener noreferrer">
                    <TelegramSVG/>
                </a>
                <a href="https://web.whatsapp.com" target="_blank"
                   rel="noopener noreferrer">
                    <WhatsAppSVG/>
                </a>
            </Social>

        </FooterFlex>
    );
}
