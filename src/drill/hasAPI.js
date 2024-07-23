import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './hasApi.css';
import lock from '../img/lock.png';

class hasApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.location.state ? props.location.state.type : null,
        };   
    }
    render() {
        return ( 
        <div className="hasApi-main">
            <div className="hasApi-main-text">
                <span className="hasApi-main-title">Looks like you dont have a API key.</span>   
                <span className="hasApi-main-subtext">To use the AI chat feature you must have a valid open api key.</span>
            </div>
            <div className="hasApi-spacer"></div>
            <div className='hasApi-input'>
            <span className="hasApi-input-title">Your keys are safe.</span>   
            <span className="hasApi-input-subtext">Keys are run through three layers of encryption to ensure safe practices on the internet. 
                They are also stored on a local server where they remain encrypted.</span>
            <form className='hasApi-input-input'>
                
             <div className="hasApi-input-container">
                <input type="text" id="name" name="name" required />
                <label htmlFor="name">Key</label>
            </div>
                <button type='submit' className='btnn btnn-layered-3d btnn-layered-3d--pink'>Submit</button>
            </form>
            
        </div>

        </div>

        );
    }
}

export default hasApi;
/**<img src={lock} alt='Lock' className="hasApi-input-img"/>
 * <button 
                        className="btn btn-layered-3d btn-layered-3d--pink" 
                        onClick={() => {
                            this.handleOffline(this.state.type);
                            this.setState(
                              (prevState) => ({
                                correctQ: prevState.correctQ + 1,
                                totalQ: prevState.totalQ + 1,
                                displayQ: !prevState.displayQ,
                                correctAnimate: true
                              }),
                              () => {
                                setTimeout(() => {
                                  this.setState({ correctAnimate: false });
                                }, 500);
                              }
                            );
                        }}
                    >
                        Correct
                    </button>*/