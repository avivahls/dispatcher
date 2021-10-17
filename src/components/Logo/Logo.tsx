import React from 'react'
import logo from './LOGO.svg'
import {LogoStyle} from './LogoStyle'

export enum LogoType { SMALL="small", BIG="big"}
export interface LogoProps {
    className: LogoType
}
export const Logo:React.FC<LogoProps> = (props)=>{
    return <LogoStyle src={logo} className={props.className}  alt="dispatcher logo"></LogoStyle>
}