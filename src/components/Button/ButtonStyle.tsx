import styled from "styled-components";
import { BLUE, GREY, LIGHT_GREY_2, TEXT_BTN_BACKGROUND } from "../../Colors";
import Arrow from './Arrow - Right.svg'

export const ButtonStyled = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0rem 1rem;
border:none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 0.875rem;
line-height: 1.625rem;
`;

export const ButtonIcon = styled.img.attrs({arc: Arrow})`
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0rem 0.5rem;
`

export const PrimaryButton = styled(ButtonStyled)`
    color: white;
    background: ${BLUE};
    border-radius: 1.25rem;
    &:hover{
    opacity: 0.8;
    }
`

export const WelcomeButton = styled(ButtonStyled)`
     color: white;
     width: 90%;
     background: ${BLUE};
     border-radius: 0.625rem;
     &:hover{
    opacity: 0.8;
    }
`
export const SecondaryButton = styled(ButtonStyled)`
    color: ${GREY};
    background: ${LIGHT_GREY_2};
    border-radius: 1.25rem;
    &:hover{
    opacity: 0.8;
    }
`
export const TextButton = styled(ButtonStyled)`
     color: ${GREY};
     background: white;
     &:hover{
     background: ${TEXT_BTN_BACKGROUND};
     border-radius: 1.25rem;
 }
`