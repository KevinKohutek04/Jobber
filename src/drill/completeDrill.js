import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import './completeDrill.css';
import code from '../img/code.png';
import link from '../img/linkedin.png';
import git from '../img/git.png';

class CompleteDrill extends Component {
    constructor(props) {
        super(props);
        const state = this.props.location.state || {};
        this.state = {
            correctQ: state.correctQ || 0,
            totalTime: state.totalTime || 0,
            lookAway: state.lookAway || 0
        };
    }

    render() {
        return (
            <div className="completeDrill-main">
                <div className="completeDrill-main-text">
                    <span className="completeDrill-main-title">{this.state.correctQ > 6 ? "Nice Job!" : "Try again."}</span>   
                    <span className="completeDrill-main-subtext">{this.state.correctQ > 6 ? "You are now closer to landing that job." : "Don't worry, you will crush it next time."}</span>
                </div>
                <div className="Drill-spacer"></div>
                <div className="completeDrill-info">
                <div className="completeDrill-infoBox">
                    <span className="completeDrill-infoBox-number">{this.state.correctQ}</span>
                    <span className="completeDrill-infoBox-dis">Correct questions in the interview</span>
                    <span className="completeDrill-infoBox-mini">You got {this.state.correctQ}/10 right</span>
                </div>
                <div className="completeDrill-infoBox">
                    <span className="completeDrill-infoBox-number">{this.state.totalTime}</span>
                    <span className="completeDrill-infoBox-dis">Length of the interview</span>
                    <span className="completeDrill-infoBox-mini">How long it took to complete the interview</span>
                </div>
                <div className="completeDrill-infoBox">
                    <span className="completeDrill-infoBox-number">{this.state.lookAway}</span>
                    <span className="completeDrill-infoBox-dis">Distraction counter</span>
                    <span className="completeDrill-infoBox-mini">How many times you clicked away from the webpage</span>
                </div>
                <div className="completeDrill-infoBox">
                    <span className="completeDrill-infoBox-number">{(this.state.totalTime / 10).toFixed(2)}</span>
                    <span className="completeDrill-infoBox-dis">Average time per question</span>
                    <span className="completeDrill-infoBox-mini">This is how long it took per question to answer</span>
                </div>

                </div>


                <div className="home-container-end unique-footer">
                <div className="left-area">
                    Kevin Kohutek
                </div>
                <div className="right-area">
                    <a href="https://github.com/KevinKohutek04" target="_blank" rel="noopener noreferrer">
                        <img src={git} alt='github' className='home-container-smallImage' />
                    </a>
                    <a href="https://github.com/KevinKohutek04/Jobber" target="_blank" rel="noopener noreferrer">
                        <img src={code} alt="Code" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-kohutek-7306a4293/" target="_blank" rel="noopener noreferrer">
                        <img src={link} alt="LinkedIn" className="social-icon" />
                    </a>
                </div>
            </div>

                    
            </div>
        );
    }
}

export default CompleteDrill;