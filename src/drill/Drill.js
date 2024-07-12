import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { getCardCall } from "../util/APIUtils";
import './Drill.css';

class Drill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ inputText: event.target.value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        getCardCall(this.state.inputText)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
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
                <form onSubmit={this.handleFormSubmit}>
                    <input 
                        type="text" 
                        value={this.state.inputText} 
                        onChange={this.handleInputChange} 
                        placeholder="Enter text"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Drill;

/*constructor(props) {
        super(props);
        this.state = {
            submitted: false,
        };
    }

    handleSubmit = () => {
        this.setState({ submitted: true });
        <button onClick={this.handleSubmit}>Submit</button>
     */