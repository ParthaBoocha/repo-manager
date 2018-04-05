import React from 'react';
import { Route, Redirect } from "react-router-dom";
import UserManager from "./UserManager";
import OrganizationRepos from './OrganizationRepos';

class Repos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            orgs: [],
            selectedOrg: undefined
        };
    }

    async componentDidMount() {
        this.getUserDetails();
        this.getOrganizations();
    }

    render() {
        return (
            <React.Fragment>
                <UserDetails user={this.state.user} />
                <OrganizationPicker orgs={this.state.orgs} orgSelected={this.handleOrgSelected} />
                <Route path={`${this.props.match.url}/:org`} component={OrganizationRepos} />
                {this.state.selectedOrg
                    ? <Redirect to={`${this.props.match.url}/${this.state.selectedOrg}`} />
                    : <Redirect to={`${this.props.match.url}`} />}
            </React.Fragment>
        );
    }

    getUserDetails = async () => {
        this.setState({ user: await UserManager.getUserDetails() });
    };

    getOrganizations = async () => {
        this.setState({ orgs: await UserManager.getOrganizations() });
    };

    handleOrgSelected = (e) => {
        this.setState({ selectedOrg: e.target.value });
    };
};

const UserDetails = (props) => {
    return (
        <div>
            <div style={{ display: 'inline-block' }}>Hello</div>
            <h4 style={{ display: 'inline-block', margin: '0 0 0 5px' }}>{props.user.name || '' }</h4>
        </div>
    );
};

const OrganizationPicker = (props) => {
    return (
        <React.Fragment>
            <div style={{ display: 'inline-block' }}>Organizations:</div>
            <select style={{ display: 'inline-block', margin: '0 0 0 5px' }} onChange={e => props.orgSelected(e)}>
                <option value=''>Select</option>
                {props.orgs.map((org) => {
                    return <option key={org.login} value={org.login}>{org.name}</option>
                })}
            </select>
        </React.Fragment>
    );
};

export default Repos;