import React from 'react';
import Expertise from './expertise/Expertise.js'
import Header from './header/Header.js';
import Workplaces from './workplaces/Workplaces.js';
import Educations from './education/Educations.js';

export default function App() {
    return (
        <div className="App">
            <Header />
            <Expertise />
            <Workplaces/>
            <Educations/>
            <div className="poweredBy">Powered by <a href="https://github.com/szirbucz/cv" target="_blank">https://github.com/szirbucz/cv</a></div>
        </div>
    )
}