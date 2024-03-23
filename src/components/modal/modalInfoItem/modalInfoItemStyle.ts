import styled, {css, keyframes} from "styled-components";
import {BRIGHT_PRIMARY_COLOR, FlexStyle, FONT_SEMI_BOLD_17, LIGHT_COLOR} from "../../../styles";
import {DARK_L_COLOR, DARK_M_COLOR} from "../../../styles";
import {FONT_SEMI_BOLD_13} from "../../../styles";

const openKeyframe = keyframes`
    0%{  opacity: 0;
        transform:  translateY(50px)
    }  
  100% {
    transform: translateY(100px) ;
      opacity: 100%;
  }
`;
const openAnimation = css`
  animation: 0.5s ease-in-out ${openKeyframe} forwards;
`;
export const ModalWrapper = styled.div`
    background: ${LIGHT_COLOR};
    width: 388px;
    height: 350px;
    border-radius: 30px;
    padding: 15px 22px 32px;
    margin-top: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    ${FONT_SEMI_BOLD_17}
`;
export const ModalButton = styled.button`
    background: ${BRIGHT_PRIMARY_COLOR};
    width: 200px;
    height: 50px;
    border-radius: 30px;
    margin-top: 20px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    ${FONT_SEMI_BOLD_17};
    color: ${LIGHT_COLOR};
`;
