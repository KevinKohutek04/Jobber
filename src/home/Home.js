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
            </div>
        )
    }
}

export default Home;