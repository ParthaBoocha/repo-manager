import React from 'react';
import UserManager from "./UserManager";

class Repos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            orgs: []
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
                <Organizations orgs={this.state.orgs} orgSelected={this.handleOrgSelected} />
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
        alert(e.target.value);
    };
}

const UserDetails = (props) => {
    return (
        <div>
            <div style={{ display: 'inline-block' }}>Hello</div>
            <h4 style={{ display: 'inline-block', margin: '0 0 0 5px' }}>{props.user.name || '' }</h4>
        </div>
    );
};

const Organizations = (props) => {
    return (
        <React.Fragment>
            <h3>Organizations:</h3>
            <select onChange={e => props.orgSelected(e)}>
                <option>Select</option>
                {props.orgs.map((org) => {
                    return <option value={org.name}>{org.name}</option>
                })}
            </select>
        </React.Fragment>
    );
};

export default Repos;