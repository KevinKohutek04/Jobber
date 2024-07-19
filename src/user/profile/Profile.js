import React, { Component } from 'react';
import { personalInfo } from "../../util/APIUtils";
import './Profile.css';
import code from '../../img/code.png';
import link from '../../img/linkedin.png';
import git from '../../img/git.png';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickOff: 0,
            winRate: 0,
            adScore: 0,
            adTime: 0,
            wins: 0
        };
        this.handlePersonalInfo = this.handlePersonalInfo.bind(this);
    }
    componentDidMount() {
        this.handlePersonalInfo();
    }
    handlePersonalInfo() {
        personalInfo(this.props.currentUser.id).then(response => {
            console.log(response);
            const values = response.message.split('.');
            this.setState({
                clickOff: parseInt(values[0]),
                winRate: parseInt(values[1]),
                adScore: parseInt(values[2]),
                adTime: parseInt(values[3]),
                wins: parseInt(values[4])
            });
        }).catch(error => {
            console.error(error);
        });
    }

    render() {
        return (
            <div className="profile-container">
            
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                    </div>
                    <div className='profile-stats'>
                        <div className='profile-stat'>
                            <div className='profile-stat-number'>
                                    {this.state.clickOff}
                            </div>
                            <div className='profile-stat-dis'>
                            Click Off Rate
                            </div>
                            <div className='profile-stat-mini'>
                            How many times you tab away from the tab.
                            </div>
                        </div>
                        <div className='profile-stat'>
                            <div className='profile-stat-number'>
                                    {this.state.winRate}
                            </div>
                            <div className='profile-stat-dis'>
                            Average Win Rate
                            </div>
                            <div className='profile-stat-mini'>
                            This is how likely it is that you will pass your next inverview.
                            </div>  
                        </div>
                        <div className='profile-stat'>
                            <div className='profile-stat-number'>
                                {this.state.adScore}
                            </div>
                            <div className='profile-stat-dis'>
                            Average Score
                            </div>
                            <div className='profile-stat-mini'>
                            This is how many question you get right per interview.
                            </div>
                        </div>
                        <div className='profile-stat'>
                            <div className='profile-stat-number'>
                                {this.state.adTime}
                            </div>
                            <div className='profile-stat-dis'>
                            Average Time Till Completion
                            </div>
                            <div className='profile-stat-mini'>
                            How many seconds it take for you to complete a interview.
                            </div>
                        </div>
                        <div className='profile-stat'>
                            <div className='profile-stat-number'>
                                {this.state.wins}
                            </div>
                            <div className='profile-stat-dis'>
                            Overall Wins
                            </div>
                            <div className='profile-stat-mini'>
                            How many total you have.
                            </div>
                        </div>
                    </div>
                    <div className="home-container-end">
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

export default Profile