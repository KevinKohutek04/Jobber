import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { getCardCall } from "../util/APIUtils";
import './Drill.css';

class Drill extends Component {
    constructor(props) {
        super(props);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        getCardCall("test")
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
                <button onClick={this.handleButtonClick}>Call API</button>
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