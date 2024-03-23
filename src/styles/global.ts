
import  { createGlobalStyle } from 'styled-components';
import {FONT_BOLD_25, FONT_REGULAR_17, FONT_SEMI_BOLD_20} from "./fonts";
import {BACKGROUND_COLOR, DARK_2XL_COLOR, DARK_M_COLOR} from "./colors";
import {mobile} from "./variables";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: none;
    }

    html {
        font-size: 10px;
    }

    body {
        margin: auto;
        max-width: 1110px;
        height: 100%;
        background-color: ${BACKGROUND_COLOR};
    }

    a {
        color: inherit;
        text-decoration: inherit;
        cursor: pointer;
    }
   
    ul {
        list-style: none;
        margin: 0;
        flex-wrap: wrap;

    }

    li {
        ${FONT_REGULAR_17};
        color: ${DARK_2XL_COLOR};
        padding: 0 0 14px 0;

    }

    button {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        font-size: inherit;
        font-weight: inherit;
    }

    img {
        vertical-align: top;
    }

    h1 {
        ${FONT_BOLD_25};
        margin: 0;
    }

    h2 {
        @media (max-width: ${mobile}) {
            font-size: 3em;
            font-weight: 700;
            margin: 0 44px;
        }
        ${FONT_SEMI_BOLD_20};
        margin: 0;
        color: ${DARK_M_COLOR}
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.75rem;
    }

    h5 {
        font-size: 1.75rem;
    }

    h6 {
        ${FONT_REGULAR_17};
        margin: 0;
        padding: 0;
    }
`;
