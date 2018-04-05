import React from "react";
import RepoManager from "./RepoManager";

class OrganizationRepos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            org: props.match.params.org,
            repos: []
        };
    }

    async componentDidMount() {
        this.getOrganizationRepos(this.state.org);
    }

    render() {
        return <div>
            <h3>{this.state.org}</h3>
            <RepoList repos={this.state.repos} />
        </div>
    }

    getOrganizationRepos = async (org) => {
        this.setState({ repos: await RepoManager.getOrganizationRepos(org) });
    };
};

const RepoList = (props) => {
    return (
        <ul>
            {props.repos.map((repo) => {
                return <li key={repo.name}>{repo.name}</li>;
            })}
        </ul>
    );
};

export default OrganizationRepos;