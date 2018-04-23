import React from "react";
import { Box, Avatar, Text, Link } from "gestalt";

const UserProfile = (props) => {
    return (
        <Link>
            <Box alignItems="center" display="flex" paddingX={1}>
                <Box paddingX={1}>
                    <Avatar name={props.user.name || "Partha"} size="sm" />
                </Box>
                <Box paddingX={1}>
                    <Text bold color="white">{props.user.name || "Partha"}</Text>
                </Box>
            </Box>
        </Link>
    );
};

export default UserProfile;