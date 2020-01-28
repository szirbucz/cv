import React, { Component } from 'react';

class ParagraphHeader extends Component {
    render() {
        return <div class="paragraphHeader"><h2>{this.props.children}</h2></div>
    }
}
export default ParagraphHeader;
