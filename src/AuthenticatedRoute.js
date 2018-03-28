import React from 'react';
import { Route, Redirect } from "react-router-dom";
import AuthenticationManager from "./AuthenticationManager";

/////////////////////////////////////////////////
//Copied from React Router examples

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        AuthenticationManager.isLoggedIn() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

export default AuthenticatedRoute;