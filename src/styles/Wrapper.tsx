import styled from 'styled-components';
import {dekstop, mobile, tablet} from "./variables";
import { FlexStyle} from "./Flex";
import { FlexChildren,} from "../utils/types/types";

const Wrapper = styled(FlexStyle)`
    min-height: 100vh;
    @media (max-width: ${mobile}) {
        max-width: 480px;
        margin: auto;      
    }

    @media (min-width: ${tablet}) {
        max-width: 726px;
        margin: auto;            
    }

    @media (min-width: ${dekstop}) {
        max-width: 1120px;
        margin: auto;
    }
`;

export const Container = ( props: FlexChildren) => {
    return <Wrapper{...props}/>;
};

