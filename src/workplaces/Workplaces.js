import React from 'react'
import Paragraph from '../Paragraph'
import workplaces from '../data/workplaces.json'
import Workspace from './Workspace'

export default function Workplaces() {
    const workplaceList = workplaces.map((workplace) => <Workspace {...workplace} />)
    return (
        <Paragraph header="Work Experience">
                {workplaceList}
        </Paragraph>
    )
}