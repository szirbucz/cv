import React from 'react'
import educations from '../data/education.json'
import Paragraph from '../Paragraph.js'
import Education from './Education.js'

export default function Educations() {
    const educationList = educations.map((education) => <Education {...education} />)
    return (
        <Paragraph header="Education & Training">
            {educationList}
        </Paragraph>
    )
}