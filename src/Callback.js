import React from 'react';
import { withRouter } from 'react-router-dom';
import * as qs from "query-string";

const Callback = (props) => {
    let params = qs.parse(props.location.search);
    return (
        <div>
            Code: {params.code}
            <p />
            State: {params.state}
        </div>
    );
};

export default withRouter(Callback);