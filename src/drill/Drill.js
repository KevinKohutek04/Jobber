import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom';
import { getOffline, setAPIkey, questionChat, addClosed, personalInfo } from "../util/APIUtils";
import java from '../img/java.png';
import c from '../img/c.png';
import js from '../img/js.png';
import python from '../img/python.png';
import sql from '../img/sql.png';
import triangle from '../img/triangle.png';

import './Drill.css';

class Drill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleState: 'Hello, World!'
        };
    }


    render() {
        return (<div className="Drill-main">
            <div className="Drill-title">Offline interviews</div>
            <div className="Drill-subText">All offline interviews are pre-made questions that are pulled randomly in a large set.</div>
            <div className="Drill-spacer"></div>
            <div className="Drill-options">
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={java} alt='JAVA' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">JAVA</span>
                            <span className="Drill-code-minitext">a classic object-oriented programming language.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 1 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 2 }}}>
                                    <span className="Drill-code-listtext">Junior - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 3 }}}>
                                    <span className="Drill-code-listtext">Senior - Level</span>
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
        
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={c} alt='c' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">C#</span>
                            <span className="Drill-code-minitext">Versatile, object-oriented language for modern applications.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 4 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 5 }}}>
                                    <span className="Drill-code-listtext">Junior - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 6 }}}>
                                    <span className="Drill-code-listtext">Senior - Level</span>
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
        
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={js} alt='js' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">JS</span>
                            <span className="Drill-code-minitext">Dynamic, versatile language for web development.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 7 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 8 }}}>
                                    <span className="Drill-code-listtext">Junior - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 9 }}}>
                                    <span className="Drill-code-listtext">Senior - Level</span>
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
        
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={python} alt='python' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">PYTHON</span>
                            <span className="Drill-code-minitext">Simple, powerful language for diverse applications.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 10 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 11 }}}>
                                    <span className="Drill-code-listtext">Junior - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 12 }}}>
                                    <span className="Drill-code-listtext">Senior - Level</span>
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
            <div className="Drill-options">    
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={sql} alt='sql' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">MYSQL</span>
                            <span className="Drill-code-minitext">Structured language for querying relational databases.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 13 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 14 }}}>
                                    <span className="Drill-code-listtext">Advanced - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 14 }}}>
                                    <span className="Drill-code-listtext"></span>
                                </Link>
                            </li>
                        </ul>    
                    </div>
                </div>
                <div className="Drill-code">
                    <div className="Drill-code-top">
                        <img src={triangle} alt='sql' className="Drill-code-img"/>
                        <div className="Drill-code-right">
                            <span className="Drill-code-title">SailPoint</span>
                            <span className="Drill-code-minitext">IAM secruity software.</span>
                        </div>
                    </div>
                    <div className="Drill-code-bottom">
                        <ul>
                        <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 15 }}}>
                                    <span className="Drill-code-listtext">Entry - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 16 }}}>
                                    <span className="Drill-code-listtext">Advanced - Level</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{pathname: "/offlineDrill", state: { type: 16 }}}>
                                    <span className="Drill-code-listtext"></span>
                                </Link>
                            </li>
                            
                        </ul>    
                    </div>
                </div>
            </div>
        </div>
        
        );
    }
}
export default Drill;
/*
class Drill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiKeyText: "",
            questionChatText: ""
        };
        this.handleOffline = this.handleOffline.bind(this);
        this.handleAPIKeyInputChange = this.handleAPIKeyInputChange.bind(this);
        this.handleAPIKeyFormSubmit = this.handleAPIKeyFormSubmit.bind(this);
        this.handleQuestionChatInputChange = this.handleQuestionChatInputChange.bind(this);
        this.handleQuestionChatFormSubmit = this.handleQuestionChatFormSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.personalInfo = this.personalInfo.bind(this);
    }
    //offline
    handleAPIKeyInputChange(event) {
        this.setState({ apiKeyText: event.target.value });
    }
    handleAPIKeyFormSubmit(event) {
        event.preventDefault();
        setAPIkey(this.props.currentUser.id, this.state.apiKeyText)
            .then(response => {
                console.log("API Key set successfully:", response);
            })
            .catch(error => {
                console.error("Error setting API Key:", error);
            });
    }

    // AI
    handleQuestionChatInputChange(event) {
        this.setState({ questionChatText: event.target.value });
    }

    handleQuestionChatFormSubmit(event) {
        event.preventDefault();
        console.log("Question Chat Text:", this.state.questionChatText + "::" + this.props.currentUser.id);
        questionChat(this.state.questionChatText, this.props.currentUser.id)
    }

    handleOffline(type) {
        getOffline(type);
    }
    handleClose() {
        addClosed(7, 400, 9, this.props.currentUser.id);
    }
    personalInfo() {
        personalInfo(this.props.currentUser.id);
    }
    render() {
        if (this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }} />;
        }

        return (
            <div className="Drill-main">
                <button onClick={() => this.handleOffline(1)}>Offline</button>
                <form onSubmit={this.handleAPIKeyFormSubmit}>
                    <input 
                        type="text" 
                        value={this.state.apiKeyText} 
                        onChange={this.handleAPIKeyInputChange} 
                        placeholder="API Key" 
                    />
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={this.handleQuestionChatFormSubmit}>
                    <input 
                        type="text" 
                        value={this.state.questionChatText} 
                        onChange={this.handleQuestionChatInputChange} 
                        placeholder="Question Chat" 
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => this.handleClose()}>Addclosed</button>
                <button onClick={() => this.personalInfo()}>personalInfo</button>
            </div>
        );
    }
*/