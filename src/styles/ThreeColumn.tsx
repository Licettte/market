import styled from "styled-components";
import {dekstop, tablet} from "./variables";
import {ReactNode} from "react";
import {Children} from "../utils/types/types";

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
    justify-items: center;
    margin: 0 0 32px 0;
    
    @media (min-width: ${tablet}) {
        grid-template-columns: repeat(2, 1fr);      
        justify-items: center;
    }

    @media (min-width: ${dekstop}) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 2.4rem;
        grid-row-gap: 1.2rem;
        margin-bottom: 3rem;
    }
`;

export const ThreeColumn = ({ children }: Children) => {
    return <Wrapper>{children}</Wrapper>;
};
