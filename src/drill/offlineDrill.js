import React, { Component } from 'react';
import { getOffline, addClosed } from '../util/APIUtils';
import { Link, Redirect } from 'react-router-dom';
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
            currentQ: "Click one of the buttons to start your interview.",
            currentA: "Not Yet.",
            correctQ: 0,
            lookAway: 0,
            displayQ: true,
            totalTime: 0,
            totalQ: 0,
            isRunning: false,
            redirectToHome: false,
            animate: false,
            correctAnimate: false,
            incorrectAnimate: false
        };
        this.handleDivClick = this.handleDivClick.bind(this);
        this.handleOffline = this.handleOffline.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.closeQuiz = this.closeQuiz.bind(this);
    }
    componentDidMount() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }

    componentWillUnmount() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.stopTimer();
    }

    handleOffline(type) {
            getOffline(type)
            .then(response => {
                if(this.state.isRunning == false) {
                    this.startTimer();
                }
                const message = response.message;
                const parts = message.split(/\?(.+)/);
                let currentA = parts[1] ? parts[1].trim() : "No answer provided.";
                if (currentA.length > 0) {
                    currentA = currentA.substring(1);
                }
                this.setState({ 
                    currentQ: parts[0] + '?', 
                    currentA: currentA
                });
                if(this.state.totalQ === 10) {
                    this.closeQuiz();
                }
            })
            .catch(error => {
                console.error("Error fetching offline data:", error);
            });
        
    }
    handleVisibilityChange() {
        if (document.hidden) {
            this.setState(prevState => ({
                lookAway: prevState.lookAway + 1
            }));
        }
    }

    handleDivClick() {
        this.setState(prevState => ({
            displayQ: !prevState.displayQ,
            animate: true
        }));
        setTimeout(() => {
            this.setState({ animate: false });
        }, 250);
    }
    startTimer() {
        if (!this.state.isRunning) {
            this.timer = setInterval(() => {
                this.setState(prevState => ({
                    totalTime: prevState.totalTime + 1
                }));
            }, 1000);
            this.setState({ isRunning: true });
        }
    }

    stopTimer() {
        clearInterval(this.timer);
        this.setState({ isRunning: false });
    }

    resetTimer() {//im useless
        this.stopTimer();
        this.setState({ totalTime: 0 });
    }

    closeQuiz() {
        this.stopTimer();
        addClosed(this.state.correctQ, this.state.totalTime , this.state.lookAway, this.props.currentUser.id);


        this.setState({ redirectToHome: true });
    }
    render() {
        if (this.state.redirectToHome) {
            return (
                <Redirect to={{
                    pathname: "/completeDrill",
                    state: {
                        from: this.props.location,
                        correctQ: this.state.correctQ,
                        totalTime: this.state.totalTime,
                        lookAway: this.state.lookAway
                    }
                }} />
            );
        }

        return (
            <div className="offlineDrill-main">
                <div className='offlineDrill-spacer'></div>
                <div className='offlineDrill-cards'>
                    <div className='offlineDrill-cards-left'></div>
                    <div className={`offlineDrill-cards-middle unselectable ${this.state.animate ? 'animated' : ''} ${this.state.correctAnimate ? 'animatedv2' : ''} ${this.state.incorrectAnimate ? 'animatedv3' : ''}`} onClick={this.handleDivClick}>
                         <span className='offlineDrill-cards-middle-title'>{this.state.displayQ ? this.state.currentQ : this.state.currentA}</span>
                    </div>
                    <div className='offlineDrill-cards-right'></div>

                </div>
                <div className='offlineDrill-stats'>
                    <div className='offlineDrill-cards-right-right'>
                    <button 
                            className="btn btn-layered-3d btn-layered-3d--pinkk" 
                            onClick={() => {
                                this.handleOffline(this.state.type);
                                this.setState(
                                    (prevState) => ({
                                        totalQ: prevState.totalQ + 1,
                                        displayQ: true,
                                        incorrectAnimate: true
                                    }),
                                    () => {
                                        setTimeout(() => {
                                            this.setState({ incorrectAnimate: false });
                                        }, 500); 
                                    }
                                );
                            }}
                        >
                        incorrect
                    </button>
                    </div>
                    <div className='offlineDrill-cards-right-left'>
                    <button 
                        className="btn btn-layered-3d btn-layered-3d--pink" 
                        onClick={() => {
                            this.handleOffline(this.state.type);
                            this.setState(
                              (prevState) => ({
                                correctQ: prevState.correctQ + 1,
                                totalQ: prevState.totalQ + 1,
                                displayQ: true,
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
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default OfflineDrill;
//<img src={arrowR} alt='right arrow' className='offlineDrill-cards-img' /> :(((
//<img src={arrowL} alt='left arrow' className='offlineDrill-cards-img' />
//
//<button onClick={() => this.handleOffline(this.state.type)}>Offline</button>
//
//<button className='offlineDrill-cards-button' style={{ backgroundColor: 'rgb(17, 152, 102)' }}>Correct</button>
//box-shadow: rgb(17, 152, 102) 0px 0px 0px 2px, rgb(17, 152, 102) 0px 0.625em 0px 0px;