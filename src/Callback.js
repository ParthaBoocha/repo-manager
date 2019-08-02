import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import * as qs from "query-string";
import axios from "axios";
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

    // componentDidMount() {
    //     try {
    //         axios.post('http://localhost:7071/api/Token',
    //             {code: this.state.code, state: this.state.state})
    //         .then(token => this.resumeNavigation(token.data.split('&')[0].split('=')[2]))
    //         .catch(error => console.log(error));
    //     } catch (error) {
    //         console.log(error);
    //     }   
    // }

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
                Curl: curl -d "client_id=&client_secret=&code={this.state.code}&state={this.state.state}" -X POST https://github.com/login/oauth/access_token
                <p />
                <div>
                    Set Access Token:
                    <input type='text' onChange={this.updateAccessToken} />
                    <button onClick={() => this.resumeNavigation()}>Go</button>
                </div>
            </div>
        );
    }

    resumeNavigation = (token) => {
        AuthenticationManager.setAccessToken(this.state.AccessToken);
        this.setState({ redirectTo: '/repos' });
    }

    updateAccessToken = (event) => {
        this.setState({ AccessToken: event.target.value });
    }
};

export default withRouter(Callback);