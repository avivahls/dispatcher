import styled from "styled-components";
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
    color: #FFFFFF;
    background: #0058B9;
    border-radius: 1.25rem;
    &:hover{
    opacity: 0.8;
    }
`

export const WelcomeButton = styled(ButtonStyled)`
     color: #FFFFFF;
     width: 90%;
     background: #0058B9;
     border-radius: 0.625rem;
     &:hover{
    opacity: 0.8;
    }
`
export const SecondaryButton = styled(ButtonStyled)`
    color: #5A5A89;
    background: #D9DBE9;
    border-radius: 1.25rem;
    &:hover{
    opacity: 0.8;
    }
`
export const TextButton = styled(ButtonStyled)`
     color: #5A5A89;
     background: white;
     &:hover{
     background: rgba(217, 219, 233, 0.3);
     border-radius: 1.25rem;
 }
`
