import styled, {css, keyframes} from "styled-components";
import {FlexStyle} from "../../../styles";
import {DARK_L_COLOR, DARK_M_COLOR} from "../../../styles";
import {FONT_SEMI_BOLD_13} from "../../../styles";

const openKeyframe = keyframes`
    0% {
        opacity: 0;
        transform: translateY(50px)
    }
    100% {
        transform: translateY(100px);
        opacity: 100%;
    }
`;
const openAnimation = css`
    animation: 0.5s ease-in-out ${openKeyframe} forwards;
`;
export const WrapperModal = styled(FlexStyle)<{ $active: boolean, $y?: any, $time?: any }>`
    height: 10vh;
    width: 12vw;
    position: fixed;
    top: 44px;
    right: 12px;
    border-radius: 12px;
    border: 0.2rem solid ${DARK_L_COLOR};
    ${FONT_SEMI_BOLD_13};
    transform: ${props => props.$active ? 'scale(1)' : 'scale(0)'};
    ${props => props.$active ? openAnimation : 'scale(0)'}
`;
export const Span = styled.span`
    color: ${DARK_M_COLOR}
`;
