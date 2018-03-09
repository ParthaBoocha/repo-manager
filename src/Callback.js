import React from 'react';
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';
import GitHub from 'github-api';

class Callback extends React.Component {
    constructor(props) {
        super(props);
        let params = qs.parse(this.props.location.search);
        this.state = {
            code: params.code,
            state: params.state,
            gh: new GitHub({
                token: ''
            }),
            repos: '',
            user: ''
        };
    }

    render() {
        return (
            <div>
                Code: {this.state.code}
                <p />
                State: {this.state.state}
                <p />
                GitHub API:
                <p />
                <button onClick={() => this.getRepo()}>Get Repo</button>
                <button onClick={() => this.getUser()}>Get User</button>
                <p />
                Repos:
                {this.state.repos}
                <p />
                User:
                {this.state.user}
            </div>
        );
    }

    getRepo() {
        this.state.gh.getOrganization('Evolent-Health').getRepos((err, repos) => {
            let repoList = '';
            repos.forEach((repo) => {
                repoList += repo.name + ', ';
            });
            this.setState({ repos: repoList });
        });
    }

    getUser() {
        this.state.gh.getUser().listOrgs((err, orgs) => {
            this.setState({ user: JSON.stringify(orgs) });
        });
    }
}

export default withRouter(Callback);