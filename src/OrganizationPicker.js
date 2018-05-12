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
            <Box column={2}>
                <SelectList
                    id="orgs"
                    name="orgs"
                    onChange={e => props.orgSelected(e.value)}
                    options={options}
                    placeholder="Select Org"
                    // value={this.state.city}
                />
            </Box>
      </Box>
    );
};

export default OrganizationPicker;