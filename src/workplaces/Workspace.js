import React, { Component } from 'react';

class Workspace extends Component {
    render() {
        return(
        <div class='workspace'>
        <h3>{this.props.name}<span class='title'> - {this.props.title}</span> 
            <span class="date"> ({this.props.start} - {this.props.end})</span></h3>
        <ul>
            {this.props.achievements.map(project => <div>
                    <p>{project.project}</p>
                    <ul>{project.achievements.map(achievement => <li>{achievement}</li>)}</ul>
                    </div>)}

        </ul>
        </div>)
    }
}

export default Workspace;
