import React from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationManager from "./AuthenticationManager";
import { Button, Box } from 'gestalt';

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
            <Box padding={2}>
                <Button text='Log Out' onClick={this.logout} inline />
            </Box>
        );
    }

    logout = () => {
        this.setState({ executeLogout: true });
    };
}

export default Logout;