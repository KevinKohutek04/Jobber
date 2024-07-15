import React, { Component } from 'react';
import './offlineDrill.css';

class OfflineDrill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.location.state ? props.location.state.type : null,
            currentQ: 0
        };
    }

    

    render() {
        return (
            <div className="offlineDrill-main">
                <div className='offlineDrill-spacer'></div>
                <div className='offlineDrill-cards'>skbidi</div>
                <div className='offlineDrill-stats'></div>{//i take uo the bottom of the screen and do nothing
                }
            </div>
        );
    }
}

export default OfflineDrill;
