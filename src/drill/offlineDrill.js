import React, { Component } from 'react';
import './offlineDrill.css';
import thumpup from '../img/rightThumb.png';
import thumbdown from '../img/downThumbs.png';
import arrowL from '../img/arrowL.png';
import arrowR from '../img/arrowR.png';
import clock from '../img/clock.png';

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
                <div className='offlineDrill-cards'>
                    <div className='offlineDrill-cards-left'>

                    </div>
                    <div className='offlineDrill-cards-middle'></div>
                    <div className='offlineDrill-cards-right'>
                        
                    </div>

                </div>
                <div className='offlineDrill-stats'>
                
                <div className='offlineDrill-cards-right-right'>
                        <button className='button-56'>skbbidi</button>
                        </div>
                        <div className='offlineDrill-cards-right-left'>

                        </div>
                
                </div>  {/*i take uo the bottom of the screen and do nothing*/}
            </div>
        );
    }
}

export default OfflineDrill;
//<img src={arrowR} alt='right arrow' className='offlineDrill-cards-img' /> :(((
//<img src={arrowL} alt='left arrow' className='offlineDrill-cards-img' />