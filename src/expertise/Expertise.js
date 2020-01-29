import React, { Component } from 'react';
import skills from '../data/expertise.json'

export default function Expertise() {
    return (
        <div class="expertise paragraph">
            <h2 class="section-header">Expertise</h2>
            {skills.map(skill => { return (<span class="skill">{skill}</span>) })}
        </div>
    );
}
