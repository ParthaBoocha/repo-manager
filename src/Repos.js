import React from 'react';
import { Route, Redirect } from "react-router-dom";
import UserManager from "./UserManager";
import OrganizationRepos from './OrganizationRepos';
import OrganizationPicker from './OrganizationPicker';
import UserProfile from './UserProfile';

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
                <UserProfile user={this.state.user} />
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

export default Repos;