import React from "react";
import { Box, Label, Text, SelectList } from 'gestalt';

const OrganizationPicker = (props) => {
    const options = props.orgs.map((org) => {
        return { label: org.name, value: org.login };
    });
    return (
        <Box>
            <Box paddingY={2}>
            <Label htmlFor="orgs">
                <Text>Organizations</Text>
            </Label>
            </Box>
            <SelectList
                id="orgs"
                name="orgs"
                onChange={props.orgSelected}
                options={options}
                placeholder="Select Org"
                // value={this.state.city}
            />
      </Box>
    );
};

export default OrganizationPicker;