import React, { Component } from "react";
import { Link, Redirect } from 'react-router-dom'
import './Drill.css';

class Drill extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>;            
        }

        return (
            <div className="Drill-main">
            
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