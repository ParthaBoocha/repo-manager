import React from "react";
import { Box, Avatar, Text } from "gestalt";

const UserProfile = (props) => {
    return (
        <Box
            alignItems="center"
            direction="row"
            display="flex">
            <Box paddingX={1}>
                <Avatar name={props.user.name || "Partha"} size="sm" />
            </Box>
            <Box paddingX={1}>
                <Text bold>{props.user.name || "Partha"}</Text>
            </Box>
        </Box>
    );
};

export default UserProfile;