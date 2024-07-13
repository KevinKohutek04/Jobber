import React, { Component } from 'react';
import './Home.css';
import drill from '../img/MD.png';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <img src={drill} alt="Example" className="home-container-drill" />
                <span className="home-container-title" style={{ transform: 'translateY(-55px)' }}>Welcome to Mind drill</span>
                <span className='home-container-subtitle' style={{ transform: 'translateY(-55px)' }}>an AI powered interview bot</span>
                <div className='home-container-disBox'>
                    <div className='home-container-words'>
                    <span className='home-container-subtitle' style={{ marginTop: '40px', color: '#fcfbf4' }}>Start your AI-powered interview!</span>
                        <span className='home-container-text' style={{margin: '30px'}}>Track your progress with an infinite number of questions on Mind Drill.
                             Each test consists of ten questions designed to challenge you. The goal is to answer without looking up 
                             the answers or spending too much time thinking. These tests track different aspects of your responses to 
                             provide you with a personalized understanding of areas you need to work on to improve. </span>
                             <span className='home-container-start'>Start Now</span>
                    </div>
                    <div className='home-container-sep'></div>
                    <div className='home-container-image'>
                        
                    </div>
                </div>
                <div className='home-container-disBox'>
                    <div className='home-container-image'>

                    </div>
                    <div className='home-container-sep'></div>
                    <div className='home-container-words'>
                    <span className='home-container-subtitle' style={{ marginTop: '40px', color: '#fcfbf4' }}>No Key? Try Offline Mode.</span>
                        <span className='home-container-text' style={{margin: '30px'}}>Try out a plethora of pre-made interview questions to help you get into top shape.
                             When going into an interview, it is always important to be confident, and the best way to achieve that is to know what you're talking about!
                              In this mode, you will go over some of the crucial questions you will need to answer. This mode also tracks how you study. </span>
                             <span className='home-container-start'>Start Here</span>
                    </div>
                </div>
                <div className='home-container-end'>skbidi</div>
            </div>
        )
    }
}

export default Home;