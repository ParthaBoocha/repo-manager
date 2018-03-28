import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import * as qs from "query-string";
import AuthenticationManager from './AuthenticationManager';

class Callback extends React.Component {
    constructor(props) {
        super(props);
        let params = qs.parse(props.location.search);
        this.state = {
            code: params.code,
            state: params.state,
            redirectTo: ''
        };
    }

    render() {
        if(this.state.redirectTo !== '') {
            return <Redirect to={this.state.redirectTo} />
        }

        return (
            <div>
                Code: {this.state.code}
                <p />
                State: {this.state.state}
                <p />
                <div>
                    Set Access Token:
                    <input type='text' onChange={this.updateAccessToken} />
                    <button onClick={() => this.resumeNavigation()}>Go</button>
                </div>
            </div>
        );
    }

    resumeNavigation = () => {
        AuthenticationManager.setAccessToken(this.state.AccessToken);
        this.setState({ redirectTo: '/repos' });
    }

    updateAccessToken = (event) => {
        this.setState({ AccessToken: event.target.value });
    }
};

export default withRouter(Callback);