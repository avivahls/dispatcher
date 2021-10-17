import React from 'react'
import { ButtonStyled } from './ButtonStyle'
import Arrow from './Arrow - Right.svg'

export enum ButtonType {WELCOME="welcome", PRIMARY="primary", SECONDARY="secondary", TEXT="textbtn"}

export interface ButtonProps {
    className: ButtonType;
    text: string;
    hasIcon: boolean;
}
export const Button:React.FC<ButtonProps> = ({className ,text, hasIcon})=>{
    return <ButtonStyled className={className}>{text}
    {hasIcon && <img src={Arrow} alt="right arrow"></img>}
    </ButtonStyled>
}