import React, {Component} from 'react';

import './Expertise.css';

class Expertise extends Component {

    render() {
        return (
                <div class="expertise paragraph">
                    <h2 class="section-header">Expertise</h2>
                    {this.props.skills.map(skill => {return (<span class="skill">{skill}</span>)})}
                </div>
               );
    }
}

export default Expertise;
