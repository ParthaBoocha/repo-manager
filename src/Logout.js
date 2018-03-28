import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationManager from "./AuthenticationManager";
import './Logout.css';

class Logout extends React.Component {
    constructor() {
        super();
        this.state = { executeLogout: false };
    }

    render() {
        if(this.state.executeLogout) {
            AuthenticationManager.reset();
            return <Redirect to='/' />
        }

        return (
            <a className='Logout' onClick={this.logout}>Log Out</a>
        );
    }

    logout = (e) => {
        e.preventDefault();
        this.setState({ executeLogout: true });
    };
}

export default Logout;