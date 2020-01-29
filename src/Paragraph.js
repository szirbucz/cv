import React from 'react'
import ParagraphHeader from './ParagraphHeader'

export default function Paragraph(props) {
    return (
        <div class="paragraph">
            <ParagraphHeader>{props.header}</ParagraphHeader>
            {props.children}
        </div>
    )
}