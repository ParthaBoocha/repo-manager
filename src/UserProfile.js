import React from "react";
import { Box, Avatar, Text, Flyout, Divider } from "gestalt";
import Logout from "./Logout";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: props.user,
            open: false
        };
    }

    render() {
        return (
            <Box>
                <div style={{ display: "inline-block" }} ref={c => { this.anchor = c; }}>
                    <a onClick={this.toggleMenu} style={{ textDecoration: 'none', cursor: 'pointer' }}>            
                        <Box alignItems="center" display="flex" paddingX={1}>
                            <Box paddingX={1}>
                                <Avatar name={this.state.user.name || "Nobody"} size="sm" />
                            </Box>
                            <Box paddingX={1}>
                                <Text bold color="white">{this.state.user.name || "Nobody"}</Text>
                            </Box>
                        </Box>
                    </a>
                </div>
                {this.state.open &&
                    <Flyout anchor={this.anchor} idealDirection="down" onDismiss={this.dismissMenu} size="md">
                        <Box>
                            <Text>Stuff goes here</Text>
                            <Divider />
                            <Logout />
                        </Box>
                    </Flyout>
                }
            </Box>
        );
    }

    toggleMenu = (e) => {
        e.preventDefault();
        this.setState({ open: !this.state.open });
    };

    dismissMenu = () => {
        this.setState({ open: false });
    };
};

export default UserProfile;