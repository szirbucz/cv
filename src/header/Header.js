import React from 'react'
import data from '../data/personal.json'

export default function Header() {
    const introduction = data.introduction.map((line, i) => (<React.Fragment key={i}>{line} { i < data.introduction.length - 1 ? <br/> : ''}</React.Fragment>))
    return (
        <div class="header">
        <div class="profile-pic">
            <img src="me.jpg"/>
        </div>
        <div class="name">{data.name} - <span class="title">{data.title}</span></div>
        <div class="intro">{introduction}</div>
        <div class="contacts">
            <div class="email"><img class="icon mail" src="mail.png"/>{data.mail}</div>
            <div class="phone"><img class="icon phone" src="phone.png"/>{data.phone}</div>
            <div class="skype"><img class="icon skype" src="skype.png"/>{data.skype}</div>
        </div>
        <div class="java-logo">
            <img class="logo" src="java.png"/>
        </div>
        </div>
    )
}