import React from 'react'
import { TagStyle } from './TagStyle'

export interface TagProps {
    text: string;
}
export const Tag: React.FC<TagProps> = (props) => {
    return (
        <TagStyle>{props.text}</TagStyle>
    )
}
