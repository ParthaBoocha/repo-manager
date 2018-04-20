import React from "react";
import { Box } from "gestalt";
import { Route } from 'react-router-dom';
import Login from './Login';
import Callback from './Callback';
import AuthenticatedRoute from "./AuthenticatedRoute";
import Repos from './Repos';

const Content = () => {
    return (
        <Box paddingX={12}>
          <AuthenticatedRoute exact path='/' component={Repos} />
          <Route exact path='/login' component={Login} />
          <Route path='/callback' component={Callback} />
          <AuthenticatedRoute path='/repos' component={Repos} />
        </Box>
    );
};

export default Content;