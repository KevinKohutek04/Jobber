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
                    <button className='offlineDrill-cards-button' style={{ backgroundColor: 'rgb(246, 71, 92)' }}>Wrong</button>
                </div>
                <div className='offlineDrill-cards-right-left'>
                    <button class="btn btn-layered-3d btn-layered-3d--pink">Correct</button>
                </div>
                </div>  {/*i take uo the bottom of the screen and do nothing*/}
            </div>
        );
    }
}
export default OfflineDrill;
//<img src={arrowR} alt='right arrow' className='offlineDrill-cards-img' /> :(((
//<img src={arrowL} alt='left arrow' className='offlineDrill-cards-img' />

//<button className='offlineDrill-cards-button' style={{ backgroundColor: 'rgb(17, 152, 102)' }}>Correct</button>
//box-shadow: rgb(17, 152, 102) 0px 0px 0px 2px, rgb(17, 152, 102) 0px 0.625em 0px 0px;