import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { getOffline, setAPIkey, questionChat, addClosed, personalInfo } from "../util/APIUtils";
import './Drill.css';

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
}


export default Drill;
//@GetMapping("/personalInfo")
//public ResponseEntity<?> personalInfo(@RequestParam long userid) {