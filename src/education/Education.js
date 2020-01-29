import React from 'react'

export default function Education({major, school, date, skills}) {

    const renderSkill = (skill) => {
        let subskillList = ""
        if (!!skill.subskills) {
            subskillList = (
                <ul>
                    {skill.subskills.map((sub) => <li>{sub}</li>)}
                </ul>
            )
        }

        return (
            <li>
                {skill.name}
                {subskillList}
            </li>
        )
    }

    const skillsList = skills.map((skill) => renderSkill(skill))
    return (
        <div class="workspace">
                <h3> {major}
                    <span class="title"> - {school}</span>
                    <span class="date"> {date}</span>
                </h3>
                
                <ul>
                    {skillsList}
                </ul>
            </div>
    )
}